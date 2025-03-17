

console.log("start")

const sub= Promise.resolve("this promise is resolve")
console.log(sub)

sub.then((res)=>console.log(res)).catch((err)=>console.log(err))



console.log("stop")