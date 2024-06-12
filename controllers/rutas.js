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
    res.render('form');
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


//descuentos por aportes
// const aportesMonotributista1 = {
//     a,b,c : 3500,
//     d: 4100,
//     h: 4400,
//     f:4900,
//     g:5100,
//     i:6300
// }

// const descuento = (tipo, categoria, aporte, cobertura, plan, coeficiente )=>{
//     console.log(tipo, categoria, aporte, plan, coeficiente)
//     if (tipo=="monotributo"){
//          descuento = aportesMonotributista1[categoria] 
//          return descuento
//     }
//     if(tipo =='sueldo'){
//         tresporcierto = (aporte * 0.03)/3
//         descuento = tresporcierto * cobertura[plan][coeficiente]
//         return descuento
//     }
// }



const coberturasDisponibles = async (req, res) => {
    //valores que vienen del formulario
    let { tipo, edad, edadPareja, hijosMayores, hijosMenores, localidad, tributo, monutributo , sueldoBruto} = req.body

    console.log('***********datos form********************************');
    console.log(tipo, edad, edadPareja, hijosMayores, hijosMenores, localidad, tributo, monutributo , sueldoBruto);

    console.log(edad)
    //localidad

    const localidades = ['ROSARIO', 'FUNES', 'ROLDAN', 'SAN NICOLAS', 'SAN NICOLAS', 'PUEBLO ESTHER', 'GRANADERO BAIGORRIA', 'PEREZ', 'ACEBAL', 'OTRA']

  
    //coberturas para otras localidad por situacion laboral

    const coberturasExternasSueldo = ['Avalian', 'Prevencion Salud', 'Alianza Medica', 'Omint', 'Britanica Salud', 'Britanica', 'Plenit']

    const coberturasExternasParticular = ['Avalian', 'Prevencion Salud', 'Britanica', 'Alianza Medica','Britanica Salud', 'Plenit' ]

    const coberturasMayor60 = ['Britanica Salud', 'Britanica'];

  

    const OTRAS = ['Prevencion Salud', 'Omint' ]
    //****Hijos ****/
    //validacio si es que hay hijos

    if (hijosMayores.every(elemento => elemento === '')) {
        hijosMayores = 0;
    }
    if (hijosMenores.every(elemento => elemento === '')) {
        hijosMenores = 0;
    }

  // Calcula la suma de hijos mayores y menores
    const totalHijos = parseInt(hijosMayores[0]) + parseInt(hijosMenores[0]);

    // Verifica si la suma es mayor a 5
    if (totalHijos > 5) {
        // Si la suma es mayor a 5, renderiza solo el botón de consulta
        return res.render('form', { mostrarBoton: true });
    }
        
    //tipo de individuo

    if(tipo =='mi'){
        tipo = 'Individuo'
    }
    
    edad = parseInt(edad)
    
    if(edadPareja && tipo == 'pareja'){
        edadPareja = parseInt(edadPareja[0]);

    }else{
        edadPareja = parseInt(edadPareja[1]);   
    }
    console.log('form edad pareja', edadPareja)
    
    if(hijosMayores){
        hijosMayores = parseInt(hijosMayores[0]);
    }
    if(hijosMenores){
        hijosMenores = parseInt(hijosMenores[0]);
    }
    //tributo

    // if (tributo ==='monotributo' || tributo === 'sueldo'){
    //     tributo = 'Sueldo'
    // }



    try {

        if(edad >=60){
            
            opcionLocalidad = coberturasMayor60
            sqlQuery = `
            SELECT plan, NombrePlan
            FROM cotizaciones 
            WHERE plan IN (${opcionLocalidad.map(() => '?').join(', ')}) 
            AND ? > Rango_Edad_min
            AND ? <= Rango_Edad
            AND tributo <> 'Particular'`;
        // Parámetros para la consulta SQL
            params = [...opcionLocalidad, edad, edad];

        }
       
        //primer condicionante localidad y sueldo
        if (tributo != 'particular' && edad < 60){
              
    


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
        if (tributo === 'particular' && edad < 60){

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
           const tipoPersona = persona(tipo, hijosMayores, plan, NombrePlan, hijosMenores);

           //agregar la descripcion en funcion del plan
        


           const descripcion = obtenerDescripcion(plan, NombrePlan)
          
           
           // Llama a la función coberturaSeleccionas para obtener los planes seleccionados
           const planes = coberturaSeleccionas(plan, edad, tipoPersona, tributo);
       
           // Llama a la función costo con los parámetros necesarios, incluyendo el resultado de la función persona
           const valorCobertura = await costo(tipoPersona, plan, NombrePlan, edad, edadPareja, hijosMayores, tributo, monutributo, sueldoBruto, hijosMenores);
         
           // Agrega la cobertura propuesta al conjunto CoberturasPropuestasSet
           CoberturasPropuestasSet.add(JSON.stringify({
               plan: plan,
               NombrePlan: NombrePlan,
               descripcion:descripcion,
               valor: valorCobertura,
               edad: edad,
               tipo: tipo,
               tributo: tributo,
               sueldo: sueldoBruto,
               monutributo: monutributo, 
               localidad: localidad, 
               edadPareja: edadPareja,
               hijos: hijosMayores + hijosMenores
           }));
       }
       
       // Convertir el conjunto en un arreglo nuevamente para poder enviarlo como JSON
       const CoberturasPropuestas = Array.from(CoberturasPropuestasSet).map(cobertura => JSON.parse(cobertura));
       
       // Devuelve las coberturas propuestas en formato JSON
       return res.render('form', { CoberturasPropuestas });

    } catch (error) {
        res.status(500).json(error);
    }

}


module.exports ={
    getHome,
    coberturasDisponibles
}
