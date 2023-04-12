const { crearArchivo } = require('./helpers/multiplicar')
const argv= require('./config/yargs')  //Importa yargs con la configuración definida en el otro archivo

console.clear()

//Extra parámetros, previamente los valida con Yargs en archivo yargs.js dentro de carpeta config
let base = argv.b
let listar = argv.l

crearArchivo(base, listar)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))

//Se ejecuta así
//node 6_importar_archivos_args_yarg --base=3 --listar=true
//o usando el alias
//node 6_importar_archivos_args_yarg --b=5 --l=true

//Si se usa --help se obtendrá la descripción de cada parámetro indicada en la configuración de yargs con el atributo
// 'description'
//node 6_importar_archivos_args_yarg --help