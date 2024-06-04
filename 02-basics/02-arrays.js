const marvel=["super","hello","hero"]
const dc=["subah","good good"];

console.log(marvel);
console.log(dc);

// console.log(marvel.push(dc)); //returns the length and pushes the array inside other array
// // marvel[3] marvel[4][1]:array inside array
// console.log(marvel);

//to push just the elemnet of one array into another--concat
// const updatedArr=marvel.concat(dc); //returns an array
// console.log(updatedArr);

const newHeros=[...marvel, ...dc] // multiple array we can concatnate
console.log(newHeros);

const array=[1,2,3,[4,5,6],[6,7,[6,37,3],10],20,1]
const flatArray= array.flat(Infinity)  // all elements in one array 
console.log(array);
console.log(flatArray);

console.log(Array.isArray(13));
console.log(Array.from("stutoi")); //converting iterable things into array
console.log(Array.from({name:"stuti"})); //specify krna padega either key/value...not specified then return []


//Array.of makes array from any type of element
let a=2,b=5,c=10,d="aa",e="stuti"
console.log(Array.of(a,b,c,d,e));