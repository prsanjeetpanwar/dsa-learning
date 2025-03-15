const a=[[1,2], [3,4], [5,6]]

const b=a.reduce((acc,arr)=>{
    acc.push(...arr)
    return acc
})

console.log(b)