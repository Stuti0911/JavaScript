/* 
array-->object-->Null
string-->object
function-->object
*/

function mulby5(num){
    return num*5
}
mulby5.power=100
// console.log(typeof mulby5);
// console.log(mulby5(2));
// console.log(mulby5.power);
// console.log(mulby5.prototype);

function createUser(username,score){
    this.username=username
    this.score=score

}

createUser.prototype.hello= function(){
    console.log(`${this.username}`);
}

createUser.prototype.inc=function(){
    this.score++;
}

const hey= new createUser("Hey",34); //
console.log(hey);
const hello= new createUser("hello",56)
console.log(hello.hello());

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object.
 If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/


