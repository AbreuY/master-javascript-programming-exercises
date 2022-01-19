var myArray = [1, 2, 3];
console.log(myArray); // --> [1, 2, 3]
function removeFromBackOfNew(arr) {
  // your code here
  arr.pop();
  return arr;
}
var output = removeFromBackOfNew(myArray);
console.log(output); // --> [1, 2]
