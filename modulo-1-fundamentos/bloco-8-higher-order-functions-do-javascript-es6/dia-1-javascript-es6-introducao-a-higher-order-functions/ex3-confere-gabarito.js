const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const pontuation = (correctAnswers, answers) => {
    if(correctAnswers === answers) {
        return 1;
    } if(correctAnswers !== answers) {
        return -0,5;
    } if(answers === 'N.A') {
        return 0;
    }
};

const verification = (rightAnswers, studentAnswers, action) => {
    let contador = 0;
    for (let index = 0; index < rightAnswers.length; index += 1) {
        const actionReturn = action(rightAnswers[index], studentAnswers[index]);
        contador += actionReturn;
    }
    return `Resultado final: ${contador} pontos`;
};

console.log(verification(RIGHT_ANSWERS, STUDENT_ANSWERS, pontuation));