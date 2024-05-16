function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');

  menu.classList.toggle('open');
  icon.classList.toggle('open');
}

// dark/light mode logic
const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  setDarkMode();
}

btn.addEventListener("click", function () {
  console.log("hell");
  setTheme();
})

btn2.addEventListener("click", function () {
  console.log("hell");
  setTheme();
})

function setTheme() {
  const currentTheme = document.body.getAttribute("theme");

  if (currentTheme === "dark") {
    setLightMode();
  } else {
    setDarkMode();
  }
}

function setDarkMode() {
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");

  themeIcons.forEach(icon => {
    // in dark mode, light images will be applied
    icon.src = icon.getAttribute("src-light");
  })
}

function setLightMode() {
  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "light");

  themeIcons.forEach(icon => {
    // in light mode, dark images will be applied
    icon.src = icon.getAttribute("src-dark");
  })
}