const allinputtags = document.querySelectorAll("input");
const clear = document.querySelector("#clear");

clear.onclick = function (){
    for(let i = 0; i < allinputtags.length ; i++){
        allinputtags[i].value = "";
    }
}

function blurImages() {
    let images = document.querySelectorAll("img"); // Select all images
    images.forEach(img => img.classList.add("blur")); // Apply blur class
}

function unblurImages() {
    let images = document.querySelectorAll("img"); // Select all images
    images.forEach(img => img.classList.remove("blur")); // Remove blur class
}
