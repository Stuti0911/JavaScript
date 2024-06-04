//Dates
let myDate=new Date();
// console.log(myDate);///ajeeb sa string
// console.log(typeof myDate); //OBJECT

// console.log((myDate.toString()));
// console.log((myDate.toISOString()));
// console.log((myDate.toLocaleString()));

// console.log((myDate.toDateString()));
// console.log((myDate.toLocaleDateString()));

// console.log((myDate.toTimeString()));
// console.log((myDate.toLocaleTimeString()));

//let myNewDate= new Date(2024,6,22) // in this case 0 base indexing 
//let myNewDate= new Date(2024,6,22,5,3) // + time stamp decleration  //7/22/2024 5:03:00am
                      // yyyy-mm-dd
let myNewDate= new Date("2024-6-12") // in this case 1 base indexing
// concept of invalid date also use here as well

//console.log(myNewDate.toLocaleString());

let myTimeStamp= Date.now();
console.log(myTimeStamp);
console.log(myNewDate.getTime());
/*NOTE*/
console.log(Math.floor(Date.now()/1000)); //Value initially always in milise, converting it into second
console.log(myNewDate.toLocaleString());
console.log(myNewDate.getDay()); // 1-Monday....so on
console.log(myNewDate.getMonth()+1); //+1 because 0 based indexing

//-----IMP----
// self adjusting 
console.log(myNewDate.toLocaleString('default',{
    weekday:"long",
    day:"2-digit"
}))








