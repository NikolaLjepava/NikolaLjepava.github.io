/**
 * Force dark mode permanently.
 */
document.documentElement.setAttribute("data-theme", "dark");

if (window.localStorage) {
  window.localStorage.removeItem("theme");
}
