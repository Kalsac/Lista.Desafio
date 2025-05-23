function somaPares(arr) {
    return arr.filter(num => num % 2 === 0).reduce((acc, num) => acc + num, 0);
}
console.log(somaPares([1, 2, 3, 4, 5, 6])); 


function palavrasLongas(arr) {
    return arr.filter(palavra => palavra.length > 4);
}
console.log(palavrasLongas(["café", "bolo", "chá", "torta", "chocolate"])); 


function contarOcorrencias(arr, num) {
    return arr.filter(elemento => elemento === num).length;
}
console.log(contarOcorrencias([1, 2, 3, 2, 4, 2, 5], 2)); 


function multiplicarArray(arr, multiplicador) {
    return arr.map(num => num * multiplicador);
}
console.log(multiplicarArray([1, 2, 3, 4], 3)); 


function inverterFrase(frase) {
    return frase.split(" ").reverse().join(" ");
}
console.log(inverterFrase("Eu gosto de café"));
