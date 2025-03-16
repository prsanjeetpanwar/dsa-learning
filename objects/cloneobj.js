let user = {
    name: "Prsanjeet",
    age: 22,
    address: { city: "Delhi", country: "India" }
};


const shallowClone = Object.assign({}, user);  

shallowClone.name = "Prasanjeet Kumar";  
shallowClone.address.city = "Mumbai";    

console.log("Original Object:", user);


console.log("Shallow Copy:", shallowClone);


const deepCopy= JSON.parse(JSON.stringify(user))

deepCopy.address.city="gangaapur"
console.log("this is the deep copy",deepCopy)



