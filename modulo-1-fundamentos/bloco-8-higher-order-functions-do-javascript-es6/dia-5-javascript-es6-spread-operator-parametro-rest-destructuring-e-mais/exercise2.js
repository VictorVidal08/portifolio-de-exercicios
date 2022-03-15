// Crie uma função sum que dado um número variável de elementos 
// retorna a soma desses elementos.
// Dica: use parâmetro rest .

// escreva sum abaixo

const sum = (...param) => 
    param.reduce(((acc, curr) => 
    acc + curr), 0);
;
console.log(sum(1, 2, 3));