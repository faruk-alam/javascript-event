const heading = document.querySelector(".heading");
const btn = document.querySelector(".button");

// btn.addEventListener("click", () => {
//     btn.classList.add("modify")
// })

// using event object e/ev/evt

btn.addEventListener("click",function(ev){
    //console.log(ev.type)
    //console.log(ev.currentTarget)
    //ev.currentTarget.classList.toggle("modify")
    //using this keyword
    console.log(this);

})
const link = document.querySelector(".myLink")
link.addEventListener("click",e=>{
    e.preventDefault()
})
// this keyword
heading.addEventListener('event', ev => {
    console.log(this.textContent)
    //here this keyword is not working
})
  heading.addEventListener("click", function(ev) {
     console.log(this.textContent)
     // here this keyword is working
  })
  // [Note : "this" keyword works only with regular function not arrow function]
  