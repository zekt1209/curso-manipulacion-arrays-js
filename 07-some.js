// some
/*
Evaluar si hay algun par en el arreglo de numeros y retornar True si lo hay.
*/

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13, 'Hola'];

const rta = numbers.some(item => item % 2 === 0);
console.log('Respuesta: ', rta);
