const myArr=[0,1,1,3,3,"stuti"]
//resizeable, mix Datatype

console.log(myArr[2]); //0 based index
//array-copy op: shallow copy=>share reference 
//deep copy=different reference

const myheros=["Cap","Black"]
const arr=new Array(1,2,3,4,5,5)

// myArr.push(3) // pushed values
// myArr.pop() //last value remove

// myArr.unshift(17) //insert at start, not preffered in case of large values
// myArr.shift(); //delete from start

// console.log(myArr.includes(4));
// console.log(myArr.indexOf(4));

// const stringArr= myArr.join(); //conversion to string
// console.log(myArr);
// console.log(stringArr);
// console.log(typeof myArr);
// console.log(typeof stringArr);


//slice, splice

console.log(`Original array: ${myArr}`);
const myNewArr1= myArr.slice(1,4); //start index....end-1
console.log(`Original array after slice: ${myArr}`);
console.log(`Sliced Array: ${myNewArr1}`);

const myNewArr2= myArr.splice(1,4); //start index....end + delete the elements from this range in original array as well
console.log(`Original array after splice: ${myArr}`);
console.log(`Spliced Array: ${myNewArr2}`);