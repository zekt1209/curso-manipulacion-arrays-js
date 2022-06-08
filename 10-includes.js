// El método includes() determina si una array incluye un 
// determinado elemento, devuelve true o false según corresponda.

// Includes no recibe un arrow function, simplemente recibe el elemento que estamos buscando

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13, 'Hola'];

// for
let includedInArray = false;
for (let i=0; i<numbers.length; i++){
    let element = numbers[i];
    if(element === 2){
        includedInArray = true;
        break;
    }
}
console.log('for: ', includedInArray);

// includes
const rta2 = numeros.includes(2);
console.log('includes: ',rta2);