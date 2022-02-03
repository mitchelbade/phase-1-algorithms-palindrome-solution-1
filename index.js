function reverseString(word) {
  const wordLower = word.toLowerCase();
  const wordArray = wordLower.split("");
  const wordReverseArray = wordArray.reverse();
  const wordReverse = wordReverseArray.join("");
  return wordReverse;
  //return word.toLowerCase().split("").reverse().join("");
  
}

function isPalindrome(word) {
  const reversedWord = reverseString(word);
  return word === reversedWord;
};

/* 
  Add your pseudocode here
  write a function that takes in a string
  reverses the word
  if the reverse is the same as original word
  return true
  else
  return false
*/

/*
  Add written explanation of your solution here
  makes a function that checks if a word is a palindrome
  palindrome = word is the same forwards and backwards example - mom, racecar, dad, madam
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
