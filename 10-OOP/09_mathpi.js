const desciptor=Object.getOwnPropertyDescriptor(Math, "PI")
console.log(desciptor); //writeable: false

const myObj={
    name:"OBJECT 1",
    cost: 432,
    isAvail:false,

    check: function(){
        console.log("In function");
    }
}

console.log(Object.getOwnPropertyDescriptor(myObj,"name"));

// Object.defineProperty(myObj,'name',{
//     writable:false,
//     enumerable:false,
//     configurable:true
// })
// console.log(Object.getOwnPropertyDescriptor(myObj,"name"));

for (let [key,val] of Object.entries(myObj)) {
    if(typeof val!=='function')
    console.log(`Key: ${key} , Value: ${val}`);
}