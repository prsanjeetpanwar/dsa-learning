class User {
    constructor(n){
        this.name=n;
    }
    getName()
    {
        console.log(this.name)
    }
}

const UserInstance=new User("prsanjeet")
UserInstance.getName()