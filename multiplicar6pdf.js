const fs = require('fs');
const pdf = require('pdfkit'); 
const path = require('path');

const crearArchivo = async(base = 5, hasta = 10, listar = false, limite = 10) => {
    const doc = new pdf();
    const nombreArchivo = `tablas-del-${base}-al-${hasta}-limite-${limite}.pdf`;
    const salida = path.join(__dirname, '../salida', nombreArchivo);

    doc.pipe(fs.createWriteStream(salida));

    
    for (let i = base; i <= hasta; i++) {
        doc.fontSize(16).text(`Tabla del ${i}:`, { underline: true });
        for (let j = 1; j <= limite; j++) {
            doc.text(`${i} x ${j} = ${i * j}`);
        }
        doc.moveDown(1); 
    }

    doc.end();

    if (listar) {
        console.log(`Archivo PDF creado: ${nombreArchivo}`);
    }

    return nombreArchivo;
}

module.exports = {
    crearArchivo
}