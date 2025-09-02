var num1 = 10; //global declaration
let num2 = 20; //global declaration
const num3 = 30; //global declaration

function displayLocalVariables() {
  // local scope
  var num1 = 40; //local declaration
  let num2 = 50; //local declaration
  const num3 = 60; //local declaration
  if (true) {
    // block scope
    var num1 = 70; //redeclared
    let num2 = 80; //block scoped
    const num3 = 90; //block scoped
    console.log("this redeclared value ", num1);
    console.log("this block scoped", num2);
    console.log("this block scoped", num3);
  }
  console.log("this local declaration", num1);
  console.log("this local declaration", num2);
  console.log("this local declaration", num3);
}
displayLocalVariables();

console.log("this global declaration", num1);
console.log("this global declaration", num2);
console.log("this global declaration", num3);
