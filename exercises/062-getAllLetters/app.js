function getAllLetters(str) {
    let allCharacters = [];
    for(let i = 0; i < str.length; i++){
        allCharacters.push(str[i]);
    }
    return allCharacters;
}
var output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']