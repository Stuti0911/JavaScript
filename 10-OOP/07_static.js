class user{
    constructor(username){
        this.username = username
    }

    loggedIn(){
        console.log(`USERNAME is ${this.username}`);
    }

    static Id(){ //mtlb now you will not have the access
        return `123`
    }
}

const user1= new user("helo");
//console.log(user1.Id()); //now not accessible

class worker extends user{
    constructor(username,workerId){
        super(username)
        this.workerId=workerId
    }
}

const worker1=new worker("W1",4)
console.log(worker1.Id()); //error