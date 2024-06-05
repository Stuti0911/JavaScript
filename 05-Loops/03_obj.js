//for object we use for..in
const myObj={
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby'
}

// const m= Object.keys(myObj);
// for (const ele of m) {
//     console.log(typeof ele);
// }

for (const key in myObj) {
    console.log(`Key: ${key}, Value: ${myObj[key]}`);
}

const program= ['c++','html','java']
for (const key in program) {
    //console.log(key); //Output: 0,1,2
    console.log(program[key]);
}
//array also has keys but it starts from 0 index
//therefore objects came into picture, so that we can get adjustable keys

