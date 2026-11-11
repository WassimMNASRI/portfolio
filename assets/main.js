/* Wassim Mnasri — portfolio. Behavior: theme, mobile menu, reveal, back to top. */
(function () {
  "use strict";

  var root = document.documentElement;
  var calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Theme: the choice is stored locally only when the visitor toggles it. */
  var themeButton = document.getElementById("theme-toggle");
  if (themeButton) {
    themeButton.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("mw-theme", next); } catch (e) { /* storage unavailable */ }
    });
  }

  /* Mobile menu. */
  var menuButton = document.getElementById("menu-toggle");
  var nav = document.getElementById("site-nav");
  if (menuButton && nav) {
    var setMenu = function (open) {
      nav.classList.toggle("is-open", open);
      menuButton.setAttribute("aria-expanded", open ? "true" : "false");
    };
    menuButton.addEventListener("click", function () { setMenu(!nav.classList.contains("is-open")); });
    nav.addEventListener("click", function (event) { if (event.target.closest("a")) { setMenu(false); } });
    document.addEventListener("keydown", function (event) { if (event.key === "Escape") { setMenu(false); } });
    window.matchMedia("(min-width: 901px)").addEventListener("change", function () { setMenu(false); });
  }

  /* Reveal on scroll. */
  var items = document.querySelectorAll(".reveal");
  if (!calm && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    items.forEach(function (item) { observer.observe(item); });
  } else {
    items.forEach(function (item) { item.classList.add("is-in"); });
  }

  /* Back to top. */
  var toTop = document.getElementById("to-top");
  if (toTop) {
    window.addEventListener("scroll", function () {
      toTop.classList.toggle("is-visible", window.scrollY > 520);
    }, { passive: true });
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: calm ? "auto" : "smooth" });
    });
  }
})();
