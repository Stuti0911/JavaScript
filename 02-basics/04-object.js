const tinder=new Object()
console.log(tinder); //empty object

const tinderUser={}
console.log(tinderUser); //empty object

tinderUser.id="abc"
tinderUser.name="piyushi"
tinderUser.isLoggedIn=true
console.log(tinderUser); 

const regularCustomer={
    email:"soni@gmail.com",
    fullname:{
        userFullname:{
            firstName:"Soni",
            lastNAme:"Gupta"
        }
    }
}

console.log(regularCustomer.fullname);

const ob1={1:'a',2:'b'}
const ob2={2:'c',3:'d'}
const ob4={2:'4',6:'d'}  //same key=> last value keeps
//const ob3= {ob1,ob2} //object k andar ob1,ob2
const ob3= Object.assign({},ob1,ob2,ob4) //{}=>target array
console.log(ob3===ob1); //return false
console.log(ob3);

console.log(Object.keys(tinderUser)); // array of keys
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty('name')); //true or false


