//way 1
// const promise1= new Promise(function(resolve,reject){
//     //do all async taskss
//     //DB calls,cryptography,network
//     setTimeout(function(){
//         console.log("Aysnc task donee");
//         resolve()
//     },1000)
// })

// promise1.then(function(){
//     console.log("promise consumed");
// })

//way2
new Promise(function(resolve,reject){
    //do all async taskss
    //DB calls,cryptography,network
    setTimeout(function(){
        console.log("Aysnc task donee");
        resolve()
    },1000)
}).then(function(){
    console.log("promise consumed");
})

const promise3= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"stu",email:"haddhai@gmail.com"})
    },1000)
})
promise3.then(function(user){
    console.log(user);
})

const promise4= new Promise(function(resolve,reject){
    setTimeout(function(){
        let result= true;

        if(!result){
            resolve({username:"stu",password:123})
        }else{
            reject('ERRORR')
        }
    },1000)
})

promise4.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("Promise resolved either rejected or resolved"))


const promise5= new Promise(function(resolve,reject){
    setTimeout(function(){
        let result= false;

        if(!result){
            resolve({username:"STUTI GOEL",password:123})
        }else{
            reject('ERRORR 5')
        }
    },1000)
})


async function consumePromise5(){
    try {
        const resposne =await promise5
        console.log(resposne);
    } catch (error) {
        console.log("E:",error);
    }
   
}
consumePromise5()

// async function getAllUsers(){
//     try {
//         const resposne= await fetch("https://jsonplaceholder.typicode.com/users")
//         const data= await resposne.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:",error);
//     }
// }
//getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
.then((obj)=>{
    return obj.json()
})
.then((data)=>{console.log(data);}) //no need for await and all because the next then will only execute if the previous on fails
.catch(function(error){
    console.log(error);
})

