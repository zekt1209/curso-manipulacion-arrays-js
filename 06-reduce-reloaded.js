const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13, 'Hola'];

const rta = numeros.reduce((obj, item) => {
    // Codigo
    if(!obj[item]){
        obj[item] = 1;
    }else{
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rta);



const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
  ];

  const levelsCounter = data.map(item => item.level).reduce((obj, item) => {
    if (!obj[item]){
        obj[item] = 1;
    }else{
        obj[item] = obj[item] + 1;
    }
    return obj;
  }, {});

  console.log(levelsCounter);


// RETO - SOLUCION

/*
Hacer un contador de cuantos numeros se encuentran en cierto rango de numeros, basandonos en un array de numeros
*/ 

const ranges = ['1 - 5','6 - 8','9 - 10'];

  const rangeOfNumbers = numeros.reduce((obj, item) => {
      if(item >= 1 && item <= 5){
           !obj[ranges[0]] ? obj[ranges[0]] = 1 : obj[ranges[0]] = obj[ranges[0]] + 1;
      } else if (item >= 6 && item <= 8){
          !obj[ranges[1]] ? obj[ranges[1]] = 1 : obj[ranges[1]] = obj[ranges[1]] + 1;
      } else if (item >= 9 && item <= 10){
          !obj[ranges[2]] ? obj[ranges[2]] = 1 : obj[ranges[2]] = obj[ranges[2]] + 1;
      }
      return obj;
  },{});

  console.log(rangeOfNumbers);

  