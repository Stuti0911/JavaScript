// object declare: constructor(singleton) , literals(non-singleton)
//Object.create // constructor
const mysym= Symbol("hehe")

const user={
    name:"stuti",
    "full name":"stuti goel",
   // mysym: "checking", // convert symbol into string ultimately
    [mysym]:"checking correct", //actual symbol creation [] used
    age:20,
    location:"jaipur",
    email:"stuti@gmail.com",
    isLoggedIn:false,
    lastLoggedIn: ["mon","tues","wedns"]
}

console.log(user.email)
console.log(user["email"]);  //bts tracked as string
console.log(user["full name"]);
console.log(typeof user.mysym); // string returing

console.log(typeof user[mysym]); //string

user.isLoggedIn=true
//Object.freeze(user); // no changes can be made, if any changes are tried => no error throw
user.age=30
console.log(user);

user.greetings= function(){
    console.log(`hello u`);
}
user.greetingTwo= function(){
    console.log(`hello u ${this.name}`); //`` string interpolation
}

console.log(user.greetingTwo());
//console.log(user["greetings"]);

