function myName(){
    console.log("S");
    console.log("T");
    console.log("U");
    console.log("T");
    console.log("I");
}

// myName;  // just a reference 
// myName(); //execution of the defined func

// function add(n1,n2){ //parameters
//     console.log((n1+n2));
// }
//add(2,4); //6, arguments
// add("stu",undefined)

function add(n1,n2){
    let result=n1+n2
    return result
}
// console.log(add(3,5))

function loginMessage(username ="stu"){ //never undefined, if any argument passed then it will be used
                                       // otherwise the default value:stu
    if(username === undefined){ // ya !username
        console.log("please enter a user name");
        return
    }
    return `${username} just LOGGED IN!!!`
}

// console.log(loginMessage("stuti"));
// console.log(loginMessage()); //undefined if no default value

//(...)=>spread op
//(...)=>rest op: when we don't know how many arguments we will be having so we can't specify the number of parameters

function calculateCartPrice(...num){
    return num //20 32 45
}
// function calculateCartPrice(val1,val2,...num){
//     return num //45
// }
// console.log(calculateCartPrice(20,32,45)); 

const user={
    username:"stu",
    price:1000
}

function handleObj(anyObj){
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
}
handleObj(user)

const mynewArray=[10,120,102,30103];
function returnSecondValue(getArr){
    return getArr[2];
}
console.log(returnSecondValue(mynewArray));

