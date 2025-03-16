const userData={
    name:"prsanjeet",
    age:21,
    gender:"male",
    fullName:{
        firstName:"prsanjeet",
        lastName:"Panwar"
    }
}

const name="ram"

const {name:an, fullName}=userData
console.log(an)
console.log(fullName.firstName,fullName.lastName)