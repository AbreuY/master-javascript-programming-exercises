var myObj = {
  name: 'Sam',
  age: 20
}

function removeProperty(obj, key) {
  // your code here
  delete obj[key];
  return myObj;
}

console.log(removeProperty(myObj, "age"));