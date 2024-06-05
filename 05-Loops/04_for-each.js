const program= ['c++','html','java']

// program.forEach( function (val){
//     console.log(val);
// } )  
//callback function has no func name

// program.forEach ( (val)=>{
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }
// program.forEach(printMe)

program.forEach( (item,index,arr )=>{
    console.log(item,index,arr); 
})