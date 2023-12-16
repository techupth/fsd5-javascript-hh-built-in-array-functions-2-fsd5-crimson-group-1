function isPalindrome(string) {
  // Start coding here
  let splitWord = string.split("");
  let reverseWord = splitWord.reverse();
  let sumWord = reverseWord.join("");
  if (string == sumWord) {
    return true;
  } else {
    return false;
  }
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
