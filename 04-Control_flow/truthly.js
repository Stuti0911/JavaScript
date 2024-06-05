let email="stuti@gmail.com"

if(email){
    console.log("has email");
}else{
    console.log("no email");
}

//Falsy Values: 
//false,0,-0, BigInt 0n,"",null,undefined,NaN

//Truthly: 
//"0", "false"," "(space in string),[],{},function(){}

//empty array
const myArr=[]
if(myArr.length===0){
    console.log("empty Arr");
}

//empty obj
const myObj={}
if(Object.keys(myObj).length===0){
    console.log("empty obj");
}

//Nullish Coalescing Operator (??):numm undefined
//left side value==NULL/undefined toh takes right side default value
//else proceeds with left side value only
let val= 5??10
let val1=null??30
let val2=undefined??30  
let val3=null??30??15??20;

console.log(val);
console.log(val1);
console.log(val2);
console.log(val3);

//Terinary Operator
//cond ? true: false
const price=100
price>150 ? console.log("more than 150"): console.log("less than 150");;

