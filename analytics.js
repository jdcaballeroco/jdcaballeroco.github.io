const ANALYTICS_API =
    "https://personal-website-analytics-eta.vercel.app/api";

function getVisitorId() {
    let visitorId = localStorage.getItem("visitor_id");
    if (!visitorId) {

        visitorId = crypto.randomUUID();

        localStorage.setItem(
            "visitor_id",
            visitorId
        );
    }
    return visitorId;
}

function getLanguage() {
    return navigator.language || "unknown";
}

function getCurrentPage() {
    return window.location.pathname;
}

function getReferrer() {
    if (!document.referrer) {
        return "direct";
    }

    try {
        return new URL(
            document.referrer
        ).hostname;
    } catch {
        return "unknown";
    }
}

function getDeviceType() {
    const ua = navigator.userAgent;
    if (/Mobi|Android/i.test(ua)) {
        return "mobile";
    }
    return "desktop";
}

function getBrowser() {
    const ua = navigator.userAgent;
    if (ua.includes("Edg")) return "edge";
    if (ua.includes("Chrome")) return "chrome";
    if (ua.includes("Firefox")) return "firefox";
    if (ua.includes("Safari")) return "safari";
    return "unknown";
}

function getOS() {
    const ua = navigator.userAgent;
    if (ua.includes("Windows"))
        return "windows";

    if (ua.includes("Linux"))
        return "linux";

    if (ua.includes("Mac"))
        return "macos";

    if (ua.includes("Android"))
        return "android";

    if (ua.includes("iPhone"))
        return "ios";

    return "unknown";
}

function shouldTrackVisit() {
    const now = Date.now();
    const lastVisit =
        localStorage.getItem("last_visit_ts");

    if (!lastVisit) {
        localStorage.setItem(
            "last_visit_ts",
            now
        );
        return true;
    }

    const diff =
        now - Number(lastVisit);

    // 30 minutos
    if (diff > 30 * 60 * 1000) {
        localStorage.setItem(
            "last_visit_ts",
            now
        );
        return true;
    }

    return false;
}

async function trackVisit() {
    try {
        await fetch(
            ANALYTICS_API + "/visit",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    visitor_id: getVisitorId(),
                    page: getCurrentPage(),
                    referrer: getReferrer(),
                    language: getLanguage(),
                    device_type: getDeviceType(),
                    browser: getBrowser(),
                    os: getOS()
                })
            }
        );
    } catch (err) {
        console.error(
            "Analytics error",
            err
        );
    }
}

async function trackEvent(eventType, eventTarget) {
    try {
        await fetch(
            `${ANALYTICS_API}/event`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    visitor_id: getVisitorId(),
                    event_type: eventType,
                    event_target: eventTarget
                })
            }
        );
    } catch (err) {
        console.error(
            "Analytics event error",
            err
        );
    }
}

function setupEventTracking() {
    document
        .querySelectorAll("[data-analytics-event]")
        .forEach((element) => {
            element.addEventListener("click", () => {
                const eventType = element.getAttribute("data-analytics-event");
                const eventTarget = element.getAttribute("data-analytics-target");

                if (!eventType || !eventTarget) {
                    return;
                }

                trackEvent(eventType, eventTarget);
            });
        });
}

function setupScrollDepthTracking() {
    const thresholds = [
        { percent: 25, target: "scroll_25" },
        { percent: 50, target: "scroll_50" },
        { percent: 75, target: "scroll_75" },
        { percent: 100, target: "scroll_100" }
    ];
    const trackedThresholds = new Set();
    let scrollFrame = null;

    function checkScrollDepth() {
        scrollFrame = null;

        const documentElement = document.documentElement;
        const body = document.body;
        const scrollHeight = Math.max(
            documentElement.scrollHeight,
            body ? body.scrollHeight : 0
        );
        const viewportHeight =
            window.innerHeight ||
            documentElement.clientHeight;
        const maxScroll =
            scrollHeight - viewportHeight;

        if (maxScroll <= 0) {
            return;
        }

        const scrollTop =
            window.scrollY ||
            documentElement.scrollTop ||
            0;
        const scrollPercent = Math.min(
            100,
            Math.round((scrollTop / maxScroll) * 100)
        );

        thresholds.forEach(({ percent, target }) => {
            if (
                scrollPercent >= percent &&
                !trackedThresholds.has(percent)
            ) {
                trackedThresholds.add(percent);
                trackEvent("scroll_depth", target);
            }
        });

        if (trackedThresholds.size === thresholds.length) {
            window.removeEventListener(
                "scroll",
                scheduleScrollDepthCheck
            );
            window.removeEventListener(
                "resize",
                scheduleScrollDepthCheck
            );
        }
    }

    function scheduleScrollDepthCheck() {
        if (scrollFrame !== null) {
            return;
        }

        scrollFrame = window.requestAnimationFrame(
            checkScrollDepth
        );
    }

    window.addEventListener(
        "scroll",
        scheduleScrollDepthCheck,
        { passive: true }
    );
    window.addEventListener(
        "resize",
        scheduleScrollDepthCheck
    );

    scheduleScrollDepthCheck();
}

function setupEngagementTimeTracking() {
    [
        { delay: 30 * 1000, target: "time_30s" },
        { delay: 60 * 1000, target: "time_60s" },
        { delay: 120 * 1000, target: "time_120s" }
    ].forEach(({ delay, target }) => {
        window.setTimeout(
            () => {
                trackEvent(
                    "engagement_time",
                    target
                );
            },
            delay
        );
    });
}

document.addEventListener(
    "DOMContentLoaded",
    () => {
        if (shouldTrackVisit()) {
            trackVisit();
        }

        setupEventTracking();
        setupScrollDepthTracking();
        setupEngagementTimeTracking();
    }
);
