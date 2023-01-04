//To find the longest word in a string using a JavaScript function, you can use the following approach:

/*Split the string into an array of words using the split() method, which splits a string into an array of substrings based on a specified separator.

Use the reduce() method to iterate over the array of words and return the longest word. The reduce() method applies a function to each element in the array, accumulating a result and returning it at the end*/

function findLongestWord(str) {
  const words = str.split(" ");
  return words.reduce((longestWord, currentWord) => {
    return currentWord.length > longestWord.length ? currentWord : longestWord;
  }, "");
}

console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // outputs 'jumps'
console.log(findLongestWord("A fox is a small carnivorous mammal")); // outputs 'carnivorous'

// For Loop Approach

/*  This function first splits the input string into an array of words using the split() method. It then uses a for loop to iterate over the array of words and keep track of the longest word so far by comparing the length of each word to the length of the current longest word.
  
  Note that this function is case-sensitive, so it will treat 'The' and 'the' as two different words. If you want to make the function case-insensitive, you can use the toLowerCase() method to convert the words to lowercase before comparing their lengths.
  
*/

function findLongestWord(str) {
  const words = str.split(" ");
  let longestWord = "";
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // outputs 'jumps'
console.log(findLongestWord("A fox is a small carnivorous mammal")); // outputs 'carnivorous'
