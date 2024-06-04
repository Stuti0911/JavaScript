//Immediately Ivoked Function Expressions(iife)
//function call asa program run and used in avoiding polluting global namespace: 
/*Because our application could include many functions and global variables from different source files,
 it's important to limit the number of global variables. If we have some initiation code that we don't 
 need to use again, we could use the IIFE pattern. As we will not reuse the code again, using IIFE in 
 this case is better than using a function declaration or a function expression.*/

 (function chai(){ //()()
    //named iife
    console.log("hello");
 })();  // ; it is important as it tells the function invoked to stop when

 ( (name)=>{
    //simple iife
    console.log(`connected ${name}`);
 }) ("stuti")
