//if else
//< ,> ,<= , >=, ==, !=, ===(type bhi check krta hai), !==

const balance=10000

//if(balance>500) console.log("test"),console.log("yoo");  // can write like this but not a preffered syntax

// switch (key) {
//     case value:
//         break;

//     default:
//         break;
// }

const month =3;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("FEB");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("MAy");
        break;
    case 6:
        console.log("June");
        break;

    default:
        console.log("No match");
       break;
}  // if koi case matches and no break statement then it means all the cases next in number will execute
    // even if default

