// Dada o array de nomes, retorne a quantidade 
// de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    // código com ajuda da Gisele
    return names.reduce((acc, curr) =>
    acc += curr.split('').reduce((acc, curr) => {
        if(curr.toLowerCase() === 'a') acc += 1
        return acc
    }, 0), 0) 
  }

  console.log(containsA());