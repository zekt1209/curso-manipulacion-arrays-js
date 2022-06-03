
const peopleA = [
    {'name' : 'Victor',
     'age' : 21,
     'country' : 'MX'},
    {'name' : 'Ernesto',
    'age' : 32,
    'country' : 'MX'},
    {'name' : 'Maria',
    'age' : 27,
    'country' : 'MX'},
    {'name' : 'Jose',
    'age' : 40,
    'country' : 'MX'},
];


// MAP 
// Crea un nuevo arreglo con aplicando la funcion definida
let printArray = peopleA.map(
    function(item){
        //console.log(item);
        return item.name;
    }
);

console.log(printArray);





