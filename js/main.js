const elSiteButton = document.querySelector(".header-button");
if(elSiteButton){
  elSiteButton.addEventListener("click", function () {
    document.body.classList.toggle("dark")
  });
}
