var obj = {
    a: 2,
    b: 3,
    c: 4
  };

function removeOddValues(obj) {
    // your code here
    for(let prop in obj){
        if((obj[prop] % 2) == 1){
            delete obj[prop];
        }
    }
    return obj;
}

console.log(removeOddValues(obj));