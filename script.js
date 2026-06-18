
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

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => navLinks.classList.remove("active"));
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

    scrollTopButton.classList.toggle("visible", scrollTop > 520);
  };

  window.addEventListener("scroll", updateScroll, { passive: true });
  updateScroll();

  scrollTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const revealElements = document.querySelectorAll(".card, .text-card, .project-card, .page-panel, .cta-card, .career-card, .tech-panel, .section-heading, .process-step, .contact-card, .legal-card");
  revealElements.forEach((element) => element.classList.add("reveal"));

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });

    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("visible"));
  }
});
