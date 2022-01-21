var obj = {
    a: 1,
    b: 2,
    c: 3
  };

function countNumberOfKeys(obj) {
    // your code here
    let sum = 0;
    for(let property in obj){
        sum = sum + 1;     
    }
    return sum;
}

console.log(countNumberOfKeys(obj));