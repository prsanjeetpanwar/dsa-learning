const a=["apple", "banana", "apple", "orange", "banana", "banana"]

const b =a.reduce((acc, item)=>{
    acc[item]=(acc[item]||0)+1;
    return acc
    
},{})
console.log(b)