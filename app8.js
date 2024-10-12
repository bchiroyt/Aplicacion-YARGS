//Ejercicio - craer una tabla desde linea de comando
//ejemplo escribir en la linea de comando node app8 --base=19

const { crearArchivo } = require('./helpers/multiplicar3');

console.clear();

//captura el 3 argumento de la linea de comando
const[, , arg3='base=5'] = process.argv;
const [, base=5] = arg3.split('=');



crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));