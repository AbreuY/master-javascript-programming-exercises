let person = {
  firstName: 'Jade',
  lastName: 'Smith'
};


function addFullNameProperty(obj) {
  // tu codigo aqui
 person.fullName = person.firstName + " " + person.lastName;
 return person;
}

console.log(addFullNameProperty(person));