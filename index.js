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

// 3. Usando filter() para obtener todos los animales de tipo 'salvaje'
const animalesSalvajes = _.filter(animales, { tipo: 'salvaje' });

// Mostrar el segundo animal salvaje
const segundoAnimalSalvaje = animalesSalvajes[1]; 
console.log("\nSegundo animal de tipo salvaje:");
console.log(segundoAnimalSalvaje);