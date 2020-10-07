const button_share = document.getElementById("button_share");

const shareBox = document.getElementById("share-box");

const shareImage = document.getElementById("share-image");

const shareBoxTriangle = document.getElementById("share-box-triangle");

button_share.addEventListener("click", fshareBox);

function fshareBox() {
  shareBox.classList.toggle("showShareBox")
  button_share.classList.toggle("convert")
  shareImage.classList.toggle("filter-arrow-white")
  shareBoxTriangle.classList.toggle("show")
  
}

