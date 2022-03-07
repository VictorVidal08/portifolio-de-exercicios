const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const modifyLessons2 = (obj, key, value) => {
    obj[key] = value;
  };

  modifyLessons2(lesson2, 'turno', 'noite');

  console.log(lesson2.turno);

  const listKeys = (obj) => {
      
  }