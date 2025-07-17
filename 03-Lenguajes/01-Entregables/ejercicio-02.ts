console.log("************** DELIVERABLE 02 *********************");

const concat = (a: number[], b: number[]): number[] => {
  return [...a, ...b];
}; // Implementation here.

console.log(concat([1, 2, 3, 4], [5, 6, 7]));

// Opcional

// Implementa una nueva versión de concat donde se acepten múltiples arrays de entrada (más de 2). No utilices el método Array.prototype.concat.

const concatExtended = (...arrays: number[][]): number[] => {
  const arrFinal: number[] = [];

  arrays.forEach((arr) => {
    arrFinal.push(...arr);
  });
  return arrFinal;
};

console.log(concatExtended([1, 2, 3, 4], [5, 6, 7], [8, 9, 10]));
