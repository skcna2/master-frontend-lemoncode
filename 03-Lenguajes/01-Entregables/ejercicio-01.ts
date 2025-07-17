console.log("************** DELIVERABLE 01 *********************");

// 1. Array operations
// Head
// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

const head = (arr: number[]): number => {
  const [first] = arr;
  return first;
}; // Implementation here.

head([1, 2, 3, 4]);

// Tail
// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = ([, ...rest]: number[]): number[] => {
  return rest;
}; // Implementation here.

console.log(tail([1, 2, 3, 4]));

// Init

// Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

const init = (arr: number[]): number[] => {
  return arr.slice(0, -1);
}; // Implementation here.

console.log(init([1, 2, 3, 4]));
