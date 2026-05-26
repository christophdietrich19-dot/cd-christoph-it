document.addEventListener("DOMContentLoaded", () => {
  const siteHeader = document.getElementById("siteHeader");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  if (siteHeader) {
    const handleScroll = () => {
      if (window.scrollY > 12) {
        siteHeader.classList.add("scrolled");
      } else {
        siteHeader.classList.remove("scrolled");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
  }

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

  const revealElements = document.querySelectorAll(".reveal");

  if (revealElements.length > 0) {
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
        threshold: 0.16,
      }
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });
  }
});