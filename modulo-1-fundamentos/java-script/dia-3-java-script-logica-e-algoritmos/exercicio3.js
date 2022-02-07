//Escreva dois algoritmos: um que retorne a maior palavra 
//deste array e outro que retorne a menor. 
//Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = array [0];
let menor = [];

for (let index = 1; index < array.length; index += 1) {
    if (array[index].length > array[index - 1].length) {
    maior = array[index]
    }
    else {
        maior = maior
    }
}
console.log("maior palavra do array: " + maior);

for (let index = 1; index < array.length; index += 1) {
    if (array[index].length < array[index - 1].length) {
    menor = array[index]
    }
    else {
        menor = menor
    }
}
console.log("menor palavra do array: " + menor);