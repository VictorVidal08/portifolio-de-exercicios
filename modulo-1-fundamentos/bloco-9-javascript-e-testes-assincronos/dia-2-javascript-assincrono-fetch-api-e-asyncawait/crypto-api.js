const fetchCoins = async () => {
    const url = 'https://api.coincap.io/v2/assets';

    const coins = await fetch(url)
        .then((response) => response.json())
        .then((data) => data.data) // o segundo data é o nome do objeto da API.
        .catch((error) => error.toString())

        return coins;
};

const setCoins = async () => {
    const coins = await fetchCoins();

    const coinsList = document.getElementById('coins');

    coins.filter((coin) =>Number(coin.rank) <= 10) // para filtrar as 10 primeiras.
        .forEach((coin) => {
        const newLi = document.createElement('li');
        const usdPrice = Number(coin.priceUsd); // transforma em numero

        newLi.innerText = `${coin.name} (${coin.symbol}): ${usdPrice.toFixed(2)}`; // toFixed para ajustar as casas decimais

        coinsList.appendChild(newLi); // insere no texto
    });
}

window.onload = () => setCoins();