const readline = require('readline-sync');

const IMCcalc = (altura, peso) => {

    console.log(`Peso informado: ${peso}, Altura informada: ${altura}`);

    const alturaEmMetros = altura / 100;
    const alturaAoQuadrado = alturaEmMetros ** 2;

    const IMC = (peso / alturaAoQuadrado);

    switch (true) {
        case IMC >= 40:
            console.log('Obesidade graus III e IV');
            break;
        case IMC >= 35:
            console.log('Obesidade grau II');
            break;
        case IMC >= 30:
            console.log('Obesidade grau I');
            break;
        case IMC >= 25:
            console.log('Sobrepeso');
            break;
        case IMC >= 18.5:
            console.log('Peso normal');
            break;
        case IMC < 18.5:
            console.log('Abaixo do peso ideal');
            break;
        default: 
            console.log('não foi possível calcular o IMC corretamente');   
    }

    return IMC;
};

 function main() {

    const peso = readline.questionFloat('Informe seu peso em kg: ');
   const altura = readline.questionInt('Informe a sua altura em cm: ');

    const imc = IMCcalc(altura, peso);

    console.log(`IMC: ${imc.toFixed(2)}`);

 }

 main();