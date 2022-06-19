console.clear();

// Question 1:
// var str1 = 'Today is';
// var str2 = '      a beautiful day     '
// var str3 = ' In Hawaii.     '
// Result = 'Today is a beautiful day In Hawaii.'
// Use the str1, str2, str3 variables to create the Result string. Keep the extra spaces, lowercase and uppercase letters in mind.

console.log("===================Q1 START =====================");

var str1 = "Today is";
var str2 = "      a beautiful day     ";
var str3 = " In Hawaii.    ";
var result = `${str1.trim()} ${str2.trim()} ${str3.trim()}`;
console.log(result);

console.log("====================Q1 END ======================");

// Question 2:
// var enteredAlphabet = 'd' or "D"
// Write a program to check vowel or consonant using switch case. Change value of enteredAlphabet and check if your code works fine.
console.log("===================Q2 START =====================");

var enteredAlphabet = "d";
switch (enteredAlphabet.toLowerCase()) {
  case "a":
    message = "vowel";
    // console.log("vowel");
    break;
  case "e":
    message = "vowel";
    // console.log("vowel");
    break;
  case "i":
    message = "vowel";
    // console.log("vowel");
    break;
  case "o":
    message = "vowel";
    // console.log("vowel");
    break;
  case "u":
    message = "vowel";
    // console.log("vowel");
    break;
  default:
    message = "Consonant"
    console.log("Consonant");
}

console.log("It is a : ", message);

console.log("====================Q2 END ======================");

// Question 3: 
// Write a JavaScript program to create menu driven calculator that performs basic arithmetic operations (add, subtract, multiply and divide) using switch case. The calculator should input two numbers and an operator: +, -, *, / from the user. It should perform operation according to the operator entered and must take input in given format.
console.log("===================Q3 START =====================");

var firstNumber = prompt("Add Your First Number");
var secoundNumber = prompt("Add Your Secound Number");
var operation = prompt("Add what operation you need");

switch (operation) {
  case "+":
    console.log(
      `Your Answer is : ${parseInt(firstNumber) + parseInt(secoundNumber)}`
    );
    break;

  case "-":
    console.log(`Your Answer Is : ${(firstNumber - secoundNumber).toFixed(2)}`);
    break;

  case "*":
    console.log(` Your Answer Is :${(firstNumber * secoundNumber).toFixed(2)}`);
    break;

  case "/":
    console.log(` Your Answer Is :${(firstNumber / secoundNumber).toFixed(2)}`);
    break;
}

console.log("====================Q3 END ======================");

// Question 4: 
// Write a JavaScript program to input sides of a triangle and check whether a triangle is equilateral, scalene or isosceles triangle using if else.
// Properties of triangle:
// A triangle is said Equilateral Triangle, if all its sides are equal. If a, b, c are three sides of triangle. Then, the triangle is equilateral only if a == b == c.
// A triangle is said Isosceles Triangle, if its two sides are equal. If a, b, c are three sides of triangle. Then, the triangle is isosceles if either a == b or a == c or b == c.
// A triangle is said Scalene Triangle, if none of its sides are equal.

console.log("===================Q4 START =====================");

var a = 10;
var b = 10;
var c = 30;
if (a === b && b === c && c === a) {
  console.log("A triangle is said Equilateral Triangle");
} else if (a === b || b === c || c === a) {
  console.log("A triangle is said Isosceles Triangle");
} else {
  console.log("A triangle is said Scalene Triangle");
}

console.log("====================Q4 END ======================");

// Question 5:
// Write a JavaScript program to input electricity unit charge and calculate the total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit. An additional surcharge of 20% is added to the bill.
// For example, input: 20 units then bill is Rs10
// Total Units: 300
// 50 * 0.5 = 25
// 100 * 0.75 = 75
// 100 * 1.2 = 120
// 50 * 1.5 = 75
// Total = 295 + 20% surcharge on 295
// Result = INR 354

console.log("===================Q5 START =====================");

let units = 300;


if (units <= 50) {
  console.log(`Charge: Rs. ${units * 0.5}`);
} else if (units <= 150) {
  console.log(`Charge: Rs. ${(units - 50) * 0.75 + 25}`);
} else if (units <= 250) {
  console.log(`Charge: Rs. ${(units - 150) * 1.2 + 100}`);
} else if (units > 250) {
  console.log(`Charge: Rs. ${((units - 250) * 1.5 + 220) * 1.2}`);
} else {
  console.log(`Charge: Rs. 0`);
}

console.log("====================Q5 END ======================");
