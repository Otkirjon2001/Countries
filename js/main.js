const elSiteDark = document.querySelector(".body");
const elSiteButton = document.querySelector(".header-button");
elSiteButton.addEventListener("click", function () {
  elSiteDark.classList.toggle("dark")
});