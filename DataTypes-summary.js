// based on how they are kept in memory and stored
// primitive/ non -primitive

/*Primitive (call by value)
7 types:
String Number Boolean Null Undefined Symbol(value ko unique bna k liye) BigInt

Non-Primitive / Refernce type
array== [] , objects== {},functions
non-primitive: datatype: Object, for function= objevt function/ function
*/

let a
// a=0
// console.log(a);
// a="hello"
// console.log(a);
// a={'key':'value'}
// console.log(a);

let user  // this is also undefined
//let user=undefined  // manually also we can define it

const id= Symbol(123);
const newId=Symbol(123);

// console.log(id==newId)
// console.log(id);
// console.log(newId);

const myHello= function(){
    console.log("hello Stu");
}
const hehe=['yo','yee','hehe']
console.log(typeof myHello);
console.log(typeof hehe);
myHello
//js= dynamically typed-rumtime, typescript= statiscally typed-compile before hand
/*
JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to
explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its
lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking
is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly 
when declaring them:

int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String
JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. 
Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.
*/

//--------------------------------------------------------------\

/*stack--> Primitive, heap -->Non-primitive*/
//example
// hey
