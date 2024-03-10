function hiddenPopup() {
  document.getElementById("popupPlay").style.display = "none";
}
(window.onload = (GameMaker_Init)),
  setTimeout(function () {
    document.getElementById("popupPlay").style.display = "none";
  }, 6e3),
  document.getElementById("popupPlay").addEventListener("click", hiddenPopup);
const configHomepageURL = "https://solitaire-games.pro/";
document
  .getElementById("homepageURL")
  .setAttribute("href", "https://solitaire-games.pro/");
function GameMaker_Init(){

}