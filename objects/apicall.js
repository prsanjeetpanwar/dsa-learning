const User={
    name:"Prsanjeet pawnar",
    age:24,
    address:"Darmesh puri jahagir nagar delhi"

}

localStorage.setItem("Userdata",JSON.stringify(User))

const storeData=JSON.parse(localStorage.getItem("Userdata"))
console.log(storeData)