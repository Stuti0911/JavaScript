let score= null

//node 01-basics/03-ConversionOp.js

//console.log(typeof score); //Object
// console.log(typeof ( score)); ANOTHER WAY
//score="22abc"
let scoreInNum= Number(score);
console.log(scoreInNum); // i/p: "22abc" o/p:NaN
console.log(typeof scoreInNum);
// console.log(scoreInNum);  //22abc number m convert nahi hoga-->NaN

//Converting such string into number
// "33"->Number done value:33
// "33abs"-> value:NaN typeof gives number only
//  "true/false"-> value:1/0
// undefined->value:NaN typeof:number
// null-> value:0 typeof:number

let logg= Boolean(1)
//converting into bool
//1=> true 0=> false
// ""->false
//"some_value"=>true


//--------------Operations-----------

let val=3
let negVal=-val;

//console.log(negVal);

let st1="hello this is my 2nd day"
let str=" keep going"
let str3= st1+ str
// console.log(str3)

// console.log(2+1)
// console.log(2+"1")
// console.log("2"+"1")
// console.log(2+1+1)
// console.log("1"+2+2) // 122
// console.log(2+2+"1") //41

// yeh krna nahi chahiye 
// console.log(true);
// console.log(+true);  //true-->1
// console.log(+true+false+true);
// console.log(+false);
//console.log(+'')

//If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

//If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
