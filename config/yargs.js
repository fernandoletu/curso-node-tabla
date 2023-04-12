//Configuración Yargs
const argv = require('yargs')
    .option('b', {  //Configuración de parámetros
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,  //Si es obligatorio
        default: false,  //Valor por defecto
        describe: 'Muestra la tabla en consola'
    })
    .check((argv, options) => {  //Validación de parámetros
        if(isNaN(argv.b)){
            throw 'La base debe ser un número entero'
        }

        return true
    })
    .argv

module.exports = argv