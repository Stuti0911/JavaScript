const program= ['c++','html','java']

const val= program.forEach( (item)=>{
    return item
})
console.log(val); //o/p: undefined forEach do not return any value

const myNums=[1,2,3,4,5,6]
//VALID
// const val1= myNums.filter( (item)=> item>3)  //implicit return
// console.log(val1);

//INVALID
// const val2= myNums.filter( (item)=> {item>3}) //{} braces ->we need to explicity mention return statement
// console.log(val2); //o/p: empty array

const val2= myNums.filter( (item)=> {return item>3}) 
console.log(val2);