const fs = require('fs');
const colors = require('colors');


const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
    try{
        let salida = '';
        consola = '';
        

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola +- `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
            
        }
        if(listar){
            console.log('========================'.green)
            console.log( 'Tabla del' .green, colors.blue(base));
            console.log('========================'.green)
            console.log(salida);
        }

        fs.writeFileSync(`tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;

    } catch (error) {
        throw error;
    }
}