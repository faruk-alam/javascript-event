// event propagation - orders the events are fired.
// event bubbling -clicked element first then bubbling up.
// event capturing - fires at root and fire until reaches target.

const container = document.querySelector(".container");
const listItem = document.querySelector(".list-item")
// event bubbling
function showBubbling(e) {
    console.log("currentTarget",e.currentTarget)
    console.log("target",e.target)
    if(e.target.classList.contains("link")){
        console.log("you have clicked on link")
    }
}
listItem.addEventListener("click",showBubbling)

// stop propagation -using stopPropagation()
function stopBubbling(e) {
    e.stopPropagation()
}

listItem.addEventListener("click",stopBubbling)
container.addEventListener("click",stopBubbling)

