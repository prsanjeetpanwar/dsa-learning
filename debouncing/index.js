const btn= document.querySelector(".button")
const btnPress=document.querySelector(".increment_pressed")
const count=document.querySelector(".increment_count")

var pressedCount=0;
var triggerCount=0


btn.addEventListener(`click`,()=>{
    btnPress.innerHTML=++pressedCount;
    count.innerHTML=++triggerCount
})


