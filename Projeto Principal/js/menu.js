const btnTheme = document.getElementById("tema-btn");
const iconeTema = document.getElementById("icone-tema");
const menu = document.getElementById("menu");
const btnMenu = document.getElementById("menu-mobile");

function updateThemeIcon() {
  if (!iconeTema) return;
  if (document.body.classList.contains("dark-theme")) {
    iconeTema.src = "img/sol.png";
    iconeTema.alt = "Ativar tema claro";
  } else {
    iconeTema.src = "img/lua.png";
    iconeTema.alt = "Ativar tema escuro";
  }
}

function applyTheme(isDark) {
  document.body.classList.toggle("dark-theme", isDark);
  updateThemeIcon();
  localStorage.setItem("site-theme", isDark ? "dark" : "light");
}

const savedTheme = localStorage.getItem("site-theme");
if (savedTheme) {
  applyTheme(savedTheme === "dark");
} else {
  updateThemeIcon();
}

if (btnTheme) {
  btnTheme.addEventListener("click", () => {
    applyTheme(!document.body.classList.contains("dark-theme"));
  });
}

if (btnMenu && menu) {
  btnMenu.addEventListener("click", (e) => {
    e.preventDefault();
    const statusMenu = window.getComputedStyle(menu).display;
    menu.style.display = statusMenu === "flex" ? "none" : "flex";
  });
}
