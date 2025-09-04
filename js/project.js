let sum = document.getElementById("add");
let subtract = document.getElementById("subtract");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let result = document.getElementById("result");

// Get numbers from user
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

// Show entered numbers
document.getElementById("first-number").innerText = `First number: ${num1}`;
document.getElementById("second-number").innerText = `Second number: ${num2}`;

// Validate input
if (isNaN(num1) || isNaN(num2)) {
  result.innerText = "Error: Please enter valid numbers.";
} else {
  function calculate(operation) {
    let output;

    if (operation === "+") {
      output = num1 + num2;
    } else if (operation === "-") {
      output = num1 - num2;
    } else if (operation === "*") {
      output = num1 * num2;
    } else if (operation === "/") {
      if (num2 === 0) {
        result.innerText = "Error: Division by zero.";
        return;
      }
      output = num1 / num2;
    } else {
      result.innerText = "Error: Unknown operation.";
      return;
    }

    result.innerText = `Result: ${output}`;
  }
}

// Attach event listeners only if valid numbers
sum.addEventListener("click", () => calculate("+"));
subtract.addEventListener("click", () => calculate("-"));
multiply.addEventListener("click", () => calculate("*"));
divide.addEventListener("click", () => calculate("/"));
