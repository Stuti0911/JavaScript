const myNums=[1,2,3,4,5,6]

//const newNums=myNums.map( (num)=> num+10)
//console.log(newNums);

const upNums=myNums.forEach(element => {
    //element+10
    return element+10
});

//console.log(upNums); //o/p : undefined

/*he map() method transforms each element of an array based on a function and returns a
 new array of the same length, while the filter() method selectively includes elements into 
 a new array based on a condition specified in a function. Both methods are useful for 
 manipulating arrays without modifying the original array. */

const newNums= myNums //CHAINING: 1st function result goes to next func
                .map((num)=> (num*10)) //10,20,30,40,50,60
                .map((num)=> num+1) //11,21,31,41,51,61

console.log(newNums);

const checkingNums= myNums.map( (num)=> num%2===0) //apply on all the elements
const checkingNums2= myNums.filter( (num)=> num%2===0) //returns only the even elements
console.log(checkingNums); // [false,true,f,t,f,t]
console.log(checkingNums2); //[2,4,6]

