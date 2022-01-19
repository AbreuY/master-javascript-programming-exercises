function getAllWords(str) {
    // your code here
    let words = str.split(' ');
    return words;
}
var output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']