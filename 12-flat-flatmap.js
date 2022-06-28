// flat - flatmap

/*
flatMap() es un método que primero mapea cada elemento, 
y después aplana el resultado en un nuevo array.


*/

const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
  ]
  
  const arrayFlatted = users.flat();
  