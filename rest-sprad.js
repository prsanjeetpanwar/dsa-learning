function mul(...nums){
console.log(nums[0]*nums[1])
}
var arr=[432,4]

mul(...arr) 


function fu(x,y,z,...arr){
    console.log(x,y,z,arr)
}


fu(1,32,4,3,43)
