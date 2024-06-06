const score=400
const balance= new Number(100)

// console.log(score);
// console.log(balance);

// console.log(balance.toString());  // now can use the properties of string
// console.log(balance.toFixed(3));

const variable= 1234.8272
//console.log(variable.toPrecision(5));
//5: 1234.8  4:1235  3: 1.23e+3

const hundered=10000000;
// console.log(hundered.toLocaleString()); // acc to us default
// console.log(hundered.toLocaleString('en-IN')); // converted to Indian format

//-------------------Maths----------------------------
// console.log(Math);
// console.log(Math.abs(-3));
// console.log(Math.round(3.5));
// console.log(Math.floor(32.2));
// console.log(Math.ceil(43.54));
// console.log(Math.min(5,6,7,22,2,3));
// console.log(Math.max(44,4,5,2,7,2));

console.log(Math.random());  // 0<=num<1
console.log(Math.floor(Math.random()*10)+1);  // val>=1 suppose 0.03*10= floor(0.3)=0 toh if we don't want 0 then +1
const max=30;
const min=10;

//Random number between 2 values
console.log(Math.random() * (max-min)+min); // min<=num<max

//Random Integer between 2 values
console.log(Math.floor((Math.random() * (max-min)+min))); // min<=num<max

//Random Integer between 2 values Both inclusive
console.log(Math.floor((Math.random() * (max-min+1)+min))); // min<=num<=max


