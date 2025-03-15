const a=['apple', 'banana', 'apple', 'orange', 'banana', 'banana']

const b=a.map((item)=> item.charAt(0).toUpperCase()+item.slice(1)


)
console.log(b)