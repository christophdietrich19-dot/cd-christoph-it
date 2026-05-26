document.addEventListener("DOMContentLoaded", () => {
  const siteHeader = document.getElementById("siteHeader");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const yearElement = document.getElementById("year");

  const currentPath = window.location.pathname;

  const isProjectOverview =
    currentPath.endsWith("/cd-christoph-it/projekte/") ||
    currentPath.endsWith("/cd-christoph-it/projekte/index.html");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const premiumStyle = document.createElement("style");

  premiumStyle.textContent = `
    .premium-scroll-progress {
      position: fixed;
      top: 0;
      left: 0;
      width: 0%;
      height: 3px;
      z-index: 9999;
      background: linear-gradient(
        90deg,
        rgba(201, 168, 106, 0.2),
        rgba(229, 201, 139, 0.98),
        rgba(79, 143, 184, 0.55)
      );
      box-shadow: 0 0 18px rgba(201, 168, 106, 0.28);
      pointer-events: none;
      transition: width 0.08s linear;
    }

    .premium-scroll-top {
      position: fixed;
      right: 22px;
      bottom: 22px;
      width: 52px;
      height: 52px;
      z-index: 9998;
      display: grid;
      place-items: center;
      border-radius: 18px;
      border: 1px solid rgba(201, 168, 106, 0.26);
      background:
        linear-gradient(145deg, rgba(201, 168, 106, 0.16), transparent 48%),
        rgba(7, 6, 5, 0.82);
      color: #f4eee4;
      box-shadow:
        0 20px 46px rgba(0, 0, 0, 0.42),
        inset 0 1px 0 rgba(255, 255, 255, 0.06);
      backdrop-filter: blur(16px);
      cursor: pointer;
      opacity: 0;
      transform: translateY(18px) scale(0.94);
      pointer-events: none;
      transition:
        opacity 0.24s ease,
        transform 0.24s ease,
        border-color 0.24s ease,
        box-shadow 0.24s ease;
    }

    .premium-scroll-top.visible {
      opacity: 1;
      transform: translateY(0) scale(1);
      pointer-events: auto;
    }

    .premium-scroll-top:hover {
      border-color: rgba(229, 201, 139, 0.5);
      box-shadow:
        0 26px 60px rgba(0, 0, 0, 0.5),
        0 0 28px rgba(201, 168, 106, 0.18),
        inset 0 1px 0 rgba(255, 255, 255, 0.08);
    }

    .premium-scroll-top span {
      display: block;
      font-size: 1.3rem;
      line-height: 1;
      transform: translateY(-1px);
    }

    .nav-links a.nav-active {
      color: var(--text-main);
    }

    .nav-links a.nav-active::after {
      width: 100%;
      background: linear-gradient(
        90deg,
        var(--gold-light),
        rgba(79, 143, 184, 0.35),
        transparent
      );
      box-shadow: 0 0 18px rgba(201, 168, 106, 0.18);
    }

    .nav-links a.nav-active::before {
      content: "";
      position: absolute;
      left: -12px;
      top: 50%;
      width: 5px;
      height: 5px;
      border-radius: 999px;
      background: var(--gold-light);
      box-shadow: 0 0 14px rgba(229, 201, 139, 0.42);
      transform: translateY(-50%);
    }

    .premium-process-section {
      width: min(var(--max-width), calc(100% - 36px));
      margin: -36px auto 0;
      padding: 0 0 18px;
      position: relative;
      z-index: 5;
    }

    .premium-process-card {
      display: grid;
      gap: 22px;
      padding: 24px;
      border-radius: var(--radius-xl);
      background:
        linear-gradient(145deg, rgba(201, 168, 106, 0.1), transparent 48%),
        rgba(18, 15, 12, 0.72);
      border: 1px solid rgba(201, 168, 106, 0.16);
      box-shadow:
        0 24px 72px rgba(0, 0, 0, 0.34),
        inset 0 1px 0 rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(18px);
      overflow: hidden;
      position: relative;
    }

    .premium-process-card::before {
      content: "";
      position: absolute;
      inset: 0;
      background:
        radial-gradient(circle at 10% 0%, rgba(229, 201, 139, 0.08), transparent 34%),
        radial-gradient(circle at 84% 20%, rgba(79, 143, 184, 0.08), transparent 32%);
      pointer-events: none;
    }

    .premium-process-head {
      position: relative;
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 18px;
      flex-wrap: wrap;
    }

    .premium-process-head span {
      color: var(--gold);
      font-size: 0.74rem;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
    }

    .premium-process-head strong {
      color: var(--text-soft);
      font-size: 0.92rem;
      font-weight: 600;
    }

    .premium-process-steps {
      position: relative;
      z-index: 2;
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: 10px;
    }

    .premium-process-step {
      position: relative;
      min-height: 92px;
      padding: 18px 14px 16px;
      border-radius: 20px;
      background: rgba(3, 3, 3, 0.32);
      border: 1px solid rgba(255, 255, 255, 0.075);
      overflow: hidden;
    }

    .premium-process-step::before {
      content: "";
      position: absolute;
      left: 14px;
      right: 14px;
      top: 0;
      height: 2px;
      border-radius: 999px;
      background: linear-gradient(90deg, var(--gold-light), transparent);
      opacity: 0.55;
    }

    .premium-process-step small {
      display: block;
      margin-bottom: 8px;
      color: var(--text-muted);
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    .premium-process-step b {
      display: block;
      color: var(--text-main);
      font-size: 0.98rem;
      line-height: 1.25;
    }

    .premium-reveal {
      opacity: 0;
      transform: translateY(24px);
      transition:
        opacity 0.72s ease,
        transform 0.72s ease,
        box-shadow 0.72s ease;
    }

    .premium-reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .premium-reveal.visible.text-card,
    .premium-reveal.visible.project-card,
    .premium-reveal.visible.page-panel,
    .premium-reveal.visible.cta-card,
    .premium-reveal.visible.career-card {
      box-shadow:
        0 24px 72px rgba(0, 0, 0, 0.34),
        0 0 0 1px rgba(201, 168, 106, 0.025);
    }

    .project-state {
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }

    .premium-status-dot {
      width: 7px;
      height: 7px;
      display: inline-block;
      flex: 0 0 auto;
      border-radius: 999px;
      background: rgba(229, 201, 139, 0.92);
      box-shadow: 0 0 14px rgba(229, 201, 139, 0.34);
    }

    .project-state.status-testphase .premium-status-dot {
      background: rgba(79, 143, 184, 0.98);
      box-shadow: 0 0 16px rgba(79, 143, 184, 0.5);
      animation: premiumPulse 2.2s ease-in-out infinite;
    }

    .project-state.status-online .premium-status-dot,
    .project-state.status-demo .premium-status-dot {
      background: rgba(229, 201, 139, 0.96);
    }

    .project-state.status-einblick .premium-status-dot {
      background: rgba(197, 184, 165, 0.86);
      box-shadow: 0 0 12px rgba(197, 184, 165, 0.22);
    }

    @keyframes premiumPulse {
      0%, 100% {
        transform: scale(1);
        opacity: 0.72;
      }

      50% {
        transform: scale(1.45);
        opacity: 1;
      }
    }

    .project-register-wrap {
      position: sticky;
      top: 84px;
      z-index: 20;
      margin-top: 12px;
      margin-bottom: 46px;
      padding: 0;
      background: transparent;
      backdrop-filter: none;
    }

    .project-register-note {
      display: none !important;
    }

    .project-register-row {
      gap: 22px;
      align-items: stretch;
      justify-content: flex-start;
    }

    .project-register-tab {
      min-width: 178px;
      min-height: 126px;
      padding: 34px 22px 20px;
      border-radius: 26px;
      isolation: isolate;
      background:
        radial-gradient(circle at 18% 10%, rgba(229, 201, 139, 0.1), transparent 34%),
        linear-gradient(145deg, rgba(24, 18, 13, 0.96), rgba(7, 6, 5, 0.92));
      border: 1px solid rgba(201, 168, 106, 0.22);
      box-shadow:
        0 22px 54px rgba(0, 0, 0, 0.36),
        inset 0 1px 0 rgba(255, 255, 255, 0.05);
    }

    .project-register-tab.active {
      transform: translateY(-4px);
      border-color: rgba(229, 201, 139, 0.5);
      box-shadow:
        0 30px 70px rgba(0, 0, 0, 0.46),
        0 0 0 1px rgba(229, 201, 139, 0.08),
        inset 0 1px 0 rgba(255, 255, 255, 0.07);
    }

    .project-register-tab::before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: -1;
      border-radius: inherit;
      opacity: 0;
      background:
        radial-gradient(circle at 50% 0%, rgba(229, 201, 139, 0.18), transparent 42%),
        linear-gradient(145deg, rgba(201, 168, 106, 0.08), transparent 52%);
      transition: opacity 0.24s ease;
      pointer-events: none;
    }

    .project-register-tab:hover::before,
    .project-register-tab.active::before {
      opacity: 1;
    }

    .project-register-tab::after {
      left: 22px;
      right: auto;
      bottom: 18px;
      width: 62px;
      height: 2px;
      background: linear-gradient(90deg, var(--gold-light), transparent);
      opacity: 0.54;
    }

    .project-register-tab.active::after {
      opacity: 0.95;
      width: 78px;
    }

    .project-register-letter {
      top: -18px;
      right: 22px;
      width: 46px;
      height: 46px;
      border-radius: 17px;
      background:
        linear-gradient(135deg, rgba(229, 201, 139, 0.96), rgba(201, 168, 106, 0.88));
      color: #130e09;
      font-family: var(--font-heading);
      font-size: 1.34rem;
      font-weight: 900;
      box-shadow:
        0 16px 34px rgba(0, 0, 0, 0.35),
        0 0 0 1px rgba(255, 255, 255, 0.12);
    }

    .project-register-tab small {
      margin-bottom: 14px;
      color: rgba(201, 168, 106, 0.8);
      font-size: 0.72rem;
      letter-spacing: 0.22em;
    }

    .project-register-tab strong {
      font-family: var(--font-heading);
      color: var(--text-main);
      font-size: 1.5rem;
      line-height: 1.05;
      letter-spacing: -0.03em;
    }

    body.project-overview-premium .project-preview {
      border-color: rgba(201, 168, 106, 0.28);
      background:
        linear-gradient(145deg, rgba(201, 168, 106, 0.18), transparent 46%),
        rgba(3, 3, 3, 0.82);
      box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, 0.08),
        0 22px 60px rgba(0, 0, 0, 0.48);
    }

    body.project-overview-premium .project-preview img {
      filter: saturate(0.3) contrast(1.08) brightness(0.34) blur(1.4px);
      transform: scale(1.055);
    }

    body.project-overview-premium .project-card:hover .project-preview img {
      filter: saturate(0.42) contrast(1.1) brightness(0.42) blur(0.9px);
      transform: scale(1.08);
    }

    body.project-overview-premium .project-preview::before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: 2;
      pointer-events: none;
      background:
        linear-gradient(135deg, rgba(7, 6, 5, 0.96) 0%, rgba(7, 6, 5, 0.76) 46%, rgba(7, 6, 5, 0.9) 100%),
        radial-gradient(circle at 18% 18%, rgba(229, 201, 139, 0.2), transparent 34%),
        radial-gradient(circle at 84% 20%, rgba(79, 143, 184, 0.14), transparent 34%);
    }

    body.project-overview-premium .project-preview::after {
      content: "";
      position: absolute;
      inset: 0;
      z-index: 3;
      pointer-events: none;
      opacity: 0.34;
      background:
        repeating-linear-gradient(
          115deg,
          transparent 0px,
          transparent 22px,
          rgba(201, 168, 106, 0.055) 23px,
          transparent 25px
        ),
        linear-gradient(180deg, transparent 42%, rgba(7, 6, 5, 0.82) 100%);
    }

    .premium-preview-label {
      position: absolute;
      inset: 0;
      z-index: 4;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      gap: 12px;
      padding: 26px;
      pointer-events: none;
    }

    .premium-preview-label small {
      width: fit-content;
      max-width: 100%;
      padding: 8px 11px;
      border-radius: 999px;
      color: rgba(244, 238, 228, 0.9);
      background: rgba(3, 3, 3, 0.52);
      border: 1px solid rgba(201, 168, 106, 0.2);
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.13em;
      text-transform: uppercase;
      backdrop-filter: blur(12px);
    }

    .premium-preview-label strong {
      max-width: 92%;
      color: var(--text-main);
      font-family: var(--font-heading);
      font-size: clamp(2.1rem, 3.6vw, 3.5rem);
      line-height: 0.98;
      letter-spacing: -0.045em;
      text-shadow: 0 14px 34px rgba(0, 0, 0, 0.58);
    }

    .premium-preview-line {
      width: 74px;
      height: 2px;
      border-radius: 999px;
      background: linear-gradient(90deg, var(--gold-light), transparent);
      box-shadow: 0 0 18px rgba(201, 168, 106, 0.22);
    }

    @media (max-width: 1080px) {
      .project-register-row {
        gap: 18px;
      }

      .project-register-tab {
        min-width: 166px;
      }
    }

    @media (max-width: 980px) {
      .premium-process-steps {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

      .premium-preview-label strong {
        font-size: clamp(1.9rem, 7vw, 3rem);
      }
    }

    @media (max-width: 860px) {
      .project-register-row {
        flex-wrap: nowrap;
        overflow-x: auto;
        padding: 22px 2px 18px;
        scrollbar-width: thin;
      }

      .project-register-tab {
        min-width: 172px;
        flex: 0 0 auto;
      }
    }

    @media (max-width: 740px) {
      .premium-scroll-top {
        right: 16px;
        bottom: 16px;
        width: 48px;
        height: 48px;
        border-radius: 16px;
      }

      .nav-links a.nav-active::before {
        display: none;
      }

      .project-register-wrap {
        top: 70px;
        margin-left: -14px;
        margin-right: -14px;
        margin-bottom: 34px;
        padding-left: 14px;
        padding-right: 14px;
      }

      .project-register-tab {
        min-width: 158px;
        min-height: 116px;
        padding: 30px 18px 18px;
        border-radius: 23px;
      }

      .project-register-letter {
        width: 40px;
        height: 40px;
        top: -15px;
        right: 18px;
        border-radius: 15px;
        font-size: 1.18rem;
      }

      .project-register-tab strong {
        font-size: 1.3rem;
      }

      .premium-process-section {
        width: min(100% - 28px, var(--max-width));
        margin-top: -18px;
        padding-bottom: 8px;
      }

      .premium-process-card {
        padding: 20px;
        border-radius: 26px;
      }

      .premium-process-steps {
        grid-template-columns: 1fr;
      }

      .premium-process-step {
        min-height: auto;
      }

      .premium-preview-label {
        padding: 22px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .premium-scroll-progress,
      .premium-scroll-top,
      .premium-reveal,
      .project-register-tab::before,
      .premium-status-dot {
        animation: none !important;
        transition: none !important;
      }
    }
  `;

  document.head.appendChild(premiumStyle);

  if (isProjectOverview) {
    document.body.classList.add("project-overview-premium");
  }

  const scrollProgress = document.createElement("div");
  scrollProgress.className = "premium-scroll-progress";
  scrollProgress.setAttribute("aria-hidden", "true");
  document.body.appendChild(scrollProgress);

  const scrollTopButton = document.createElement("button");
  scrollTopButton.className = "premium-scroll-top";
  scrollTopButton.type = "button";
  scrollTopButton.setAttribute("aria-label", "Zurück nach oben");
  scrollTopButton.innerHTML = "<span>↑</span>";
  document.body.appendChild(scrollTopButton);

  const updateActiveNavigation = () => {
    if (!navLinks) return;

    const navItems = navLinks.querySelectorAll("a");

    navItems.forEach((link) => {
      const href = link.getAttribute("href") || "";
      const linkUrl = new URL(href, window.location.href);
      const linkPath = linkUrl.pathname;
      const linkText = link.textContent.trim().toLowerCase();

      link.classList.remove("nav-active");

      if (
        (linkText === "start" &&
          (currentPath.endsWith("/cd-christoph-it/") ||
            currentPath.endsWith("/cd-christoph-it/index.html"))) ||
        (linkText === "projekte" &&
          currentPath.includes("/cd-christoph-it/projekte")) ||
        (linkText === "über mich" &&
          currentPath.includes("/cd-christoph-it/ueber-mich")) ||
        (linkText === "kontakt" &&
          currentPath.includes("/cd-christoph-it/kontakt"))
      ) {
        link.classList.add("nav-active");
      }

      if (currentPath === linkPath) {
        link.classList.add("nav-active");
      }
    });
  };

  updateActiveNavigation();

  const shouldInsertProcessLine = () => {
    return (
      currentPath.endsWith("/cd-christoph-it/") ||
      currentPath.endsWith("/cd-christoph-it/index.html") ||
      currentPath.includes("/cd-christoph-it/projekte")
    );
  };

  const insertProcessLine = () => {
    if (!shouldInsertProcessLine()) return;
    if (document.querySelector(".premium-process-section")) return;

    const mainElement = document.querySelector("main");
    const firstSection = mainElement ? mainElement.querySelector("section") : null;

    if (!mainElement || !firstSection) return;

    const processSection = document.createElement("section");
    processSection.className = "premium-process-section premium-reveal";
    processSection.innerHTML = `
      <div class="premium-process-card">
        <div class="premium-process-head">
          <span>Arbeitsweise</span>
          <strong>Vom ersten Gedanken bis zur Verbesserung</strong>
        </div>

        <div class="premium-process-steps">
          <div class="premium-process-step">
            <small>01</small>
            <b>Verstehen</b>
          </div>

          <div class="premium-process-step">
            <small>02</small>
            <b>Ordnen</b>
          </div>

          <div class="premium-process-step">
            <small>03</small>
            <b>Umsetzen</b>
          </div>

          <div class="premium-process-step">
            <small>04</small>
            <b>Testen</b>
          </div>

          <div class="premium-process-step">
            <small>05</small>
            <b>Verbessern</b>
          </div>
        </div>
      </div>
    `;

    firstSection.insertAdjacentElement("afterend", processSection);
  };

  insertProcessLine();

  const addPremiumProjectPreviewLabels = () => {
    if (!isProjectOverview) return;

    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach((card) => {
      const preview = card.querySelector(".project-preview");
      const title = card.querySelector("h3")?.textContent.trim() || "Projekt";
      const status = card.querySelector(".project-state")?.textContent.trim() || "";
      const categoryLine =
        card
          .querySelector(".project-category-line")
          ?.textContent.replace("Kategorie:", "")
          .trim() || "Projektarchiv";

      if (!preview || preview.querySelector(".premium-preview-label")) return;

      const label = document.createElement("div");
      label.className = "premium-preview-label";
      label.innerHTML = `
        <small>${status || categoryLine}</small>
        <div class="premium-preview-line"></div>
        <strong>${title}</strong>
      `;

      preview.appendChild(label);
    });
  };

  addPremiumProjectPreviewLabels();

  const updateScrollEffects = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    scrollProgress.style.width = `${Math.min(progress, 100)}%`;

    if (siteHeader) {
      if (scrollTop > 12) {
        siteHeader.classList.add("scrolled");
      } else {
        siteHeader.classList.remove("scrolled");
      }
    }

    if (scrollTop > 460) {
      scrollTopButton.classList.add("visible");
    } else {
      scrollTopButton.classList.remove("visible");
    }
  };

  window.addEventListener("scroll", updateScrollEffects, { passive: true });
  window.addEventListener("resize", updateScrollEffects);
  updateScrollEffects();

  scrollTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  const statusElements = document.querySelectorAll(".project-state");

  statusElements.forEach((statusElement) => {
    const statusText = statusElement.textContent.trim().toLowerCase();

    if (!statusElement.querySelector(".premium-status-dot")) {
      const dot = document.createElement("span");
      dot.className = "premium-status-dot";
      dot.setAttribute("aria-hidden", "true");
      statusElement.prepend(dot);
    }

    if (statusText.includes("test")) {
      statusElement.classList.add("status-testphase");
    } else if (statusText.includes("demo")) {
      statusElement.classList.add("status-demo");
    } else if (statusText.includes("online")) {
      statusElement.classList.add("status-online");
    } else if (
      statusText.includes("einblick") ||
      statusText.includes("geschützt")
    ) {
      statusElement.classList.add("status-einblick");
    }
  });

  const revealSelectors = [
    ".text-card",
    ".project-card",
    ".page-panel",
    ".cta-card",
    ".career-card",
    ".project-mood-image",
    ".section-heading",
    ".premium-process-section",
  ];

  const revealElements = document.querySelectorAll(revealSelectors.join(", "));

  revealElements.forEach((element) => {
    element.classList.add("premium-reveal");
  });

  if ("IntersectionObserver" in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach((element) => {
      element.classList.add("visible");
    });
  }
});