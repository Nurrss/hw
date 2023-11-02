// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5

const vowels = "aeiouy";

function countVowels(word) {
  let sum = 0;
  const arr = word.split("");
  arr.forEach((element) => {
    if (vowels.includes(element)) {
      ++sum;
    }
  });
  return sum;
}

const word = "The quick brown foox";
console.log(countVowels(word));
