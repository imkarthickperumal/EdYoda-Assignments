console.clear();
console.log("Q1 START =====================");
// Question 1:
// Write a program to search if a number exists in an array. If the number exists then return the position. If it exists multiple time then return an array with all the positions. If the number doesn't exist then return -1;
// For example,
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 4
// Output: 3
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 1
// Output: [0, 5]
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 7
// Output: -1
var result = getPosition([1, 2, 3, 4, 5, 1, 3], 1);
function getPosition(arr, element) {
  var position = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == element) {
      position.push(i);
    }
  }
  if (position.length == 1) {
    return position[0];
  } else if (position.length > 1) {
    return position;
  } else if (position == 0);
  {
    return -1;
  }
}
console.log(result);

console.log("Q1 END =====================");

console.log("Q2 START =====================");
// Question 2:
// Write a program to print following pattern in the console.
// 54321
// 5432
// 543
// 54
// 5
for (i = 1; i <= 5; i++) {
  var numbers = "";
  for (j = 5; j >= i; j--) {
    numbers += j;
  }
  console.log(numbers);
}

console.log("Q2 END =====================");

console.log("Q3 START =====================");

// Question 3:
// Write a JavaScript program to sort an array in ascending order
// For example,
// Input: [3, 2, 1, 4, 5, 45]
// Output: [1, 2, 3, 4, 5, 45]
var numbers = [3, 2, 1, 4, 5, 45];
numbers.sort((a, b) => a - b);
console.log(numbers);
console.log(`Question 3 : ${numbers}`);

console.log("Q3 END =====================");

console.log("Q4 START =====================");
// Question 4:
// Write a JavaScript program to check if two strings are anagrams. Anagram string are such two strings which can be rearranged to create one another.
// For example,
// Input: LISTEN and SILENT
// Output: True
// Input: HELLO and JELLO
// Output: False
var input1 = "HELLO";
var input2 = "JELLO";
if (input1.split("").sort().join("") == input2.split("").sort().join("")) {
  console.log("Question 4 Ans : ", "true");
} else {
  console.log("Question 4 Ans : ", "false");
}
console.log("Q4 END =====================");

console.log("Q5 START =====================");
// Question 5:
// Write a JavaScript program to reverse a string without using inbuilt methods.
// For example,
// Input: Hello
// Output: olleH
var myName = "Hello";
function reverseOrder(myName) {
  var str = "";
  for (var i = myName.length - 1; i >= 0; i--) {
    str += myName[i];
  }
  return str;
}

var value = reverseOrder(myName);
console.log(`Question 5 Ans is : ${value} `);

console.log("Q5 END =====================");
