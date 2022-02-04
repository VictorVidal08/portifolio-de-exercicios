//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let array25 = [];

for (let index = 1; index <= 25; index += 1) {
   array25.push(index);
}
console.log(array25);

arrayDividido = [];

for (let index = 0; index < array25.length; index += 1) {
    arrayDividido[index] = (array25[index] /2)
}
console.log(arrayDividido);