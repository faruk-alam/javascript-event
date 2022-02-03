// MouseEvent is not applicable - <html>, <head>, <meta>, <title>, <br>, <style>, <script>, <iframe>, <param>, <base>, <bdo>
// 1. onclick
// 2. ondblclick
// 3. onmousedown
// 4. onmousedup
// 5. onmouseenter
// 6. onmouseleave
// 7. onmousemove
// 8. onmouseover

const mouse = document.querySelector('#mouse-div');
//   mouse.addEventListener("click",function (e) {
//     console.log(e.target.innerHTML);
//     console.log(e.target.textContent);
//  });
// mouse.addEventListener("dblclick",function () {
//    console.log("DoubleClick is occured")
// });
// mouse.addEventListener("mousedown",function () {
//    console.log("mousedown is occured")
// });
// mouse.addEventListener("mouseup",function () {
//    console.log("mouseup is occured")
// });
// mouse.addEventListener("mouseenter",function () {
//    console.log("mouseenter is occured")
// });
// mouse.addEventListener("mouseleave",function () {
//    console.log("mouseleave is occured")
// });
// mouse.addEventListener("mouseover",function () {
//    console.log("mouseover is occured")
// });
// mouse.addEventListener("mousemove",function () {
//    console.log("mousemove is occured")
// });
const buttons =  document.querySelectorAll(".btn");
Array.from(buttons).map((button)=>{
   button.addEventListener("click",function () {
      console.log("clicked")
   });
});
