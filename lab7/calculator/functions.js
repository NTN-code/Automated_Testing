
const add = (num1, num2) => {
    return num1 + num2;
}

const subtract = (num1, num2) => {
    return num1 - num2;
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

const divide = (num1, num2) => {
    if (num2 === 0) {
        return "Divide by zero underfine!";
    }
    return num1 / num2;
}

const menu = (operation,  operator1, operator2) => {
    result = null;
    switch (operation) {
        case "add":
            result = add(operator1, operator2)
            break;
        case "subtract":
            result = subtract(operator1, operator2);
            break;
        case "multiply":
            result = multiply(operator1, operator2);
            break;
        case "divide":
            result = divide(operator1, operator2);
            break;
        default:
            console.log("Operation not exists!");
            return -1;
    }
    console.log(result);
    return result;
}

module.exports = { add, subtract, multiply, divide, menu };
