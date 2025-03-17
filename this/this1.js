this.a=4

function a(){
    console.log(`the value of a is ${this.a}`)
}
a()

const b=()=>{
    console.log(`this is value of a  ${this.a}`)
}
b()