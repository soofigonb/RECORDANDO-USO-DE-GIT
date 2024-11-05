const {autos,animales} = require ('./datos');

console.log("\nLista de autos:");
console.log(autos);

console.log("\nLista de animales:");
console.log(animales);

console.log('-----------------');

const _ = require('lodash');
const {  autos, animales } = require('./datos');

// Usando uniq() para eliminar duplicados en la lista de autos
const autosUnicos = _.uniq(autos);
console.log("\nLista de autos únicos:");
console.log(autosUnicos);

// Usando find() para buscar un animal específico
const animalBuscado = _.find(animales, { nombre: 'elvis' });
console.log("\nAnimal buscado:");
console.log(animalBuscado);
