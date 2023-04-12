const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('yargs').argv

console.clear()

//Extacción de parámetros usando Yargs
//Lo que tiene Yargs como argumentos
console.log(argv)
//Extraer argumento 'base'
console.log('base: yargs', argv.base)

//Desestructuro ignorando 2 primero argumentos y tomando el tercero
/*
const [, , arg3 = 'base=5'] = process.argv
const [, base = 5] = arg3.split('=')

//Se deberían implementar reglas de validación de parámetros, ej. usar Yargs

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))
*/

//Se ejecuta así
//node 4_importar_archivos_args --base=3