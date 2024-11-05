const _ = require('lodash');
const {  autos, animales } = require('./datos');

// 1. Usando uniq() para obtener un array de elementos únicos desde la variable autos
const autosUnicos = _.uniq(autos);
console.log("\nLista de autos únicos:");
console.log(autosUnicos);

// 2. Usando find() para obtener todos los animales de tipo 'salvaje'
function obtenerTodosLosAnimalesSalvajes(animalesArray) {
    let animalesSalvajes = [];
    let animal;
    let index = 0;

    // Bucle que busca todos los animales salvajes
    while ((animal = _.find(animalesArray, { tipo: 'salvaje', index })) !== undefined) {
        animalesSalvajes.push(animal);
        index++;
    }

    return animalesSalvajes;
}

// Llamar a la función y guardar el resultado
const animalesSalvajes = obtenerTodosLosAnimalesSalvajes(animales);
console.log("\nAnimales de tipo salvaje:");
console.log(animalesSalvajes);
