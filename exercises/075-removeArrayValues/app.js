var obj = {
    a: [1, 3, 4],
    b: 2,
    c: ['hi', 'there']
  }

function removeArrayValues(obj) {
    // your code here
    for(let prop in obj){
        if(Array.isArray(obj[prop])){
            delete obj[prop];
        }
    }
    return obj;
}

console.log(removeArrayValues(obj));