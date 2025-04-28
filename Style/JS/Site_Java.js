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

// Start typing effect after the page loads
window.onload = typeEffect;