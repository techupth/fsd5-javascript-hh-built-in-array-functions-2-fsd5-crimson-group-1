function isPalindrome(string) {
  let stringToArray = string.split("");
  let reversedStringToArray = stringToArray.reverse();
  let reversedString = reversedStringToArray.join("");
  if (string === reversedString) {
    return true;
  } else {
    return false;
  }
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
