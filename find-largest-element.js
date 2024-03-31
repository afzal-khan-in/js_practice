// first method
var arr = [3, 5, 7, 12, 9, 99, 2];
var max = arr[0]; // at first, we are storing the first element of the array in the max value to compare in the for loop

for (i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    // on iterative, value of arr will be changed and it will compare with the max value. max value will store the previous value
    max = arr[i]; // we are storing arr value in max if the condition is true else it will not come into if condition and max value will remain older.
  }
}

console.log(max);

//second method

function findlargestElement(arr) {
  const sortedArray = arr.sort((a, b) => b - a);
  return sortedArray[0];
}

console.log(findlargestElement(arr));
