var obj1 = {
    a: 1,
    b: 2
};
var obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    for (let property in obj2) {
       if(!(property in obj1)){
           obj1[property] = obj2[property];
           return obj1;
       }
       
     }

}

console.log(extend(obj1, obj2));
