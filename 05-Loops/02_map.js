//MAP MDN:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
//for of
const arr=[1,2,3,4,5,6]
for (const num of arr) {
    //console.log(num);
}

//OBJECTS
/*Keys in objects are always strings or symbols.
Objects are often used as records or structures to represent entities or models in a program.
Objects have a prototype, and their properties can be iterated over using a for...in loop.*/

//Maps
/*Keys in Maps can be of any data type, including objects and functions.
Maps are often used in scenarios where the order of insertion is important
 or when KEYS ARE NOT KNOWN UNTIL RUNTIME. */

const map=new Map() // traverse using for..of
map.set("stuti",99)  //unique vales..same order m enter, same order of output
map.set("stu",55)

for (const [key,value] of map) {
    console.log(key,':-',value);
}

const myObj={
    'game1':'NFS',
    'game2':'spiderman'
}

// for (const [key,val] of myObj) {  //myObj is not irterable
//     console.log(key,':-',val);
// }