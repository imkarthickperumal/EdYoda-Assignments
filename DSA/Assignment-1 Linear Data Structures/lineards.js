console.log("Assignment-1: Linear Data Structures");
//Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number
function getPairsCount(arr, n, sum) {
  let count = 0; // Initialize result

  // Consider all possible pairs and check their sums
  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++) if (arr[i] + arr[j] == sum) count++;

  return count;
}

// Driver function to test the above function
let arr = [1, 5, 7, -1, 5];
let n = arr.length;
let sum = 6;
//document.write("Count of pairs is "
//+ getPairsCount(arr, n, sum));
console.log(getPairsCount(arr, n, sum));

//Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array
var arr1 = [1, 2, 3, 4, 5];
var rev = arr1.reverse();
console.log(rev);

//Q3. Write a program to check if two strings are a rotation of each other?
// javascript program to check if two given strings are rotations of
// each other

/* Function checks if passed strings (str1 and str2)
       are rotations of each other */
function areRotations(str1, str2) {
  // There lengths must be same and str2 must be
  // a substring of str1 concatenated with str1.
  return str1.length == str2.length && (str1 + str1).indexOf(str2) != -1;
}

// Driver method

var str1 = "AACD";
var str2 = "ACDA";

if (areRotations(str1, str2))
  console.log("Strings are rotations of each other");
else console.log("Strings are not rotations of each other");
//Q4. Write a program to print the first non-repeated character from a string?
function find_FirstNotRepeatedChar(str) {
  var arra1 = str.split("");
  var result = "";
  var ctr = 0;

  for (var x = 0; x < arra1.length; x++) {
    ctr = 0;

    for (var y = 0; y < arra1.length; y++) {
      if (arra1[x] === arra1[y]) {
        ctr += 1;
      }
    }

    if (ctr < 2) {
      result = arra1[x];
      break;
    }
  }
  return result;
}
console.log(find_FirstNotRepeatedChar("abacddbec"));

//Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.
// javascript recursive function to
// solve tower of hanoi puzzle
function towerOfHanoi(n1, from_rod, to_rod, aux_rod) {
  if (n1 == 0) {
    return;
  }
  towerOfHanoi(n1 - 1, from_rod, aux_rod, to_rod);
  document.write(
    "Move disk " + n + " from rod " + from_rod + " to rod " + to_rod + "<br/>"
  );
  towerOfHanoi(n1 - 1, aux_rod, to_rod, from_rod);
}

// Driver code
var n1 = 4; // Number of disks
towerOfHanoi(n1, "A", "C", "B"); // A, B and C are names of rods

// Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.

// Javascript Program to convert postfix to prefix

// function to check if character
// is operator or not
function isOperator(x) {
  switch (x) {
    case "+":
    case "-":
    case "/":
    case "*":
      return true;
  }
  return false;
}

// Convert postfix to Prefix expression
function postToPre(post_exp) {
  let s = [];

  // length of expression
  let length = post_exp.length;

  // reading from right to left
  for (let i = 0; i < length; i++) {
    // check if symbol is operator
    if (isOperator(post_exp[i])) {
      // Pop two operands from stack
      let op1 = s[s.length - 1];
      s.pop();
      let op2 = s[s.length - 1];
      s.pop();

      // concat the operands and operator
      let temp = post_exp[i] + op2 + op1;

      // Push String temp back to stack
      s.push(temp);
    }

    // if symbol is an operand
    else {
      // Push the operand to the stack
      s.push(post_exp[i] + "");
    }
  }

  let ans = "";
  while (s.length > 0) ans += s.pop();
  return ans;
}

let post_exp = "ABC/-AK/L-*";

// Function call
console.log("Prefix : " + postToPre(post_exp));

//Q7. Write a program to convert prefix expression to infix expression.

// Javascript program to convert prefix to Infix

