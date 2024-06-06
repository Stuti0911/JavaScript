const myNums=[1,2,3]

const iniValue=0;

// const total=myNums.reduce(function(acc,curr){
//     console.log(`Accumulator: ${acc} and currValue: ${curr}`);
//     return acc + curr
// },0 )  //0 as the initialization of the accumulator
//console.log(`TOTAL: ${total}`);

//ARROW FUNC
const total=myNums.reduce((acc,curr)=> acc + curr,0 )  //0 as the initialization of the accumulator
console.log(`TOTAL: ${total}`);

// let check=0 //another way
// myNums.forEach(element => {
//     check=check+element
// });
//console.log(check);

const shoppingCart=[
    {
        itemName:"js-couse",
        price:999
    },
    {
        itemName:"c++couse",
        price:2999
    },
    {
        itemName:"dataa science",
        price:4000
    },
    {
        itemName:"dsa",
        price:2999
    },
    {
        itemName:"dev",
        price:1999
    },
]

const totalPrice = shoppingCart.reduce( (acc,curr)=> acc+ curr.price,0)
console.log(totalPrice);