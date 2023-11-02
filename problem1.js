// Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

function longest(word) {
  let num = 0;
  let result = "";
  const arr = word.split(" ");
  arr.forEach((element) => {
    if (element.length > num) {
      num = element.length;
      result = element;
    }
  });
  return result;
}

const word = "Web Development Tutorial";

console.log(longest(word));
