console.log("************** DELIVERABLE 03 *********************");

function clone(source) {
  return { ...source };
}
const source = { name: "Maria", surname: "Ibañez", country: "SPA" };
console.log(clone(source));

function merge<S extends object, T extends object>(source: S, target: T) {
  return { ...target, ...source };
}

const source1 = { name: "Maria", surname: "Ibañez", country: "SPA" };
const target = { name: "Luisa", age: 31, married: true };

console.log(merge(source1, target));
