const accountId= 1234  // not change, lock values
let accountEmail= "stuti@gmail.com" 
var accountPassword ="1234"
accountCity= "jaipur" // not prefered but can be initialized this way
let accountState;  // will be undefined as we have not initialized it with anything
 
// variable----let, var(not use): because of the scope issue ehich was resoled in "let"

//accountId=11  not allowed 

console.log(accountId);
//node 01-basics/01-variables

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])