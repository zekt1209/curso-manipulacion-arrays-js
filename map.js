const cars = [
    {name: 'Audi', year: 2004},
    {name: 'Mercedes Benz', year: 2008},
    {name: 'BMW', year: 2010},
];

const carsUpdated = cars.map(
    car => car.name + "++"
);

console.log(carsUpdated);