var obj = {
    name: 'Montana',
    age: 20,
    location: 'Texas'
  };

function removeStringValuesLongerThan(num, obj) {
    // your code here
    for(let prop in obj){
        if(typeof obj[prop] === "string"){
            if(obj[prop].length > num){
                delete obj[prop];
            }
        }
    }
    return obj;

}
console.log(removeStringValuesLongerThan(6, obj));