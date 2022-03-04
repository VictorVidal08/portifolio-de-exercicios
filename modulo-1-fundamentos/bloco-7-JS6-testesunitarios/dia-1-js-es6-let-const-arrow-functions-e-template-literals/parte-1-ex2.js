const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".


const sortOddsAndEvens = () => {
    oddsAndEvens[0] = 2;
    oddsAndEvens[1] = 3;
    oddsAndEvens[2] = 4;
    oddsAndEvens[3] = 7;
    oddsAndEvens[4] = 10;
    oddsAndEvens[5] = 13;
  
    return oddsAndEvens;
}

const sortedArray = sortOddsAndEvens();

console.log(`Os numeros ${sortedArray} se encontram ordenados de forma crescente!`); 

// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.

// https://www.w3schools.com/js/js_array_sort.asp

const sortArrayBonus = array => {
    const sortOddsAndEvens = array.sort((a, b) => a - b);
    return sortOddsAndEvens;
}
const sortedArrayBonus = sortArrayBonus(oddsAndEvens);
console.log(`Os numeros ${sortedArray} se encontram ordenados de forma crescente!`); 