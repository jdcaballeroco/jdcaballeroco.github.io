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

document.addEventListener(
    "DOMContentLoaded",
    () => {
        if (shouldTrackVisit()) {
            trackVisit();
        }
    }
);