// Mobile Navigation Functionality
function toggleMobileMenu() {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navbarUl = document.querySelector(".navbar ul");

  mobileMenuBtn.classList.toggle("active");
  navbarUl.classList.toggle("active");
  document.body.classList.toggle("sidebar-open");
}

document.addEventListener("DOMContentLoaded", function () {
  // Close mobile menu when clicking outside
  document.addEventListener("click", function (e) {
    if (window.innerWidth <= 768) {
      const isClickInsideNav = e.target.closest(".navbar");
      const isClickOnMenuBtn = e.target.closest(".mobile-menu-btn");
      const navbarUl = document.querySelector(".navbar ul");

      if (
        !isClickInsideNav &&
        !isClickOnMenuBtn &&
        navbarUl.classList.contains("active")
      ) {
        const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
        mobileMenuBtn.classList.remove("active");
        navbarUl.classList.remove("active");
        document.body.classList.remove("sidebar-open");
      }
    }
  });
});

// Smooth scroll for anchor links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    const target = document.querySelector(href);

    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add loading state to forms
document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = "Loading...";

        // Re-enable after 3 seconds (adjust as needed)
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }, 3000);
      }
    });
  });
});

// Enhanced intersection observer for smooth animations
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe elements for fade-in animation
  const animateElements = document.querySelectorAll(
    ".each_box, .footer-section"
  );
  animateElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});

// Add keyboard navigation support
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    // Close all dropdowns
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("active");
    });
  }
});

// Optimize navbar for different screen orientations
window.addEventListener("resize", () => {
  if (window.innerWidth > 991) {
    const nav = document.getElementById("mobile-nav");
    const btn = document.querySelector(".mobile-menu-btn");

    if (nav && btn) {
      nav.classList.remove("active");
      btn.innerHTML = "☰";
      btn.setAttribute("aria-expanded", "false");
    }
  }

  // Close all dropdowns when resizing
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach((dropdown) => {
    dropdown.classList.remove("active");
  });
});

// Add touch-friendly hover effects for mobile
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar a");

  navLinks.forEach((link) => {
    link.addEventListener("touchstart", function () {
      this.style.transform = "scale(0.95)";
    });

    link.addEventListener("touchend", function () {
      this.style.transform = "scale(1)";
    });
  });
});

function toggleMobileMenu() {
  const nav = document.getElementById("mobile-nav");
  nav.classList.toggle("active");
}

let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll(".slide");

  slides.forEach((slide) => {
    slide.classList.remove("fade"); // Remove 'fade' (make all invisible)
  });

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].classList.add("fade"); // Show current slide

  setTimeout(showSlides, 4000); // Change slide every 4 seconds
}

document.addEventListener("DOMContentLoaded", showSlides);

// function toggleMobileMenu() {
//   const btn = document.querySelector(".mobile-menu-btn");
//   const nav = document.querySelector(".navbar");
//   document.body.classList.toggle("menu-open");
//   btn.classList.toggle("active");
//   nav.classList.toggle("active");
// }

const logoList = document.querySelector(".logo-list");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

let currentIndex = 0;
const visibleLogos = 3; // show 3 logos per slide
const totalLogos = document.querySelectorAll(".logo-list img").length;

function updateSlide() {
  const logoWidth = logoList.querySelector("img").offsetWidth + 40; // width + gap
  logoList.style.transform = `translateX(-${currentIndex * logoWidth}px)`;
}

rightArrow.addEventListener("click", () => {
  if (currentIndex < totalLogos - visibleLogos) {
    currentIndex++;
    updateSlide();
  }
});

leftArrow.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlide();
  }
});
