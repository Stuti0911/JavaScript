const course={
    name:"js",
    price:"999",
    instructor: "stuti"
}

//course.name
/*Destructuring: Destructuring is just a way to unpack values from objects or arrays and assign 
them to variables in a more concise manner. It does not modify the original objects or arrays;
it simply extracts values into new variables for easier access. You can continue to use the
original object and its properties as usual even after destructuring. */

//const {instructor : ins}=course // u can now address instructor as ins only
//console.log(ins);

console.log(instructor);

//API backend se values in JSON format
// {
//     "name":"stuti",
//     "courseName":"jss",
//     "price":"free"
// }
// [  array format Api
//     {},{},{}
// ]