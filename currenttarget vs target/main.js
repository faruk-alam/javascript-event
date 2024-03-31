
// currentTarget -always refers to the elemnt to which the event handler has been attached.
// target - identifies the element to which the event occured. 
const btns = document.querySelectorAll(".btn")
btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        // e.currentTarget.style.background = "blue"
        // console.log(e.currentTarget)
        e.target.style.background = "red"
        console.log(e.target)
    })
});