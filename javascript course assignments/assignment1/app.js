// 1. Write a JavaScript program that accepts two numbers in two prompts and
// displays the larger one in the console.
// let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number:");

// if (num1 > num2) {
//   console.log("The larger number is " + num1);
// } else if (num2 > num1) {
//   console.log("The larger number is " + num2);
// } else {
//   console.log("The two numbers are equal.");
// }

// 2.Write a JavaScript conditional statement to find the sign of a number. Display
// an alert box with the specified sign.
// let num = prompt("Enter a number:");

// if (num > 0) {
//   alert("The sign is +");
// } else if (num < 0) {
//   alert("The sign is -");
// }

// 3.Write a JavaScript program that accepts five numbers in five prompts and
// displays the larger one in the console.
// let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number:");
// let num3 = prompt("Enter the third number:");
// let num4 = prompt("Enter the fourth number:");
// let num5 = prompt("Enter the fifth number:");

// let largest = num1;

// if (num2 > largest) {
//   largest = num2;
// }
// if (num3 > largest) {
//   largest = num3;
// }
// if (num4 > largest) {
//   largest = num4;
// }
// if (num5 > largest) {
//   largest = num5;
// }

// console.log("The largest number is " + largest);

// 4.Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.
// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//       console.log(i + " is even");
//     } else {
//       console.log(i + " is odd");
//     }
//   }

// 5.Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade
// let studMarks = [80, 75, 90, 95, 85];
// let sum = 0;
// let avg = 0;

// for (let i = 0; i < studMarks.length; i++) {
//   sum += studMarks[i];
// }

// avg = sum / studMarks.length;

// if (avg < 100) {
//   console.log("Grade: A");
// } else if (avg < 90) {
//   console.log("Grade: B");
// } else if (avg < 80) {
//   console.log("Grade: C");
// } else if (avg < 70) {
//   console.log("Grade: D");
// } else if (avg < 60){
//   console.log("Grade: F");
// }

// 6.Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz".
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }

// 7.Write a JavaScript program to construct the following pattern, using a nested
// for loop.
// *
// * *
// * * *
// * * * *
// * * * * *
// for (let i = 1; i <= 5; i++) {
//     let nextrow = "";
//     for (let j = 1; j <= i; j++) {
//       row += "* ";
//     }
//     console.log(nextrow);
//   }
  