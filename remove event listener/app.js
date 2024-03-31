const circle = document.querySelector(".circle");
let count = 0;

circle.addEventListener("click",changeColor)
function changeColor () {
    circle.classList.toggle("color-change")
    count ++;
    console.log(count)
    if(count>10){
        circle.removeEventListener("click",changeColor)
    
    }
}