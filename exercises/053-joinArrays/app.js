function joinArrays(arr1, arr2) {
  // your code here
  // Spread Operator JS
  // let newArr = [...arr1, ...arr2];
  // El método concat() se usa para unir dos o más arrays. 
  // Este método no cambia los arrays existentes, sino que 
  // devuelve un nuevo array.
  let newArr = arr1.concat(arr2);
  return newArr;
}
console.log(joinArrays([1,2], [3,4]));