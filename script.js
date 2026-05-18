const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const year = document.getElementById("year");
const siteHeader = document.getElementById("siteHeader");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  const links = navLinks.querySelectorAll("a");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

const updateHeader = () => {
  if (!siteHeader) return;

  if (window.scrollY > 18) {
    siteHeader.classList.add("scrolled");
  } else {
    siteHeader.classList.remove("scrolled");
  }
};

window.addEventListener("scroll", updateHeader);
updateHeader();

const revealElements = document.querySelectorAll(
  ".section-heading, .text-card, .project-card, .page-panel, .career-card, .cta-card, .contact-card, .legal-card"
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.14,
  }
);

revealElements.forEach((element) => {
  observer.observe(element);
});