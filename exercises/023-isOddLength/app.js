// Write your function here
function isOddLength(word){
    // x % 2 es 1 cuando el numero es impar, 
    // y 0 cuando es par.

    if((word.length % 2) == 1){
        return true;
    }
    return false;
}
console.log(isOddLength("special"));