let result;
const num1 = 12;
const num2 = 15;
const operator="+";

switch(operator){
    case '+':
        result= num1 + num2;
        console.log(`Sum of ${num1} + ${num2} is: ${result}`);
        break;
    case '-':
        result= num2 - num1;
        console.log(`Sum of ${num2} - ${num1} is: ${result}`);
        break;
    case '*':
        result= num1 * num2;
        console.log(`Sum of ${num1} * ${num2} is: ${result}`);
        break;
    case '/':
        result= num1 / num2;
        console.log(`Sum of ${num1} / ${num2} is: ${result}`);
        break;
        default:
            console.log("invalid operation");
}