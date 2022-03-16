// Cria uma função toObject que, dada uma lista, 
// retorna um objeto representando o carro:

// Dica: use array destructuring e abbreviation object literal .

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

const toObject = ([model, brand, year]) => ({model, brand, year});

console.log(toObject(palio));
console.log(toObject(shelbyCobra));
console.log(toObject(chiron));
