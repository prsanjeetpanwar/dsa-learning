console.log("Lets start")


const newFunction= function(){
    setTimeout(()=>{
       return 'hello'
    },1000)
}

const newOne=newFunction()
console.log(newOne)
console.log("Stop")