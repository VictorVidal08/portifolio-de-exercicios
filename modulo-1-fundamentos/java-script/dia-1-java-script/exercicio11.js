let salary = 3000;

let aliquotaINSS;
let aliquotaIR;

if (salary < 1554.94) {
    aliquotaINSS = salary * 0.08;
}
else if (salary < 2594.92) {
    aliquotaINSS = salary * 0.09;
}
else if (salary < 5189.82) {
    aliquotaINSS = salary * 0.11;
}
else {
    aliquotaINSS = 570.88;
}

let salarioBase = salary - aliquotaINSS
console.log(salarioBase);

if (salarioBase < 1903.98) {
    aliquotaIR = 0;
}
else if (salarioBase < 2826.65) {
    aliquotaIR = (salarioBase * 0.075) - 142.80;
}
else if (3751.05) {
    aliquotaIR = (salarioBase * 0.15) - 354.8;
}
else if (4664.68) {
    aliquotaIR = (salarioBase * 0.225) - 636.13;
}
else {
    aliquotaIR = (salarioBase * 0.275) - 869.36;
}

let salarioLiquido = salarioBase - aliquotaIR;
console.log(salarioLiquido);
