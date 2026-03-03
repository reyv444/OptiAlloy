// ===============================
// HAMBURGER + SIDE MENU
// ===============================
const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");

// Toggle menu
hamburger.addEventListener("click", () => {
  sideMenu.classList.toggle("open");
});

// Close menu when clicking a link
document.querySelectorAll(".side-menu a").forEach(link => {
  link.addEventListener("click", () => sideMenu.classList.remove("open"));
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!sideMenu.contains(e.target) && !hamburger.contains(e.target)) {
    sideMenu.classList.remove("open");
  }
});

// Close menu with ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    sideMenu.classList.remove("open");
  }
});


// ===============================
// FADE‑UP SCROLL ANIMATIONS
// ===============================

// Debounce for performance
function debounce(func, delay = 10) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

const observer = new IntersectionObserver(
  debounce((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, 50),
  { threshold: 0.2 }
);

document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));


// ===============================
// LOADER FADE‑OUT (CLEAN + SMOOTH)
// ===============================
window.addEventListener("load", () => {
  const loaderScreen = document.querySelector(".loader-screen");

  if (!loaderScreen) return;

  loaderScreen.style.opacity = "0";
  loaderScreen.style.pointerEvents = "none";

  setTimeout(() => {
    loaderScreen.remove(); // cleaner than display:none
  }, 700);
});
