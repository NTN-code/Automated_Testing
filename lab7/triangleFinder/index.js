const { checkValidity } = require("./functions.js");



const argvs = process.argv;
const argv = argvs.slice(2);
const a = parseInt(argv[0]);
const b = parseInt(argv[1]);
const c = parseInt(argv[2]);


if (isNaN(a) || isNaN(b) || isNaN(c)){
    console.log("App takes only numbers!");
    process.exit(0) ;
}

if (a <= 0 || b <= 0 || c <= 0) {
    console.log("Sides triangle not negative");
    process.exit(0) ;
}



if (checkValidity(a, b, c))
        console.log("Valid");
    else
        console.log("Invalid"); 

