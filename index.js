const _ = require('lodash');
const {  autos, animales } = require('./datos');

// 1. Usando uniq() para obtener un array de elementos únicos desde la variable autos
const autosUnicos = _.uniq(autos);
console.log("\nLista de autos únicos:");
console.log(autosUnicos);

// 2. Usando find() para obtener el primer animal de tipo 'salvaje'
const animalSalvaje = _.find(animales, { tipo: 'salvaje' });
console.log("\nPrimer animal de tipo salvaje:");
console.log(animalSalvaje);

const animalSalvaje2 = _.find(animales, { tipo: 'salvaje' });
console.log("\nPrimer animal de tipo salvaje:");
console.log(animalSalvaje2);