// Este archivo contiene la función que se encarga de generar la tabla de multiplicar
const fs = require('fs');


/**
 * Se utiliza el modulo.exports para exportar la función tabla
 * se exporta creacicon archivo hasta al final de este archivo 
 */

// Funcion que tiene como objetivo crear la de ka vase sugerida y 
//por defecto imprimira y generara la tabla del 5, si no se le pasa un valor

const crearArchivo = (base = 5) => {


    console.log('========================')
    console.log( `  Tabla del ${base}    `)
    console.log('========================')

    let salida = '';

    for (let i = 1; i <= 10; i++) {
        salida += `${base} x ${i} = ${base * i}\n`;
    }

    console.log(salida);

    fs.writeFileSync(`tabla-${base}.txt`, salida)

    console.log(`tabla-${base}.txt creadoc`);
}


module.exports = {
    crearArchivo
}