const a=['apple', 'banana', 'orange',]

const b=a.reduce((acc,item,index)=>{
    acc[item]=index
    return acc
})

console.log(b)

const array = ['apple', 'orange', 'banana'];
const obj = array.reduce((acc, item, index) => {
  acc[item] = index
  return acc;
}, {});
console.log(obj); // Output: {0: 'apple', 1: 'orange', 2: 'banana'}
