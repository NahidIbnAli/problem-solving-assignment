function calculateDifference(a, b) {
  return a - b;
}
console.log(calculateDifference(10, 5));

function isOdd(n) {
  return n % 2 !== 0;
}
console.log(isOdd(5));

function findMin(arr) {
  return Math.min(...arr);
}
console.log(findMin([3, 1, 4, 1, 5, 9]));

function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]));

function sortArrayDescending(arr) {
  return arr.sort((a, b) => b - a);
}
console.log(sortArrayDescending([5, 3, 8, 1, 2]));

function lowercaseFirstLetter(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log(lowercaseFirstLetter("Hello World"));

function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}
console.log(countVowels("Hello World"));

function findAverage(arr) {
  if (arr.length === 0) return 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}
console.log(findAverage([1, 2, 3, 4, 5]));
