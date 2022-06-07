// every
/*
Caso contrario de some, todos los elementos deben cumplir con la condicion
Retorna True o False
*/


// Ejercicio: Si todos los numeros en el array son menores a 40, retornar TRUE.
// En caso de que alguno no sea < 40, se hace false en automatico
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13, 'Hola'];

// For convencional
const rta1 = true;
for (let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    if(element >= 40){
        rta1 = false;
    }
}
console.log('for convencional: ',rta1);


// every
const rta2 = numbers.every(item => item <= 40);
console.log('every: ',rta2);



// RETO - Validar que todos las personas sean menores de 15 años con every
const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];

  const rta3 = team.every(item => item.age <= 15);
  console.log('Todos son menores de 15 años? :', rta3);


