// some
/*
Devuelve true o false si alguno coincide.

Evaluar si hay algun par en el arreglo de numeros y retornar True si lo hay.
*/

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13, 'Hola'];

let rta = false;

for (let i = 0; i <numbers.length; i++){
    const element = numbers[i];
    if(element % 2 === 0){
        rta = true;
        break;
    }
}

const rta2 = numbers.some(item => item % 2 === 0);
console.log('Respuesta: ', rta2);
