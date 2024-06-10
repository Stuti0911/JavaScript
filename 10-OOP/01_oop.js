const user={
    username: "stu",
    age: 20,

    functionCall:function(){
        console.log("function inside object");
        console.log(user.username);
        console.log(this.username);
        //console.log(username); //error
        console.log(this); //whole obj
    }
}

//user.functionCall()
//console.log(this); //empty obj, but in browser it is ot empty


function newUser(username,age){
    this.username=username
    this.age=age

    this.greeting= function(){
        console.log("greet");
    }
    return this //returns object
}

// const user1= newUser("stuti",20)
// console.log(user1);
// const user2= newUser("Pooja",40)
// console.log(user1); //overwrite happens if we don't use "new" keyword

const user1= new newUser("stuti",20) 
// console.log(user1);
const user2= new newUser("Pooja",40)
// console.log(user1);
// console.log(user2);

// new:constructor function
// Step1: new object creation
// Step2: constructor function call hota hai because of "new"
// Step1: this keyword injects all the arguments in that
// Step4: return

console.log(user1.constructor);