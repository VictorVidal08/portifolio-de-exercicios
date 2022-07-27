const alturaEmMetros = 1.75;
const pesoEmKg = 74;

const IMCcalc = (altura, peso) => {
    const IMC = peso / Math.pow(altura, 2);
    // console.log(IMC);
    return IMC;
};

 function main() {
    const imc = IMCcalc(alturaEmMetros, pesoEmKg);

    console.log(`IMC: ${imc.toFixed(2)}`);
 }

 main();