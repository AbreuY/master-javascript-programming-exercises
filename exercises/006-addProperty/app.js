var myObj = {};
function addProperty(obj, key) {
  // your code here
  obj[key] = true;
  return myObj;
}

console.log(addProperty(myObj, "isOld"));