// <input /> - text, number, password, email, color,  radio, checkbox, search, time, date, datetime, week,
//month, url, tel, file,
// <select>,
// <textarea>,

console.clear();
// var input = document.querySelector("input[type=text]");
// input.addEventListener("change",eventChange);

// function eventChange(e){
//     // console.log(e);
//     // console.log(e.type);
//     // console.log(e.target);
//     // console.log(e.target.className);
//     console.log(e.target.id);
// }
// var checkbox = document.querySelectorAll("input[type=checkbox]");
// Array.from(checkbox).map((check)=>{
//    check.addEventListener("change",eventChange)
// })
// function eventChange(e){
//     if(e.target.checked){
//         console.log(e.target.value);
//     }
// }
 var  select = document.querySelector("#subject");
 select.addEventListener("change",eventChange);
 function eventChange(e){
     console.log(e.target.value);
 }