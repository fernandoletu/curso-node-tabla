const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('yargs')
    .option('b', {  //Configuración de parámetros
        alias: 'base',
        type: 'number',
        demandOption: true
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,  //Si es obligatorio
        default: false  //Valor por defecto
    })
    .check((argv, options) => {  //Validación de parámetros
        if(isNaN(argv.b)){
            throw 'La base debe ser un número entero'
        }

        return true
    })
    .argv

console.clear()

//Extacción de parámetros sin usar Yargs
//Desestructuro ignorando 2 primero argumentos y tomando el tercero
//const [, , arg3 = 'base=5'] = process.argv
//const [, base = 5] = arg3.split('=')

//Extacción de parámetros usando Yargs
//Lo que tiene Yargs como argumentos
//console.log(argv)
//Extraer argumento 'base'
//console.log('base: yargs', argv.b)

//Extra parámetros, previamente los valida con Yargs
let base = argv.b
let listar = argv.l

crearArchivo(base, listar)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))

//Se ejecuta así
//node 5_importar_archivos_args --base=3 --listar=true
//o usando el alias
//node 5_importar_archivos_args --b=5 --l=true