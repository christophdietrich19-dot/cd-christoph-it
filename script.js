document.addEventListener("DOMContentLoaded", () => {
  const siteHeader = document.getElementById("siteHeader");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const currentPath = window.location.pathname;

  if (navLinks) {
    navLinks.querySelectorAll("a").forEach((link) => {
      const linkPath = new URL(link.getAttribute("href"), window.location.href).pathname;
      const text = link.textContent.trim().toLowerCase();

      if (
        (text === "start" && (currentPath === "/" || currentPath.endsWith("/index.html"))) ||
        (text === "projekte" && currentPath.includes("/projekte")) ||
        (text === "über mich" && currentPath.includes("/ueber-mich")) ||
        (text === "kontakt" && currentPath.includes("/kontakt")) ||
        currentPath === linkPath
      ) {
        link.classList.add("nav-active");
      }
    });
  }

  const closeMenu = () => {
    if (!menuToggle || !navLinks) return;
    navLinks.classList.remove("active");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  };

  if (menuToggle && navLinks) {
    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("active");
      menuToggle.classList.toggle("active", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });

    document.addEventListener("click", (event) => {
      if (!navLinks.classList.contains("active")) return;
      if (navLinks.contains(event.target) || menuToggle.contains(event.target)) return;
      closeMenu();
    });
  }

  const scrollTopButton = document.createElement("button");
  scrollTopButton.className = "scroll-top";
  scrollTopButton.type = "button";
  scrollTopButton.setAttribute("aria-label", "Zurück nach oben");
  scrollTopButton.textContent = "↑";
  document.body.appendChild(scrollTopButton);

  const updateScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (siteHeader) {
      siteHeader.classList.toggle("scrolled", scrollTop > 10);
    }

    scrollTopButton.classList.toggle("visible", scrollTop > 560);
  };

  window.addEventListener("scroll", updateScroll, { passive: true });
  updateScroll();

  scrollTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const revealElements = document.querySelectorAll(
    ".card, .text-card, .project-card, .page-panel, .cta-card, .career-card, .tech-panel, .section-heading, .contact-card, .legal-card"
  );

  revealElements.forEach((element) => element.classList.add("reveal"));

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -20px 0px" });

    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("visible"));
  }
});
