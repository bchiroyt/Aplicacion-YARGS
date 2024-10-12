const { crearArchivo } = require('./helpers/multiplicar3.js');



console.clear();    

const base = 2;

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));
6
/**
 * El proyecto porsterio trata de crear documentacion y poder trabajar desde la consola
 * esta aplicacion es decir, por ejemplo en la liena de comando se puede ejecutar
 * node app7 --base=9  limit=12, entonces hara las tablas 
 * del 9 al 12 por ejemplo. tambien se puede usar para saber informacion de la aplicacion
 * por ejemplo se version o banderas que se pueden usar en la aplicacion 
 */
