let numbers = [1,5,2,3,6,9,50];

function bubbleSort(array){
    let aux = 0;
    for (let i=0; i<array.length; i++){
        for(let j=0; j<array.length; j++){
            if(array[j] > array[j+1]){
                aux = array[j];
                array[j] = array[j+1];
                array[j+1] = aux;
            }
        }
    }
    return array;
}

console.log('Array original', numbers);
bubbleSort(numbers);
console.log('Array ordenado', numbers);