// Function to check if character
// is operator or not
function isOperator(x) {
  switch (x) {
    case "+":
    case "-":
    case "*":
    case "/":
    case "^":
    case "%":
      return true;
  }
  return false;
}

// Convert prefix to Infix expression
function convert(str) {
  let stack = [];

  // Length of expression
  let l = str.length;

  // Reading from right to left
  for (let i = l - 1; i >= 0; i--) {
    let c = str[i];

    if (isOperator(c)) {
      let op1 = stack[stack.length - 1];
      stack.pop();
      let op2 = stack[stack.length - 1];
      stack.pop();

      // Concat the operands and operator
      let temp = "(" + op1 + c + op2 + ")";
      stack.push(temp);
    } else {
      // To make character to string
      stack.push(c + "");
    }
  }
  return stack[stack.length - 1];
}

let exp = "*-A/BC-/AKL";

console.log("Infix : " + convert(exp));

//Q8. Write a program to check if all the brackets are closed in a given code snippet.

// Javascript program for checking
// balanced brackets

// Function to check if brackets are balanced
function areBracketsBalanced(expr) {
  // Using ArrayDeque is faster
  // than using Stack class
  let stack = [];

  // Traversing the Expression
  for (let i = 0; i < expr.length; i++) {
    let x = expr[i];

    if (x == "(" || x == "[" || x == "{") {
      // Push the element in the stack
      stack.push(x);
      continue;
    }

    // If current character is not opening
    // bracket, then it must be closing.
    // So stack cannot be empty at this point.
    if (stack.length == 0) return false;

    let check;
    switch (x) {
      case ")":
        check = stack.pop();
        if (check == "{" || check == "[") return false;
        break;

      case "}":
        check = stack.pop();
        if (check == "(" || check == "[") return false;
        break;

      case "]":
        check = stack.pop();
        if (check == "(" || check == "{") return false;
        break;
    }
  }

  // Check Empty Stack
  return stack.length == 0;
}

// Driver code
let expr = "([{}])";

// Function call
if (areBracketsBalanced(expr)) console.log("Balanced ");
else console.log("Not Balanced ");

//Q9. Write a program to reverse a stack.

// JavaScript code to reverse a
// stack using recursion

// using Stack class for
// stack implementation
let st = [];

// Below is a recursive function
// that inserts an element
// at the bottom of a stack.
function insert_at_bottom(x) {
  if (st.length == 0) st.push(x);
  else {
    // All items are held in Function
    // Call Stack until we reach end
    // of the stack. When the stack becomes
    // empty, the st.size() becomes 0, the
    // above if part is executed and
    // the item is inserted at the bottom
    let a = st.pop();
    insert_at_bottom(x);

    // push allthe items held
    // in Function Call Stack
    // once the item is inserted
    // at the bottom
    st.push(a);
  }
}

// Below is the function that
// reverses the given stack using
// insert_at_bottom()
function reverse() {
  if (st.length > 0) {
    // Hold all items in Function
    // Call Stack until we
    // reach end of the stack
    let x = st.pop();
    reverse();

    // Insert all the items held
    // in Function Call Stack
    // one by one from the bottom
    // to top. Every item is
    // inserted at the bottom
    insert_at_bottom(x);
  }
}

// Driver Code

// push elements into
// the stack
st.push("1");
st.push("2");
st.push("3");
st.push("4");

console.log("Original Stack<br>");

console.log(st.join(" ") + "<br>");

// function to reverse
// the stack
reverse();

console.log("Reversed Stack<br>");

console.log(st.join(" "));

//Q10. Write a program to find the smallest number using a stack.

//JavaScript simple approach to print smallest
// and second smallest element.

// driver code

let arr4 = [111, 13, 25, 9, 34, 1];
let n3 = arr.length;
// sorting the array using
// in-built sort function
arr4.sort();

// printing the desired element
console.log("smallest element is " + arr4[0], "</br>");
//console.log("second smallest element is "+arr4[1],"</br>");
