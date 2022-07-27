const readline = require('readline-sync');

const IMCcalc = (altura, peso) => {

    console.log(`Peso informado: ${peso}, Altura informada: ${altura}`);

    const alturaEmMetros = altura / 100;
    const alturaAoQuadrado = alturaEmMetros ** 2;

    const IMC = (peso / alturaAoQuadrado);

    return IMC;
};

 function main() {

    const peso = readline.questionFloat('Informe seu peso em kg: ');
   const altura = readline.questionInt('Informe a sua altura em cm: ');

    const imc = IMCcalc(altura, peso);

    console.log(`IMC: ${imc.toFixed(2)}`);

 }

 main();