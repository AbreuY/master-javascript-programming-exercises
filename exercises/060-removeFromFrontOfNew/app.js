var arr = [1, 2, 3];
console.log(arr); // --> [1, 2, 3]
function removeFromFrontOfNew(arr) {
    // your code here
    arr.shift();
    return arr;
}
var output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
