let name="stuti"

// console.log(`My name is ${name}. You are ?`);
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.charAt(2));  //character at this index
// console.log(name.indexOf('u'));
// console.log(name.substring(1,3)); // 1-2 end waala not included, neg start value not included
// name.slice(-8,4) //neg allowed here

const newString="   dduuww   ";
console.log(newString);
console.log(newString.trim());
const url="https:/stutihehe%20.com"
console.log(url.replace('%2','-'));
//split

/*
When using negative indices, you can only traverse from left to right (from lower negative index to higher negative index)
 or from right to left (from lower positive index to higher positive index). You cannot reverse the start and end indices
  when using negative indices with slice().

const myString = "Hello, World!";
const slicedString = myString.slice(-1, -8);
console.log(slicedString); // Output: " "


const myString = "Hello, World!";
const slicedString = myString.slice(0, 5);
console.log(slicedString); // Output: "Hello"

const slicedStringNegative = myString.slice(-6, -1);
console.log(slicedStringNegative); // Output: "World"
*/
