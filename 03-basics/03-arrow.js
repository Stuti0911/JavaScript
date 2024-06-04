//So, in a browser environment, the WINDOW object serves as the global object where global variables 
//and functions are created and can be accessed from different parts of your JavaScript code.
const user={
    username:"stuti",
    price:99,

    welcome: function(){
        console.log(`${user.username}, Hello`);
        console.log(this);
    }
}

// user.welcome();  //Stuti hello
// user.username="STU"
// user.welcome()  // STU hello

// console.log(this); // empty object
 
// function f(){
//     console.log(this); // not empty
// }
// f()

// function f(){
//     let username="stu"
//     console.log(this); ///works same
// }
// f()

// function f(){
//     let username="stu"
//     console.log(this.username); //Undefined 
//     // this do not work in functions
// }
// f()

// const f= () => {  //arrow function
//     console.log(this); //empty object
// }
// f()

// const arrowFunc=(num1,num2)=> {
//     console.log(num1);
// }
// arrowFunc(4)

//implicit return 
const arrowFunc=(num1,num2)=>  (num1)  // OR {return num1}  anyotherthing is undefined
console.log(arrowFunc(4))

//Object ko return krne k liye PARANTHESIS is imp
// const arrowFunc2=(num1,num2)=>  {user:"stuti"}  //Undefined
// console.log(arrowFunc2(4))

const arrowFunc2=(num1,num2)=>  ({user:"stuti"} ) // returns object
console.log(arrowFunc2(4))



