const fs = require('fs')

const crearArchivo = async (base = 5, listar = true) => {
    try {
        let salida = ''

        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`
        }

        if (listar) {
            console.log('*************************')
            console.log(`    Tabla del ${base}`)
            console.log('*************************')
            console.log(salida)
        }

        let nombreArchivo = `./salida/tabla-${base}.txt`
        fs.writeFileSync(nombreArchivo, salida)

        return nombreArchivo
    }catch (error) {
        throw error
    }
}

//Lo que se exporta va aquí
module.exports = {
    crearArchivo
    //Lo de arriba es lo mismo que escribir
    //crearArchivo: crearArchivo
}