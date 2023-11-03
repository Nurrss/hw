// Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4
function lowAndGreat(numbers) {
  const arr = numbers.sort();
  return `${arr[1]} ${arr[arr.length - 2]}`;
}

const numbers = [1, 2, 3, 4, 5];
console.log(lowAndGreat(numbers));
