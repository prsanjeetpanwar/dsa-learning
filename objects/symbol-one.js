const obj = {};
const sym1 = Symbol("sym");
const sym2 = Symbol("sym");

obj[sym1] = "First";
obj[sym2] = "Second";

console.log(obj[sym1]); 
