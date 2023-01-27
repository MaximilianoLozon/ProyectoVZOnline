const fullImgBox = document.getElementById("fullImgBox");
const fullImg = document.getElementById("fullimg");

function closeImg(){
    fullImgBox.style.display = "none";
}
function openImg(reference){
    fullImgBox.style.display = "flex";
    fullImg.src=reference;
}