var fibonacci = [];

fibonacci[0] = 0;
fibonacci[1] = 1;

for (var i = 2; i<5; i++){
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
};

console.log(fibonacci);

function fibonacci(number){
    var fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;

    for (var i = 2; i < number; i++){
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }

    return fibonacci;
};

var f = fibonacci(10);
console.log(f);

