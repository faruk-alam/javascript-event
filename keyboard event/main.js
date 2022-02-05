// KeyboardEvent Object
// 1. Keydown - pressing a key, can repeat
// 2. keypress (may not supported by some browsers)
// 3. keyup
// some properties - key, keyCode, code, shiftKey, ctlKey, repeat
console.clear();
 const element = document.querySelector('textarea');
 element.addEventListener("keydown",function (e) {
    if(e.repeat){
       alert("do not repeat");
    }
 });
// element.addEventListener("keypress",function () {
//    console.log("keypress");
// });
// element.addEventListener("keyup",function (e) {
//    if(e.shiftKey){
//       console.log("shift+"+ e.key);
//    }
// });
