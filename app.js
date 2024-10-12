// console.log('Tabla del 5');

// for (let i = 1; i <= 10; i++) {
//     console.log(`5 x ${i} = ${5 * i}`)
// } 


let base = 99;

const tabla = (base = 1) => {
    let resultado = '';

    for (let i = 1; i <= 10; i++) {
        resultado = resultado + `${base} x ${i} = ${base * i}\n`;
    } 
    return resultado
}

console.log(tabla(base));
console.log(tabla(10));
console.log(tabla(8));
console.log(tabla());