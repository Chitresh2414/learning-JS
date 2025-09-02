function largestNumber() {
    const a = 5;
const b = 10;
const c = 15;

if (a > b && a > c) {
    console.log("A is the largest");
} else if (b > a && b > c) {
    console.log("B is the largest");
} else {
    console.log("C is the largest");
}


}
// largestNumber();

const month=2;
console.log("Month:", month);

if(month===1 || month===3 || month===5 || month===7 || month===8 || month===10 || month===12){
   console.log("31 days");
} else if (month===4 || month===6 || month===9 || month===11){
   console.log("30 days");
} else if (month===2){
   console.log("28 days, 29 in leap years");
} else {
    console.log("Invalid month");
};

//leap year check
const year = 2024;
if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}