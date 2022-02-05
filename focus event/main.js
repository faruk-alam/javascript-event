// FocusEvent Object is not applicable-
//  <br>, <head>, <title>, <html>, <iframe>, <meta>, <param>, <script>, <style>, <base>, <bdo>,

// 1. onblur
// 2. onfocus
// 3. onfocusin
// 4. onfocusout

const input = document.querySelector('input');
input.addEventListener('blur',function(e) {
     //console.log("blur is occurred");
      // console.log(e.target.value);
      input.value = e.target.value.toUpperCase();
});
input.addEventListener('focus',function() {
     //console.log("focus is occurred");
   //   input.style.backgroundColor = "orange";
   //   input.style.padding = "20px";
});
// input.addEventListener('focusin',function() {
//      console.log("focusin is occurred");
// });
// input.addEventListener('focusout',function() {
//      console.log("focusout is occurred");
// });