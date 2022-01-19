var input = [1, 2, 3, 4];

function getAllElementsButLast(array) {
  // your code here
  let arr = [];
   array.filter((element, index)=>{
    if(index != array.length -1 ){
      arr.push(element);
    }
  });
  return arr;
}
var output = getAllElementsButLast(input);
console.log(output);