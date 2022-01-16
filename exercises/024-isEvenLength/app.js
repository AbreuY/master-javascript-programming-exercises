// Write your function here
function isEvenLength(word){
    if((word.length % 2) == 0 /* 0 to check if even 1 to check if is odd*/){
        return true;
    }
    return false;
}
console.log(isEvenLength("wow"));