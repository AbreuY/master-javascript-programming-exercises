let person = {
  firstName: 'Jade',
  lastName: 'Smith'
};


function addFullNameProperty(obj) {
  // tu codigo aqui
 obj.fullName = obj.firstName + " " + obj.lastName;
 return obj;
}

console.log(addFullNameProperty(person));