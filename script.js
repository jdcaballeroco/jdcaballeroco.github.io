const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = [...document.querySelectorAll(".site-nav a")];
const revealItems = [...document.querySelectorAll("[data-reveal]")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
const heroSection = document.querySelector(".hero");
const heroInner = heroSection ? heroSection.querySelector(".hero-grid") : null;
const siteHeader = document.querySelector(".site-header");
const languageSwitcher = document.querySelector(".language-switcher");
const languageOptions = [...document.querySelectorAll(".language-option")];
const translations = window.TRANSLATIONS || {};
const DEFAULT_LANGUAGE = "en";
const LANGUAGE_STORAGE_KEY = "portfolio-language";
let heroLayoutFrame = null;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getNestedValue(source, path) {
  return path.split(".").reduce((current, segment) => {
    if (current == null) {
      return undefined;
    }

    return current[segment];
  }, source);
}

function isEmptyTranslationValue(value) {
  if (value == null) {
    return true;
  }

  if (typeof value === "string") {
    return value.trim() === "";
  }

  if (Array.isArray(value)) {
    return value.length === 0 || value.every((item) => isEmptyTranslationValue(item));
  }

  if (typeof value === "object") {
    return Object.values(value).length === 0 || Object.values(value).every((item) => isEmptyTranslationValue(item));
  }

  return false;
}

function resolveTranslation(language, path) {
  const activeLanguage = translations[language] || translations[DEFAULT_LANGUAGE] || {};
  const fallbackLanguage = translations[DEFAULT_LANGUAGE] || {};
  const activeValue = getNestedValue(activeLanguage, path);

  if (!isEmptyTranslationValue(activeValue)) {
    return activeValue;
  }

  return getNestedValue(fallbackLanguage, path);
}

function compareTranslationShapes(baseNode, targetNode, path = "") {
  const warnings = [];
  const baseIsArray = Array.isArray(baseNode);
  const targetIsArray = Array.isArray(targetNode);

  if (baseIsArray !== targetIsArray) {
    warnings.push(`Type mismatch at "${path || "root"}"`);
    return warnings;
  }

  if (baseNode && typeof baseNode === "object" && !baseIsArray) {
    const baseKeys = Object.keys(baseNode);
    const targetKeys = targetNode && typeof targetNode === "object" ? Object.keys(targetNode) : [];

    baseKeys.forEach((key) => {
      const childPath = path ? `${path}.${key}` : key;

      if (!(key in (targetNode || {}))) {
        warnings.push(`Missing key in target language: "${childPath}"`);
        return;
      }

      warnings.push(...compareTranslationShapes(baseNode[key], targetNode[key], childPath));
    });

    targetKeys.forEach((key) => {
      const childPath = path ? `${path}.${key}` : key;

      if (!(key in baseNode)) {
        warnings.push(`Unexpected key in target language: "${childPath}"`);
      }
    });

    return warnings;
  }

  if (baseIsArray) {
    const baseLength = baseNode.length;
    const targetLength = Array.isArray(targetNode) ? targetNode.length : 0;

    if (baseLength !== targetLength) {
      warnings.push(`Array length mismatch at "${path || "root"}": expected ${baseLength}, received ${targetLength}`);
    }

    const minLength = Math.min(baseLength, targetLength);
    for (let index = 0; index < minLength; index += 1) {
      warnings.push(...compareTranslationShapes(baseNode[index], targetNode[index], `${path}[${index}]`));
    }
  }

  return warnings;
}

function validateTranslations() {
  const base = translations[DEFAULT_LANGUAGE];

  if (!base) {
    console.warn("[i18n] Missing default English translations.");
    return;
  }

  Object.entries(translations).forEach(([language, value]) => {
    if (language === DEFAULT_LANGUAGE) {
      return;
    }

    const warnings = compareTranslationShapes(base, value);
    warnings.forEach((warning) => console.warn(`[i18n][${language}] ${warning}`));
  });
}

function renderList(items, renderItem) {
  return items.map(renderItem).join("");
}

function adjustHeroLayout() {
  if (!heroSection || !heroInner) {
    return;
  }

  const headerHeight = siteHeader ? siteHeader.offsetHeight : 0;
  document.documentElement.style.setProperty("--header-height", `${headerHeight}px`);

  const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 0;
  const heroStyles = window.getComputedStyle(heroSection);
  const paddingTop = parseFloat(heroStyles.paddingTop) || 0;
  const paddingBottom = parseFloat(heroStyles.paddingBottom) || 0;
  const contentHeight = heroInner.getBoundingClientRect().height + paddingTop + paddingBottom;
  const availableHeight = Math.max(viewportHeight - headerHeight, 0);
  const shouldUseAuto = contentHeight > availableHeight;

  heroSection.classList.toggle("hero--fit", !shouldUseAuto);
  heroSection.classList.toggle("hero--auto", shouldUseAuto);
}

function scheduleHeroLayoutAdjustment() {
  if (heroLayoutFrame !== null) {
    window.cancelAnimationFrame(heroLayoutFrame);
  }

  heroLayoutFrame = window.requestAnimationFrame(() => {
    heroLayoutFrame = window.requestAnimationFrame(() => {
      heroLayoutFrame = null;
      adjustHeroLayout();
    });
  });
}

function applyMetadata(language) {
  const meta = resolveTranslation(language, "meta");

  if (!meta) {
    return;
  }

  document.documentElement.lang = language;
  document.title = meta.title;

  const mappings = [
    ["#meta-description", meta.description],
    ["#meta-keywords", meta.keywords],
    ["#meta-og-title", meta.ogTitle],
    ["#meta-og-description", meta.ogDescription],
    ["#meta-twitter-title", meta.twitterTitle],
    ["#meta-twitter-description", meta.twitterDescription]
  ];

  mappings.forEach(([selector, value]) => {
    const element = document.querySelector(selector);
    if (!element || typeof value !== "string") {
      return;
    }

    element.setAttribute("content", value);
  });
}

function applyLanguage(language) {
  const selectedLanguage = translations[language] ? language : DEFAULT_LANGUAGE;
  const content = {
    common: resolveTranslation(selectedLanguage, "common"),
    brand: resolveTranslation(selectedLanguage, "brand"),
    nav: resolveTranslation(selectedLanguage, "nav"),
    hero: resolveTranslation(selectedLanguage, "hero"),
    about: resolveTranslation(selectedLanguage, "about"),
    experience: resolveTranslation(selectedLanguage, "experience"),
    skills: resolveTranslation(selectedLanguage, "skills"),
    project: resolveTranslation(selectedLanguage, "project"),
    future: resolveTranslation(selectedLanguage, "future"),
    education: resolveTranslation(selectedLanguage, "education"),
    honors: resolveTranslation(selectedLanguage, "honors"),
    contact: resolveTranslation(selectedLanguage, "contact"),
    footer: resolveTranslation(selectedLanguage, "footer")
  };

  applyMetadata(selectedLanguage);

  const skipLink = document.querySelector(".skip-link");
  if (skipLink) {
    skipLink.textContent = content.common.skipLink;
  }

  if (languageSwitcher) {
    languageSwitcher.setAttribute("aria-label", content.common.languageSelectorLabel);
  }

  const brand = document.querySelector(".brand");
  if (brand) {
    brand.setAttribute("aria-label", content.brand.homeAriaLabel);
  }

  const brandMark = document.querySelector(".brand-mark");
  if (brandMark) {
    brandMark.setAttribute("alt", content.brand.logoAlt);
  }

  const brandName = document.querySelector(".brand-text strong");
  const brandRole = document.querySelector(".brand-text span");
  if (brandName) {
    brandName.textContent = content.brand.name;
  }
  if (brandRole) {
    brandRole.textContent = content.brand.role;
  }

  navLinks.forEach((link, index) => {
    if (content.nav.links[index]) {
      link.textContent = content.nav.links[index];
    }
  });

  const toggleLabel = document.querySelector(".nav-toggle .sr-only");
  if (toggleLabel) {
    toggleLabel.textContent = content.nav.toggleLabel;
  }

  const heroCopy = document.querySelector(".hero-copy");
  if (heroCopy) {
    const eyebrow = heroCopy.querySelector(".eyebrow");
    const title = heroCopy.querySelector("h1");
    const lead = heroCopy.querySelector(".hero-lead");
    const buttons = heroCopy.querySelectorAll(".hero-actions a");
    const heroLinks = heroCopy.querySelectorAll(".hero-links a");

    if (eyebrow) eyebrow.textContent = content.hero.eyebrow;
    if (title) title.textContent = content.hero.title;
    if (lead) lead.textContent = content.hero.lead;
    if (buttons[0]) buttons[0].textContent = content.hero.buttons.primary;
    if (buttons[1]) buttons[1].textContent = content.hero.buttons.secondary;
    heroLinks.forEach((link, index) => {
      if (content.hero.links[index]) {
        link.textContent = content.hero.links[index];
      }
    });
  }

  const signalLabel = document.querySelector(".signal-label");
  const signalTitle = document.querySelector(".signal-card h2");
  const signalList = document.querySelector(".signal-list");
  const metricRow = document.querySelector(".metric-row");
  if (signalLabel) signalLabel.textContent = content.hero.panel.label;
  if (signalTitle) signalTitle.textContent = content.hero.panel.title;
  if (signalList) {
    signalList.innerHTML = renderList(content.hero.panel.bullets, (item) => `<li>${escapeHtml(item)}</li>`);
  }
  if (metricRow) {
    metricRow.innerHTML = renderList(
      content.hero.panel.metrics,
      (metric) => `
        <article class="metric-card">
          <strong>${escapeHtml(metric.title)}</strong>
          <span>${escapeHtml(metric.description)}</span>
        </article>
      `
    );
  }

  const aboutSection = document.querySelector("#about");
  if (aboutSection) {
    const heading = aboutSection.querySelector(".section-heading");
    const paragraphs = aboutSection.querySelectorAll(".section-content p");
    const pills = aboutSection.querySelector(".pill-row");

    if (heading) {
      const eyebrow = heading.querySelector(".eyebrow");
      const title = heading.querySelector("h2");
      if (eyebrow) eyebrow.textContent = content.about.eyebrow;
      if (title) title.textContent = content.about.title;
    }

    paragraphs.forEach((paragraph, index) => {
      if (content.about.paragraphs[index]) {
        paragraph.textContent = content.about.paragraphs[index];
      }
    });

    if (pills) {
      pills.innerHTML = renderList(content.about.pills, (pill) => `<span>${escapeHtml(pill)}</span>`);
    }
  }

  const experienceSection = document.querySelector("#experience");
  if (experienceSection) {
    const heading = experienceSection.querySelector(".section-heading");
    const timeline = experienceSection.querySelector(".timeline");

    if (heading) {
      const eyebrow = heading.querySelector(".eyebrow");
      const title = heading.querySelector("h2");
      if (eyebrow) eyebrow.textContent = content.experience.eyebrow;
      if (title) title.textContent = content.experience.title;
    }

    if (timeline) {
      timeline.innerHTML = renderList(
        content.experience.roles,
        (entry) => `
          <article class="timeline-card">
            <div class="timeline-meta">
              <p class="timeline-role">${escapeHtml(entry.role)}</p>
              <p class="timeline-company">${escapeHtml(entry.company)}</p>
              <p class="timeline-date">${escapeHtml(entry.date)}</p>
            </div>
            <div class="timeline-body">
              <p>${escapeHtml(entry.summary)}</p>
              <ul>${renderList(entry.bullets, (bullet) => `<li>${escapeHtml(bullet)}</li>`)}</ul>
            </div>
          </article>
        `
      );
    }
  }

  const skillsSection = document.querySelector("#skills");
  if (skillsSection) {
    const heading = skillsSection.querySelector(".section-heading");
    const grid = skillsSection.querySelector(".skill-grid");

    if (heading) {
      const eyebrow = heading.querySelector(".eyebrow");
      const title = heading.querySelector("h2");
      if (eyebrow) eyebrow.textContent = content.skills.eyebrow;
      if (title) title.textContent = content.skills.title;
    }

    if (grid) {
      grid.innerHTML = renderList(
        content.skills.groups,
        (group) => `
          <article class="skill-card">
            <h3>${escapeHtml(group.title)}</h3>
            <ul>${renderList(group.items, (item) => `<li>${escapeHtml(item)}</li>`)}</ul>
          </article>
        `
      );
    }
  }

  const projectSection = document.querySelector("#project .project-card");
  if (projectSection) {
    if (Array.isArray(content.project.projects) && content.project.projects.length > 0) {
      projectSection.classList.remove("project-card--legacy");
      projectSection.innerHTML = `
        <div class="project-copy">
          <p class="eyebrow">${escapeHtml(content.project.eyebrow)}</p>
          <h2>${escapeHtml(content.project.title)}</h2>
          <p class="project-summary">${escapeHtml(content.project.summary)}</p>
        </div>

        <div class="project-grid">
          ${renderList(
            content.project.projects,
            (project) => `
              <article class="project-item">
                <div class="project-item-copy">
                  ${project.subtitle ? `<p class="project-kicker">${escapeHtml(project.subtitle)}</p>` : ""}
                  <h3>${escapeHtml(project.title)}</h3>
                  ${project.description ? `<p>${escapeHtml(project.description)}</p>` : ""}
                </div>
                <ul class="project-facets">
                  ${renderList(project.highlights || [], (item) => `<li>${escapeHtml(item)}</li>`)}
                </ul>
                <div class="pill-row">
                  ${renderList(project.tags || [], (tag) => `<span>${escapeHtml(tag)}</span>`)}
                </div>
                ${project.status ? `<p class="project-status">${escapeHtml(project.status)}</p>` : ""}
              </article>
            `
          )}
        </div>
      `;
    } else {
      projectSection.classList.add("project-card--legacy");
      projectSection.innerHTML = `
        <div class="project-copy">
          <p class="eyebrow">${escapeHtml(content.project.eyebrow)}</p>
          <h2>${escapeHtml(content.project.title)}</h2>
          <p class="project-summary">${escapeHtml(content.project.summary)}</p>
          <p>${escapeHtml(content.project.description)}</p>
          <div class="project-detail-grid">
            ${renderList(
              content.project.details || [],
              (detail) => `
                <article class="project-detail">
                  <h3>${escapeHtml(detail.title)}</h3>
                  <p>${escapeHtml(detail.text)}</p>
                </article>
              `
            )}
          </div>
        </div>
        <div class="project-side">
          <div class="stack-card">
            <p class="stack-title">${escapeHtml(content.project.framingLabel)}</p>
            <ul class="project-facets">
              ${renderList(content.project.framing || [], (item) => `<li>${escapeHtml(item)}</li>`)}
            </ul>
          </div>
          <div class="stack-card">
            <p class="stack-title">${escapeHtml(content.project.stackLabel)}</p>
            <div class="pill-row">
              ${renderList(content.project.stack || [], (item) => `<span>${escapeHtml(item)}</span>`)}
            </div>
          </div>
          <div class="placeholder-card">
            <p class="stack-title">${escapeHtml(content.project.statusLabel)}</p>
            ${renderList(content.project.status || [], (item) => `<p>${escapeHtml(item)}</p>`)}
          </div>
        </div>
      `;
    }
  }

  const futureSection = document.querySelector("#future");
  if (futureSection) {
    const heading = futureSection.querySelector(".section-heading");
    const grid = futureSection.querySelector(".future-grid");

    if (heading) {
      const eyebrow = heading.querySelector(".eyebrow");
      const title = heading.querySelector("h2");
      if (eyebrow) eyebrow.textContent = content.future.eyebrow;
      if (title) title.textContent = content.future.title;
    }

    if (grid) {
      grid.innerHTML = renderList(
        content.future.cards,
        (card) => `
          <article class="future-card">
            <h3>${escapeHtml(card.title)}</h3>
            <p>${escapeHtml(card.text)}</p>
          </article>
        `
      );
    }
  }

  const educationContainer = document.querySelector("#education .two-column");
  if (educationContainer) {
    const [educationColumn, certificationColumn] = educationContainer.children;

    if (educationColumn) {
      educationColumn.innerHTML = `
        <div class="section-heading">
          <p class="eyebrow">${escapeHtml(content.education.education.eyebrow)}</p>
          <h2>${escapeHtml(content.education.education.title)}</h2>
        </div>
        <div class="info-card">
          ${renderList(
            content.education.education.items,
            (item) => `
              <article class="info-item">
                <h3>${escapeHtml(item.title)}</h3>
                <p>${escapeHtml(item.institution)}</p>
                <p>${escapeHtml(item.years)}</p>
                ${item.description ? `<p class="education-description">${escapeHtml(item.description)}</p>` : ""}
              </article>
            `
          )}
        </div>
      `;
    }

    if (certificationColumn) {
      certificationColumn.innerHTML = `
        <div class="section-heading">
          <p class="eyebrow">${escapeHtml(content.education.certifications.eyebrow)}</p>
          <h2>${escapeHtml(content.education.certifications.title)}</h2>
        </div>
        <div class="info-card">
          ${renderList(
            content.education.certifications.items,
            (item) => `
              <article class="info-item">
                <h3>${escapeHtml(item.title)}</h3>
                <p>${escapeHtml(item.issuer)}</p>
              </article>
            `
          )}
        </div>
      `;
    }
  }

  const honorsSection = document.querySelector("#honors");
  if (honorsSection) {
    const heading = honorsSection.querySelector(".section-heading");
    const list = honorsSection.querySelector(".honor-list");

    if (heading) {
      const eyebrow = heading.querySelector(".eyebrow");
      const title = heading.querySelector("h2");
      if (eyebrow) eyebrow.textContent = content.honors.eyebrow;
      if (title) title.textContent = content.honors.title;
    }

    if (list) {
      list.innerHTML = renderList(
        content.honors.items,
        (item) => `
          <article class="honor-card">
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.text)}</p>
          </article>
        `
      );
    }
  }

  const contactSection = document.querySelector("#contact .contact-card");
  if (contactSection) {
    const copy = contactSection.querySelector(".contact-copy");
    const portrait = contactSection.querySelector(".contact-portrait img");

    if (copy) {
      copy.innerHTML = `
        <p class="eyebrow">${escapeHtml(content.contact.eyebrow)}</p>
        <h2>${escapeHtml(content.contact.title)}</h2>
        <p>${escapeHtml(content.contact.text)}</p>
        <div class="contact-actions">
          <a class="button button-primary" href="mailto:jesuscaballero0@gmail.com">${escapeHtml(content.contact.actions[0])}</a>
          <a class="button button-secondary" href="https://www.linkedin.com/in/jdcaballeroco/" target="_blank" rel="noreferrer">${escapeHtml(content.contact.actions[1])}</a>
          <a class="button button-secondary" href="https://github.com/jdcaballeroco" target="_blank" rel="noreferrer">${escapeHtml(content.contact.actions[2])}</a>
        </div>
      `;
    }

    if (portrait) {
      portrait.setAttribute("alt", content.contact.portraitAlt);
    }
  }

  const footerItems = document.querySelectorAll(".footer-wrap p");
  if (footerItems[0]) footerItems[0].textContent = content.footer.name;
  if (footerItems[1]) footerItems[1].textContent = content.footer.tagline;

  languageOptions.forEach((option) => {
    const isActive = option.dataset.language === selectedLanguage;
    option.classList.toggle("is-active", isActive);
    option.setAttribute("aria-pressed", String(isActive));
  });

  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, selectedLanguage);
  } catch (error) {
    console.warn("[i18n] Unable to persist selected language.", error);
  }

  scheduleHeroLayoutAdjustment();
}

function getStoredLanguage() {
  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored && translations[stored]) {
      return stored;
    }
  } catch (error) {
    console.warn("[i18n] Unable to read stored language.", error);
  }

  return DEFAULT_LANGUAGE;
}

validateTranslations();
applyLanguage(getStoredLanguage());
window.setSiteLanguage = applyLanguage;
window.PORTFOLIO_I18N = {
  getLanguage: getStoredLanguage,
  setLanguage: applyLanguage,
  validateTranslations
};

languageOptions.forEach((option) => {
  option.addEventListener("click", () => {
    applyLanguage(option.dataset.language);
  });
});

window.addEventListener("resize", scheduleHeroLayoutAdjustment);
window.addEventListener("load", scheduleHeroLayoutAdjustment);

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        navLinks.forEach((link) => {
          const isMatch = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("is-active", isMatch);
        });
      });
    },
    {
      rootMargin: "-35% 0px -45% 0px",
      threshold: 0
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}
