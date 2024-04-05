const pool = require('../database');
const { persona,
    costo,
    encontrarNumeroMasGrande,
     aportesMonotributista } = require('./TipoyValor');

const coberturaSeleccionas = async(plan, edad, tipo, tributo)=>{

   
    
        queryGeneral = ` SELECT plan, NombrePlan 
        FROM cotizaciones 
        WHERE plan = ? 
        AND ? > Rango_Edad_min
        AND ? <= Rango_Edad
        AND Tipo_Individuo = ?
        AND (tributo = ? OR tributo = 'todos')`;
        
        //const aportes = aportesMonotributista (tipoMonutributo)
    
        try {
            params = [plan,edad, edad, tipo,tributo]
        
            const planes = await pool.query(queryGeneral, params)
            
    
        
            return planes;
        
       
        } catch (error) {
            console.log(error)
            res.json(error);
        }
      
    
    
    
    }

    module.exports={
        coberturaSeleccionas
    }