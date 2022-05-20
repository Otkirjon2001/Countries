const elSiteButton = document.querySelector(".js-button");
if(elSiteButton){
  elSiteButton.addEventListener("click", function () {
    document.body.classList.toggle("dark")
  });
}
