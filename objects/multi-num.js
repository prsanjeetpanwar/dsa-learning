const data={
    a:232,
    b: 123,
    c: 123,
    d:23232,
    e:"hello dear"


}

const multinumber =function(obj){
    let sum=0
    for(let key in obj){
        if(typeof obj[key]==="number"){
            sum+=obj[key]
        }
     

    }
    return sum
}

console.log(multinumber(data))