const navListEl = document.querySelector(".navigation__list");

const listFeatureEL = document.querySelector(".list-feature");
const listCompanyEl = document.querySelector(".list-company");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");

/**
 * Set the style of the overlay.
 *
 * @param {number} opacity - The opacity of the overlay, in the range from 0 to 1.
 * @param {string} pointerEvents - The behavior of the overlay for click and drag events, such as "all" or "none."
 * @param {string} visibility - The visibility of the overlay, such as "visible" or "hidden."
 */

function overlayStyle(opacity, pointerEvents, visibility) {
  overlay.style.opacity = +opacity;
  overlay.style.pointerEvents = pointerEvents;
  overlay.style.visibility = visibility;
}

function toggleListImage(el) {
  const active = el.classList.toggle("active");
  const imgElement = el.closest("li").querySelector("img");

  const isActive = active ? "arrow-up" : "arrow-down";
  imgElement.alt = isActive;
  imgElement.src = `images/icon-${isActive}.svg`;
}

header.addEventListener("click", (e) => {
  if (e.target.closest(".btn-mobile-open")) {
    header.classList.add("nav-open");
    overlayStyle(1, "all", "visible");
  }

  if (e.target.closest(".btn-mobile-close")) {
    header.classList.remove("nav-open");
    overlayStyle(0, "none", "hidden");
  }
});

navListEl.addEventListener("click", (e) => {
  e.preventDefault();

  const el = e.target.closest("li");

  if (!el) return;

  if (el.dataset.name === "Features") {
    toggleListImage(listFeatureEL, "img");
  }

  if (el.dataset.name === "Company") {
    toggleListImage(listCompanyEl, "img");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    overlayStyle(0, "none", "hidden");
  }

  if (window.innerWidth <= 900 && header.classList.contains("nav-open")) {
    overlayStyle(1, "all", "visible");
  }
});
