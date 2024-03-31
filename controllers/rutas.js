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
    let { tipo, edad, edadPareja, hijosMayores, hijosMenores, localidad, tributo } = req.body

    //localidad

    const localidades = ['ROSARIO', 'FUNES', 'ROLDAN', 'SAN NICOLAS', 'SAN NICOLAS', 'PUEBLO ESTHER', 'GRANADERO BAIGORRIA', 'PEREZ', 'ACEBAL', 'OTRA']

    localidad = localidad.toUpperCase();

    //coberturas para otras localidad por situacion laboral

    const coberturasExternasSueldo = ['Avalian', 'Prevencion Salud', 'Britanica Salud', 'Alianza Medica', 'Omint', 'Integral Salud']

    const coberturasExternasParticular = ['Avalian', 'Prevencion Salud', 'Britanica Salud', 'Alianza Medica']

    const OTRAS = ['Avalian', 'Prevencion Salud', 'Omint', 'Alianza Medica' ]
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
        tributo = 'Sueldo'
    }



   
    try {
        console.log(tributo)
        //primer condicionante localidad y sueldo
        if (tributo != 'particular'){
            

            
        console.log(tipo)
            

            opcionLocalidad = localidad==='OTRA' ? OTRAS : coberturasExternasSueldo

            sqlQuery = `
            SELECT plan, NombrePlan 
            FROM cotizaciones 
            WHERE plan IN (${opcionLocalidad.map(() => '?').join(', ')}) 
            AND ? > Rango_Edad_min
            AND ? <= Rango_Edad
            AND Tipo_Individuo = ?
            AND tributo <> 'particular'`;
            
        // Parámetros para la consulta SQL
            params = [...opcionLocalidad, edad, edad, tipo];

            console.log(params)
        }

        //segundo condicionante localidad y particular
        if (tributo === 'particular' && tipo != 'hijos' && tipo !='familia'){

            opcionLocalidad = localidad==='OTRA' ? OTRAS : coberturasExternasParticular

            sqlQuery = `
            SELECT plan, NombrePlan 
            FROM cotizaciones 
            WHERE plan IN (${opcionLocalidad.map(() => '?').join(', ')}) 
            AND ? > Rango_Edad_min
            AND ? <= Rango_Edad
            AND Tipo_Individuo = ?
            AND tributo <> 'Sueldo'`;
        
        // Parámetros para la consulta SQL
            params = [...opcionLocalidad, edad, edad, tipo];
        }

        //condicional 
        const result = await pool.query(sqlQuery, params);
        const coberturas = result[0]
            return res.status(200).json(coberturas);
        
        


    } catch (error) {
        res.status(500).json(error);
    }

}


module.exports ={
    getHome,
    coberturasDisponibles
}