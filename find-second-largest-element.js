var arr = [3, 5, 7, 12, 9, 99, 2];

function secondLargestElement(arr) {
  const sortedArray = arr.sort((a, b) => b - a);
  return sortedArray[1];
}
console.log(secondLargestElement(arr));

// second method

function getSecondLargest(arr) {
  return Math.max(...arr.slice(1));
}
console.log(getSecondLargest(arr));
