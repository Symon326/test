//a. Print odd numbers in an array
console.log("------a)odd Numbers---");
let mixedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
(function () {
  console.log(mixedNumbers);
  console.log("odd numbers are :");
  mixedNumbers.forEach(function (num) {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
})();

console.log("");
console.log("==== b) To Tittle Caps ====");
// b. Convert all the strings to title caps in a string array
let words = ["hi", "antony", "symon"];
for (let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
}
console.log(words, "\n");

//c.sum of all numbers
console.log("==== c) Sum of All ======");
let sum = 0;
for (let i = 0; i < mixedNumbers.length; i++) {
  sum += mixedNumbers[i];
}
console.log("The sum of all numbers in the array is: " + sum);
console.log("");

// d. Return all the prime numbers in an array
console.log("===== d) Prime Numbers =====");
function Primenum(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
let primeNumbers = mixedNumbers.filter(function (num) {
  return Primenum(num);
});
console.log("Prime are : " + primeNumbers);
console.log("");

// e. Return all the palindromes in an array
console.log("=== e) palindrome ===");
let arr = ["aba", "hey", "pop", "madam"];
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}
let palindromes = arr.filter(function (str) {
  return isPalindrome(str);
});
console.log("Palindromes are : " + palindromes);
console.log("");

// f. Return median of two sorted arrays of the same size
console.log("=== f) Median ====")
let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];
let mergedArr = arr1.concat(arr2);
mergedArr.sort(function(a, b) {
    return a - b;
});
let length = mergedArr.length;
let median = (mergedArr[Math.floor((length - 1) / 2)] + mergedArr[Math.ceil((length - 1) / 2)]) / 2;
console.log("The median : " + median);
console.log("");

// g . Remove Duplicates
console.log("=== g) Remove Duplicates ===")
let mixarr = [1, 2, 2, 3, 4, 5, 5];
let uniqueval = [];
for (let i = 0; i < mixarr.length; i++) {
    if (!uniqueval.includes(mixarr[i])) {
        uniqueval.push(mixarr[i]);
    }
};
console.log("After duplicates removed: " + uniqueval,"\n");

// h. Rotate an array by k times
console.log("=== h) Rotate Array ===")
let k = 2;
let effectiveRotation = k % mixedNumbers.length;
let rotatedArr = mixedNumbers.slice(-effectiveRotation).concat(mixedNumbers.slice(0, arr.length - effectiveRotation));
console.log("Rotated array: " + rotatedArr);


