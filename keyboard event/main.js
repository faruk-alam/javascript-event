// keypress
// Keydown  
// keyup
const inputText = document.getElementById("text")
// inputText.addEventListener("keypress", () => {
//    console.log("key is pressed")
// })
// inputText.addEventListener("keydown", () => {
//    console.log("key is down")
// })
inputText.addEventListener("keyup", () => {
   console.log(inputText.value)
})
