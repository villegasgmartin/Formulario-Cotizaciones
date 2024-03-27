const { response } = require('express');
const bcrypt = require('bcryptjs');
const pool = require('../database');

const getHome = (req, res=response) => {
    console.log('hola mundo');
}


//*********tipo de grupo familiar*****************// 
    //mi=== solo
    // pareja == 2 adultos
    // hijos == hijos y un adulto
    // familia == 2 padres e hijos

//*** tipos de relaciones laboral en HTML */

//particular = Particular
//monotributo = Monotributista
//sueldo = En relacion de dependecia

//** tipos de relaciones labolares en BD valores */
//particular = Particular
//sueldo = En relacion de dependecia  y Monotributista

const coberturasDisponibles = async (req, res) => {
    //valores que vienen del formulario
    let { tipo, edad, hijosMayores, hijosMenores, localidad, tributo } = req.body

    //localidad

    const localidades = ['ROSARIO', 'FUNES', 'ROLDAN', 'SAN NICOLAS', 'SAN NICOLAS', 'PUEBLO ESTHER', 'GRANADERO BAIGORRIA', 'PEREZ', 'ACEBAL', 'OTRA']

    localidad = localidad.toUpperCase();

    //coberturas para otras localidad por situacion laboral

    const coberturasExternasSueldo = ['Avalian', 'Prevencion Salud', 'Britanica Salud', 'Alianza Medica', 'Omint', 'Integral Salud']

    const coberturasExternasParticular = ['Avalian', 'Prevencion Salud', 'Britanica Salud', 'Alianza Medica']

    //****Hijos ****/
    //validacio si es que hay hijos

    if(!hijosMayores){
        hijosMayores = 0
    }
    if(!hijosMenores){
        hijosMenores = 0
    }


    //tipo de individuo

    if(tipo =='mi'){
        tipo = 'Individuo'
    }


    //tributo

    if (tributo ==='monotributo' || tributo === 'sueldo'){
        tributo === 'sueldo'
    }

    //tributo
    try {
        if (tributo === 'sueldo' && localidad == 'OTRA' && tipo != 'hijos' && tipo !='familia'){

            const sqlQuery = `
            SELECT * 
            FROM cotizaciones 
            WHERE plan IN (${coberturasExternasSueldo.map(() => '?').join(', ')}) 
            AND ? > Rango_Edad_min
            AND ? <= Rango_Edad
            AND Tipo_Individuo = ?
            ${coberturasExternasSueldo.includes(tributo) ? 'AND tributo = ?' : ''}`;
        
        // Parámetros para la consulta SQL
        const params = [...coberturasExternasSueldo, edad, edad, tipo, tributo];
        
        const result = await pool.query(sqlQuery, params);
            return res.status(200).json(result);
        }
    } catch (error) {
        res.status(500).json(error);
    }

}


module.exports ={
    getHome,
    coberturasDisponibles
}