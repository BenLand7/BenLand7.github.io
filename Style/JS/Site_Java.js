const text = "Ben Landesman";
const typingSpeed = 100; // Adjust typing speed (ms)
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-text").textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, typingSpeed);
    }
}
window.onload = typeEffect;

const toggle = document.querySelector("#toggle")

toggle.onclick = function(){
    document.body.style.backgroundColor = "#D34F73";
}
const set = document.querySelector("#set")

set.onclick = function(){
    document.body.style.backgroundColor = "white";
}