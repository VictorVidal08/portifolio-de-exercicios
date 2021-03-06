// Complete a chamada da função getPokemonDetails de modo que ela imprima no 
// console os detalhes do pokémon que você escolheu. PS: é possível que o 
// sistema do Professor Carvalho apresente erros caso o pokémon não exista no 
// banco de dados, então não se esqueça de tratá-los também, combinado?

// solução feita com consulta ao gabarito.

const pokemons = [
    {
      name: 'Bulbasaur',
      type: 'Grass',
      ability: 'Razor Leaf',
    },
    {
      name: 'Charmander',
      type: 'Fire',
      ability: 'Ember',
    },
    {
      name: 'Squirtle',
      type: 'Water',
      ability: 'Water Gun',
    },
  ];
  
  function getPokemonDetails(filter, callback) {
    setTimeout(() => {
      if (pokemons.find(filter) === undefined) {
        return callback(new Error('Não temos esse pokémon para você :('), null);
      }
      const pokemon = pokemons.find(filter);
  
      const { name, type, ability } = pokemon;
  
      const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;
  
      callback(null, messageFromProfOak);
    }, 2000);
  }
  
  getPokemonDetails(
      (pokemon) => pokemon.name === 'Bulbasaur', (error, message) => {
          if (error) {
              console.log(error);
          } else {
              console.log(message);
          }
      }
  );
  
  module.exports = {
    getPokemonDetails,
  };