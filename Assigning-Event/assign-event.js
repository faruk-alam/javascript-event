// Inline event handlers
const btn = document.querySelector(".btn")
const text = document.querySelector("p")
function changeColor () {
    text.classList.toggle("changeColor")
}

// Event handler properties
const btn1 = document.querySelector(".btn1")
btn1.addEventListener("click",changeColor)
