// ClipboardEvent Object
// oncopy
// oncut
// onpaste

const clipEvent = document.querySelector('input');
const clipContent = document.querySelector('p');

clipEvent.addEventListener('copy', function(){
     clipContent.innerHTML="you have copied"
})
clipEvent.addEventListener('cut', function(){
     clipContent.innerHTML="you have cut"

})
clipEvent.addEventListener('paste', function(){
     clipContent.innerHTML="you have pasted"

})
