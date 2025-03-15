const a=[12,1,21,42,242,2144,31,245,13]

const b= a.reduce((num, max)=>num>max? num:max,0)
console.log(b)