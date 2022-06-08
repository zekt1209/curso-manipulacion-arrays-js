// join
/*
El método join() une todos los elementos de un array en una cadena y 
devuelve esta cadena. 
Podemos pasarle cualquier elemento como separador que deseemos.

el método split() divide un objeto de tipo String en un array de cadenas 
mediante la separación de la cadena en sub-cadenas.
*/

const names = ['Victor','Angel','Fernando','Alex','Juan'];

let rta = '';
const separator = '-';

for (let index = 0; index < names.length; index++) {
    const element = names[index];
    if(index === names.length -1){
        rta = rta + element;
    }else{
        rta = rta + element + separator;
    }
}
console.log('for: ',rta);

const rta2 = names.join('-');
console.log('join: ',rta2);


// split
const string = "Hello word, I am using split";
const arrayOfWords = string.split(' ');
console.log(arrayOfWords);


// RETO - Construye un generador de URL en base a un string

const title = 'Curso de manipulacion de arrays';

const URL = title.split(' ').join('-').toLowerCase();

console.log('URL generada: ', URL);

// RETO - SOLUCION
/*
En este desafío vas a recibir el título de un artículo y tú debes transformarlo en un formato de URL en donde normalmente se transforma todo en minúscula y se cambian los espacios por un guion (-), por ejemplo: Curso de arrays => curso-de-arrays

La solución debería tener un input y output como los siguientes:
*/

function solution(title) {
	const urlFinal = title.split(' ').join('-').toLowerCase(); 
	return urlFinal;
}; 

console.log(solution("La forma de correr Python"));
console.log(solution("La API para nunca parar de aprender"));
console.log(solution("Curso de arrays"));

