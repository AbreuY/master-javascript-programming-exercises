var person1 = {
  name: 'Joe Blow',
  role: 'schlub'
};
var person2 = {
  name: 'Mr. Burns',
  role: 'supervisor'
};

function addObjectProperty(obj1, key, obj2) {
  // tu codigo aqui
   obj1[key] = obj2;
   return obj1;
}
addObjectProperty(person1, 'manager', person2);