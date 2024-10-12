const { crearArchivo } = require('./helpers/multiplicar6pdf');
const argv = require('./config/yargs3'); 

console.clear();

console.log(argv);


crearArchivo(argv.b, argv.h, argv.l, argv.limite)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));