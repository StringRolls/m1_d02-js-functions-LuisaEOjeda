// Class code examples
// Declaration with parameters
function greetStudent(firstName, lastName) {
  console.log(`¡Hola ${firstName} ${lastName}!`);
  return "I can finally return ";
}

// Invokation with arguments
greetStudent("Miguel", "Delgado");
greetStudent("Iñigo", "M");
greetStudent("Inés", "García");
console.log("return value form my function", greetStudent("Sara"));

// set a default parameter cvalue in case of it not being passed

function greetStudent2(firstName = "Student", lastName = "") {
  console.log(`¡Hola ${firstName} ${lastName}!`);
}

greetStudent2("Marco");
greetStudent2();
greetStudent2("Marco", "Santo");

function isMultiple(number1, number2) {
  /**
   * const rest = number1 % number2
   * cosnt result = rest === 0
   * return result
   */
  return number1 % number2 === 0;
}

console.log(isMultiple(28, 4));

/**
 * Create a function doTheMath(num1, sign, num2)
 * that will return the result of the mathematical operations of num1 operator num2.
 * Allowed operators (signs) are +, -, *, /, %, **.
 * Hint: you can use the switch statement.
 */

function doTheMath(num1, sign, num2) {
  switch (sign) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * number2;
    case "/":
      if (num2 === 0) return "Division by zero is not allowed";
      return num1 / num2;
    case "**":
      return num1 ** num2;
    default:
      return `Unable to perform these actions`;
  }
}

console.log(doTheMath(18, ".", 0));

// example when arrow functions are useful for short syntax
// I want to calculate the IVA (VAT) on a price and return the total price

// Main "calling function, is the one that uses the arrow function inside

function calculateTotal (price, VATCalculation) {
    return price + VATCalculation(price)
}

calculateTotal(500, (price) => price * 0.20)
calculateTotal(1000, (price) => price * 0.12)

console.log(calculateTotal(500, (price) => price * 0.20))

function VATCalculation(){
    return price * 0.20
    }
    
    console.log(calculateTotal(1400, VATCalculation()))

    console.log(calculateTotal( 2300, fucntion(price){return price*0.20}))