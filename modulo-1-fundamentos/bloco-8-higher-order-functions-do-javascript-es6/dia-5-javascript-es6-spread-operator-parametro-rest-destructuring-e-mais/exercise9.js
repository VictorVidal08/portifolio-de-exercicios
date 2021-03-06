// A partir deste objeto, desestruture as 
// estações do ano e espalhe-as em um array de meses do ano.

// Dica : use object destructuring e spread operator .

const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
  };

  const {spring, summer, autumn, winter} = yearSeasons;

  const monthsOfYear = [...spring, ...summer, ...autumn, ...winter];

  console.log(monthsOfYear);