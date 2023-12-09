/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
    str = str.replace(/[^\w]/g, '').toLowerCase();
    let strCopy = str;
    str = str.split('').reverse().join('')
    console.log(str)
    return strCopy == str;
}

module.exports = isPalindrome;
