var myObj = {};
var myArray = [1, 3];

function addArrayProperty(obj, key, arr) {
  // your code here
  obj[key] = arr;
  return obj;
}

console.log(addArrayProperty(myObj, 'myProperty', myArray));
