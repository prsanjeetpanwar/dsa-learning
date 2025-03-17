const data={name:"prsanjeet"}

function UserData(age){
    console.log(`the name of the user is ${this.name} and the age is ${age}`)
}

const age=[1,2,3,4,5,6,7]
UserData.apply(data,age)