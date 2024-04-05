const { response } = require('express');
const bcrypt = require('bcryptjs');
const pool = require('../database');
const { persona,
        costo,
        encontrarNumeroMasGrande,
         aportesMonotributista } = require('../middlewares/TipoyValor');
const {
    coberturaSeleccionas
} = require('../middlewares/coberturas');

const {obtenerDescripcion} = require('../helpers/descripciones');
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
    let { tipo, edad, edadPareja, hijosMayores, hijosMenores, localidad, tributo, monutributo } = req.body

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
            AND tributo <> 'Particular'`;
        // Parámetros para la consulta SQL
        params = [...opcionLocalidad, edad, edad];
      

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
            AND tributo <> 'Sueldo'`;
        
        // Parámetros para la consulta SQL
            params = [...opcionLocalidad, edad, edad];
        }

        //condicional 
        const result = await pool.query(sqlQuery, params);
        const coberturas = result[0]
    
       const CoberturasPropuestasSet = new Set();

       for (let i = 0; i < coberturas.length; i++) {
           let cantidad = 0;
           let descuento = 0;
       
           if (!edadPareja) {
               edadPareja = 0;
           }
       
           const cobertura = coberturas[i];
           const { plan, NombrePlan } = cobertura;
       
           // Llama a la función persona con los parámetros necesarios
           const tipoPersona = persona(tipo, hijosMayores, plan, NombrePlan);

           //agregar la descripcion en funcion del plan
        


           const descripcion = obtenerDescripcion(plan, NombrePlan)
          console.log('paso1', descripcion)
           
           // Llama a la función coberturaSeleccionas para obtener los planes seleccionados
           const planes = coberturaSeleccionas(plan, edad, tipoPersona, tributo);
       
           // Llama a la función costo con los parámetros necesarios, incluyendo el resultado de la función persona
           const valorCobertura = await costo(tipoPersona, plan, NombrePlan, edad, edadPareja, hijosMayores, tributo);
         
           // Agrega la cobertura propuesta al conjunto CoberturasPropuestasSet
           CoberturasPropuestasSet.add(JSON.stringify({
               plan: plan,
               NombrePlan: NombrePlan,
               descripcion:descripcion,
               valor: valorCobertura,

           }));
       }
       
       // Convertir el conjunto en un arreglo nuevamente para poder enviarlo como JSON
       const CoberturasPropuestas = Array.from(CoberturasPropuestasSet).map(cobertura => JSON.parse(cobertura));
       
       // Devuelve las coberturas propuestas en formato JSON
       return res.status(200).json(CoberturasPropuestas);

    } catch (error) {
        res.status(500).json(error);
    }

}


module.exports ={
    getHome,
    coberturasDisponibles
}