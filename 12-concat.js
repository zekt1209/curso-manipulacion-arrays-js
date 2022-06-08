// concat
/*

Es inmutable

Genera un nuevo array concatendo los 2 arrays que se le indiquen

*/ 

const names = ['Victor','Angel','Fernando','Alex','Juan'];
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];

// for
const newArray = [...numbers]; // Copiar todos los elementos de un array sin la referencia en memoria
for (let index = 0; index < names.length; index++) {
    const element = array[index];
    newArray.push(element);
}


// concat
const arrayConcatenado = numbers.concat(names);
console.log('Array concatenado concat: ', arrayConcatenado);


// Spread operation
const spreadConcatenation = [...numbers, ...names];
console.log('Array concatenado spread operation: ', arrayConcatenado);


// Modificar array original
numbers.push(...names);
console.log('Array original concatenado: ', numbers);


