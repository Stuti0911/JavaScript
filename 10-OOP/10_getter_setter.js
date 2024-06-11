// class user{
//     constructor(username,email,pass){
//         this.username=username,
//         this.email=email,
//         this._pass=pass
//     }

//     get password(){
//         console.log("You are not allowed to view password");
//         //return this._pass
//     }
//     set password(pass){
//         this._pass=pass;
//     }
// }

// const user1= new user("User1","user1@gmail.com",12345)
// console.log(user1.password);

function user(name,email,password){
    this.name=name
    this._email=email
    this.password=password

    Object.defineProperty(this,'email',{
        get: function(){
            return this._email
        },
        set: function(val){
            this._email=val
        }
    })
}

const user1= new user("user1","user1@u.com",123345)
console.log(user1.email);