//crie um algoritmo que retorne o fatorial de 10.

let number = 10;
let fatorial = 1;


for (let index = number; index > 0; index -= 1){
    fatorial = fatorial * index
}
console.log(fatorial);