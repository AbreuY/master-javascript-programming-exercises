var car = {
  model: 'Toyota'
};

function getProperty(obj, key) {
  // your code here
  // We can access properties objects using a
  // dot too. E.g. obj.key // car.model;
  return obj[key];
}
console.log(getProperty(car, "model"));