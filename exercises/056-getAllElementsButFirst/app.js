var input = [1, 2, 3, 4];

function getAllElementsButFirst(array) {
  // your code here
  let arr = [];
   array.filter((element, index)=>{
    if(index != 0){
      arr.push(element);
    }
  });
  return arr;
}
var output = getAllElementsButFirst(input);
console.log(output);