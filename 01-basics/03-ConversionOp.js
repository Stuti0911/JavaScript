let score= null

//01-basics/03-ConversionOp.js

console.log(typeof score);
// console.log(typeof ( score)); ANOTHER WAY

let scoreInNum= Number(score);
console.log(typeof scoreInNum);
console.log(scoreInNum);  //22abc number m convert nahi hoga-->NaN

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