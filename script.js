// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Form Submission
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // In a real application, you would send this data to a server
  // For this example, we'll just show an alert
  alert(`Thank you for your message, ${name}! I'll get back to you soon.`);

  // Reset form
  contactForm.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Navbar background change on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const isDarkMode = document.body.classList.contains("dark-theme");

  if (window.scrollY > 100) {
    if (isDarkMode) {
      header.style.backgroundColor = "rgba(15, 23, 42, 0.98)";
    } else {
      header.style.backgroundColor = "rgba(255, 255, 255, 0.98)";
    }
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  } else {
    if (isDarkMode) {
      header.style.backgroundColor = "rgba(15, 23, 42, 0.95)";
    } else {
      header.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
    }
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  }
});

// Animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

// Add animation classes to elements
document.addEventListener("DOMContentLoaded", () => {
  // Add initial animation class to hero section
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    heroContent.classList.add("animate-in");
  }
});

// Initialize Particles.js
document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: ["#2563eb", "#f59e0b", "#64748b"],
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#2563eb",
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 0.5,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });
});

// Theme Toggle Functionality
const themeSwitch = document.getElementById("theme-switch");
const header = document.querySelector("header");

// Check for saved theme preference or default to light
const currentTheme = localStorage.getItem("theme") || "light";

if (currentTheme === "dark") {
  themeSwitch.checked = true;
  document.body.classList.add("dark-theme");
  header.style.backgroundColor = "rgba(15, 23, 42, 0.95)";
}

themeSwitch.addEventListener("change", function () {
  if (this.checked) {
    document.body.classList.add("dark-theme");
    header.style.backgroundColor = "rgba(15, 23, 42, 0.95)";
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark-theme");
    header.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
    localStorage.setItem("theme", "light");
  }
});
