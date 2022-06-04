const cars = [
    {name: 'Audi', year: 2004},
    {name: 'Mercedes Benz', year: 2008},
    {name: 'BMW', year: 2010},
];


// Crea un nuevo arreglo con ciertos datos de nuestro arreglo de objetos
console.log('Original', cars)
const rta = cars.map(item => item.year);
console.log("rta", rta);

// Crea un nuevo arreglo, agregando un nuevo atributo a cada objeto
// Modificando el arreglo original
const rta2 = cars.map(item => {
    item.tax = 0.19;
    return item;
});

console.log("rta2", rta2);
console.log("Original", cars);

// Crea un nuevo array, agregando un nuevo atributo al objeto
// Respetando el array original
const rta3 = cars.map(item => {
    return {
        ...item,
        tax: .19,
    };
});

console.log("rta3", rta3);
console.log("Original", cars);


// RETO - SOLUCION
function solution(array) {
    const arrayWithTaxes = array.map(item => {
        return {
            ...item,
            taxes: parseInt(item.price * .19),
        }
    })
    return arrayWithTaxes;
}; 

console.log(solution([
    {
        name: "Product 1",
        price: 1000,
        stock: 10
    },
    {
        name: "Product 2",
        price: 2000,
        stock: 20
    },
])
); 
