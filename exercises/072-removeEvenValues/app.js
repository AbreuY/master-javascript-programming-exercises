var obj = {
    a: 2,
    b: 3,
    c: 4
  };

function removeEvenValues(obj) {
    // your code here
    for(let prop in obj){
        if((obj[prop] % 2) == 0){
            delete obj[prop];
        }
    }
    return obj;
}

console.log(removeEvenValues(obj));