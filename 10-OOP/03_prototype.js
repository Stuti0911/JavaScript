// let myName="stuti     "

// console.log(myName.truelength); //have to make this

let myfav = ["you", "me"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.check = function(){
    console.log(`it is really present in all objects`);
}

Array.prototype.checkarray = function(){
    console.log(`YO says hello`);
}

// heroPower.check() //have access
// myfav.check() //have access
// myfav.checkarray() //have:array
// heroPower.checkarray() //do not

//-------------------Inheritance----------

const User = {
    name: "user",
    email: "user@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)//kisko,kisme

let anotherUsername = "DouLikeDoingwhatYouDoing?    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Stuti..".trueLength()
"iceTea        ".trueLength()