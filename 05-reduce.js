// Reduce no necesariamente devuelve un array, ya depende de su funcion

const numeros = [1,2,3,4,5,6];

const rta = numeros.reduce((sum, item) => sum + item, 0)
console.log('rta: ', rta);


// RETO - SOLUCION

/*
Tienes un array de números y debes retornar la suma de todos los valores en él.

La solución debería tener un input y output como los siguientes:
*/

function solution(numbers) {
	const sumaDeNumeros = numbers.reduce((sumaDeNumeros, item) => sumaDeNumeros + item, 0)
	return sumaDeNumeros;
}; 

console.log(solution([1, 1, 1]));
console.log(solution([2, 4, 8]));