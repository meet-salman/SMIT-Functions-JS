function addNumbers(a, b) {
    let sum = a + b;
    console.log(sum);
}

addNumbers(15, 25);

// ------------------------------------------------------------------------------------------------


function dhobi(kapra, shalwar, pant, shirt) {
    console.log("Apka kapra " + kapra + ", Apki shalwar " + shalwar + ", Apki ki pant " + pant + " & Apki ki shirt " + shirt + ".");
}

dhobi("kala", "sufaid", "neeli", "surmai");

// ------------------------------------------------------------------------------------------------


function greetPerson(name) {
    return name;
}

let names = greetPerson("Greet Salman");
console.log(names);

// ------------------------------------------------------------------------------------------------


function WelcomePerson(name) {
    console.log("Welcome " + name);
}

WelcomePerson("Tanveer");
WelcomePerson("Salman");
WelcomePerson("Shaheer");

// ------------------------------------------------------------------------------------------------


function square(numbers) {
    return numbers * numbers;
}

const value1 = square(7);
const value2 = square(12);

console.log(value1);
console.log(value2);

// ------------------------------------------------------------------------------------------------


// function sumOfNumbers(c , d) {
//     return c + d;
// }

// const sums = sumOfNumbers( +prompt("Enter First Number") , +prompt("Enter Second Number"));
// console.log(sums);

// ------------------------------------------------------------------------------------------------



// function greet(e , f , g) {
//     return e + f + g;
// }

// let personName = greet( prompt("Enter First Name") , " " , prompt("Enter Second Name"));
// console.log("Hello " + personName + '!');

// ------------------------------------------------------------------------------------------------



function calculate(num1, operator, num2) {

    let result;

    switch (operator) {
        case ('+'):
            result = num1 + num2;
            break;

        case ('-'):
            result = num1 - num2;
            break;

        case ('*'):
            result = num1 * num2;
            break;

        case ('/'):
            result = num1 / num2;
            break;

        default:
            result = "Invalid Operator";
    }

    return result;
}

let calculatedResulrt = calculate( +prompt("Enter First Number") , prompt("Enter Operator") , +prompt("Enter Second Number"))

console.log("Result: " + calculatedResulrt);





