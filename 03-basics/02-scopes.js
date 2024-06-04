//CLOSURE CONCEPT........global scope
let a=300
if(true){//block scopes
    let a=10
    const b=20
    //var c=30
    console.log(a);
}

console.log(a);
// console.log(b);
//console.log(c);  //doesnot follow scope

console.log(addOne(5)) // can be used before declerations
function addOne(num){
    return num+1
}

//console.log(addTwo(3))  //throws error as the use is before initialization
const addTwo= function(num){
    return num+2
}
//console.log(addTwo(3)) //works fine


