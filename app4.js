/**
 * Ejecicio para separa la logica de la aplicacion con
 * el archivo principal
 * 
 * aca se manda a llamar la destructuracion de multiplicar.js
 * que ahora ya tienen permiso pra import crearArchivo
 */

const { crearArchivo } = require('./helpers/multiplicar');

/**
 * se crear la carpeta helpers para crear toda la logica de la aplicacion dentro 
 * de el archivo multiplicar.js
 */


console.clear();

const base = 1;

crearArchivo(base);
