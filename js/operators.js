// Arithmetic Operators +,-,*,%,**,/,++,--
let num1 = 10;
let num2 = 20;
let sum = num1 + num2; //sum30
sum++;//31
sum--;//30
sum++;//31
sum++;//32
sum++;//33
sum--;//32 final value show
console.log("Sum:", sum); //32

//Assignment Operators =,+=,-=,*=,/=,
let a = 5;
a += 10; // a = a + 10
console.log("A:", a); //15

//conditional Operators <,>,===,!== ,<=,>=
let b = 10;
let c = "10"; //value change show false
console.log(b==c); //true == checks only value, not data type
console.log(b===c); //false === checks both value and data type

//Logical Operators &&,||,!
let d = 5;
let e = 10;
console.log(d < 10 && e > 5); //true && true = true

//Ternary Operators (condition ? expr1 : expr2)
let max = (15 > 10) ? 15 : 10;
console.log("Max:", max);

