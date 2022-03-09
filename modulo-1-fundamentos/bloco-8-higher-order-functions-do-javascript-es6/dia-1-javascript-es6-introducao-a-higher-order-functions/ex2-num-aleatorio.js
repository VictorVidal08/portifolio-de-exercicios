const numberGenerator = () => {
    return Math.floor(Math.random() * 5);
  }
  
  // console.log(numberGenerator());

  const prizeCheck = (number, numberGenerator) => {
      if(numberGenerator === number) {
          return "Parabéns, você ganhou!!!"
      }
      else {
          return "Tente novamente"
      }
  };

  console.log(prizeCheck(2, numberGenerator()));