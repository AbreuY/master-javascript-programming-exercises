var obj = {
  age: 45
};

function isPersonOldEnoughToDrinkAndDrive(person) {
  // the person object contains an "age" property inside
  // your code here
  if(person.age >= 21 && person.age >= 16){
    return true;
  }
  return false
}

console.log(isPersonOldEnoughToDrinkAndDrive(obj));