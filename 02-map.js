const cars = [
    {name: 'Audi', year: 2004},
    {name: 'Mercedes Benz', year: 2008},
    {name: 'BMW', year: 2010},
];

const carsUpdated = cars.map(
    car => car.name + "++"
);

const carsUpdated2 = cars.map(
    function(car){
        return `++ ${car.name}, ${car.year}`;
    }
)

const carList2 = [];
cars.forEach( function (car, i=1) {
    // var i = 1;
    carList2.push(`${i} ${car.name}, ${car.year}`);
    // i++;
    }
)

console.log(carsUpdated);
console.log(carsUpdated2);
console.log(carList2);