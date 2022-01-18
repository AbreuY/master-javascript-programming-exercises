var obj = {
  age: 16
};

function isPersonOldEnoughToDrive(person) {
  // tu codigo aqui
  if (person.age >= 16){
    return true;
  }
  return false;
}

console.log(isPersonOldEnoughToDrive(obj));