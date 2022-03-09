const newEmployees = () => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  const createEmail = (name) => {
    const lowerCase = name.toLowerCase();
    const emailReplace = lowerCase.replace(/ /g, '_');
    return { name, email: `${emailReplace}@trybe.com`};
  };

  let resultCreate = createEmail('Pedro Guerra');
  console.log(resultCreate);