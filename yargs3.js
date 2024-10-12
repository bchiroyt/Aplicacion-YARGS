const argv = require('yargs')

    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe: 'Hasta donde quiero que la tabla llegue'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('limite', {
        alias: 'lmt',
        type: 'number',
        default: 10,
        describe: 'Hasta donde quiero que todas las tablas lleguen'
    })
    .check((argv, options) => {
        if (isNaN(argv.b) || isNaN(argv.h) || isNaN(argv.limite)) {
            throw 'La base, hasta y limite tienen que ser números';
        }
        return true;
    })
    .argv;

module.exports = argv;