const productCost = 23;
const productPrice = 30;

const tax = 1.2;

var valorCustoTotal = productCost * tax;

var lucroParaMil = 1000 * (productPrice - valorCustoTotal);

if (productCost < 0 || productPrice < 0) {
    console.log("erro, valor inválido");
}


console.log(valorCustoTotal);
console.log(lucroParaMil);
