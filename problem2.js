// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

function toUpper(word) {
  const arr = word.split(" ");
  const result = [];
  arr.forEach((element) => {
    result.push(element[0].toUpperCase() + element.slice(1, element.length));
  });
  return result.join(" ");
}

const word = "the quick brown fox";
console.log(toUpper(word));
