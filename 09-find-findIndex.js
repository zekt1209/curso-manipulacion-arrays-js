// find - Solo va a traer el elemento que haga match con las condiciones

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13, 'Hola'];

const rta1 = undefined;
for(let i = 0; i<=numbers.length; i++){
    const element = numbers[i];
    if(element === 13){
        rta = element;
        break;
    }
}
console.log('for', rta1);

const rta2 = numbers.find(item => item === 30);
console.log('find', rta2); 

const rta3 = numbers.findIndex(item => item == 2);
console.log('findIndex',rta3);