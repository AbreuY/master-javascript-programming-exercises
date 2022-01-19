function countCharacter(str, char) {
    // your code here
    let repeated = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] == char){
            repeated++;
        }
    }
    return repeated;
}
var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3