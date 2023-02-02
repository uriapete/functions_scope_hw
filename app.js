// 1.1. What is the difference between a parameter and an argument?
// A parameter is a sort of "placeholder variable" for a potential value to be passed into a function. An argument is an actual value that is being passed into a function.

// 1.2. Within a function, what is the difference between return and console.log?
// 'return' passes a value back out into the place the function was called. 'console.log' simply prints to the console, nothing more.

// 1. 3. What are the implications of the ability of a function to return a value?
// When a function can return a value, it could potentially give the entire program more of an ability to make decisions on its own, and can also allow different functions to communicate by passing values amongst themselves.

// 2. calculateCube
function calculateCube(num) {
    // YOUR CODE HERE
    let cubeVol = Math.pow(num, 3);
    // console.log(cubeVol); 
    return cubeVol;
}

// console.log(calculateCube(5));

// 3. isAVowel
function isAVowel(letter) {
    // YOUR CODE HERE
    let bool0 = false;
    vowelList = ['a','e','i','o','u','A','E','I','O','U'];
    vowelList.forEach((vowel) => {
        if (letter === vowel) {
            bool0 = true;
        }
    })
    return bool0;
}

// console.log(isAVowel('a'));
// console.log(isAVowel('b'));
// console.log(isAVowel('A'));
// console.log(isAVowel('B'));


// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    // YOUR CODE HERE
    //array of lengths
    let lenArr = [];
    lenArr.push(word1.length);
    lenArr.push(word2.length);
    return lenArr;
}

// console.log(getTwoLengths("Hank", "Hippopopalous"));

// 5. sumArray
function sumArray(arr) {
    // YOUR CODE HERE
    let sum = 0;
    arr.forEach(num => {
        sum += num;
    });
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5, 6]));
// => 21

// 6.1 checkPrime
function checkPrime(num) {
    // YOUR CODE HERE
}

// 6.2 printPrimes
function printPrimes(num) {
    // YOUR CODE HERE
}

// 7. printLongestWord
function printLongestWord(arr) {
    // YOUR CODE HERE
}

// BONUS!

// 8. eulerFibo
function eulerFibo(num) {
    // YOUR CODE HERE
}

// 9. findNeedle
function findNeedle(arr) {
    // YOUR CODE HERE
}

// 10. sumPositive
function sumPositive(arr) {
    // YOUR CODE HERE
}

module.exports = {
    calculateCube,
    isAVowel,
    getTwoLengths,
    sumArray,
    checkPrime,
    printPrimes,
    printLongestWord,
    eulerFibo,
    findNeedle,
    sumPositive
};