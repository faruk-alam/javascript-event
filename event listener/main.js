// var btn = document.getElementById('mybtn');
// function task(){
//    alert("The task has been completed");
// }
//btn.onclick = task;
// By using event listerner-
//btn.addEventListener('click', task);
// Using annonimous function


// document.getElementById('mybtn').addEventListener ("click", function () {
//      alert("The task has been completed");
// })

//Multi event listener on same element
// document.getElementById('mybtn').addEventListener ("click", function () {
//    alert("The first task has been completed");
// })

// document.getElementById('mybtn').addEventListener ("click", function () {
//    alert("The another task is waiting,countinue ?");
// })

// document.getElementById('mybtn').addEventListener ("click", function () {
//    alert("The another task is waiting,countinue ?");
// })

 document.getElementById("dom").addEventListener ("click", function () {
    alert("The task is processing ?");
 })
var mydom = document.getElementById("dom");
mydom.addEventListener("mouseover", function () {
   mydom.classList.add("my-style")
})
mydom.addEventListener ("mouseout", function () {
   mydom.classList.remove("my-style")
})