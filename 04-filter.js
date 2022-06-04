const people = [
    {name: 'Agustin', age: 17},
    {name: 'Maria', age: 15},
    {name: 'Rebeca', age: 24},
    {name: 'Martin', age: 20},
    {name: 'Victor', age: 21},
];

// Filtra personas Mayores de edad

const adultPeople = people.filter(item => item.age >= 18);
console.log("Mayores de 18 años: ", adultPeople); 
console.log("Todos: ", people); 

// Buscador por nombre

const search = (querie) => {
    return people.filter(item => {
        return item.name.includes(querie);
    })
}

console.log(search('Vic'));

// RETO - SOLUCION
/*
Tienes un array con palabras, tu desafío es retornar un array solo con las que cumplan con la condición de tener 4 o más letras.

La solución debería tener un input y output como los siguientes:

Input
solution(['amor', 'sol', 'piedra', 'día']);

Output
[ 'amor', 'piedra' ]
*/

function solution(array) {
	const moreThan4Letters = array.filter(item => item.length >= 4)
	 return moreThan4Letters
};

//function solution(array) {return array.filter(item => item.length >= 4)}; 

console.log(solution(['amor', 'sol', 'piedra', 'día']));