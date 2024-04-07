//a.Odd numbers
console.log("----Arrow Functions----\n")
console.log("== a) Odd Numbers ==")
const mixedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Odd numbers:");
mixedNumbers.forEach(num => {
    if (num % 2 !== 0) {
        console.log(num);
    }
});
console.log("");

//b.To Tittle case
console.log("== b) Title Capitalize ==\n")
const words = ["hi", "antony", "symon"];
const titleCaseWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
console.log("Words in title case:", titleCaseWords,"\n");

// C .Sum
console.log("=== c) Sum ===\n")
const sumArray = [1, 2, 3, 4, 5];
let totalSum = 0;
sumArray.forEach(num => {
    totalSum += num;
});
console.log("Sum of all numbers:", totalSum,"\n");


// Function to check if a number is prime
const isPrime = num => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

// d)prime NUmbers
console.log("=== d)prime numbers ===\n")
const primeNumbers = mixedNumbers.filter(num => isPrime(num));
console.log("Prime numbers:", primeNumbers,"\n");

//e.palindrome
console.log("=== e)palindrome ===\n")
const arr = ["aba", "hey", "pop", "madam"];
const isPalindrome = str => str === str.split("").reverse().join("");
const palindromes = arr.filter(str => isPalindrome(str));
console.log("Palindromes:", palindromes);



