const pool = require('../database');

//selector de tipo de individuo, cada uno tiene una logica distinta al tener formas distintas de calculos

//coberturas

//Integral Salud ------------ individio+NumeroHijo / pareja+NumeroHijo
//Prevencion Salud ------------ individio+NumeroHijo / pareja+NumeroHijo
//OMint ----------------- HijoMayor / multiplar por cadidad de hijo // valor de cada individuo
//Britanica Salud --- valor por un solo hijo y valor a parti de 2 // valor de matrimonio
//Avalian --- valor por un solo hijo y valor 2 hijos y valor por el resto //valor de cada individuo
//Alianza ---- HijoMayor / multiplar por cadidad de hijo // valor de cada individuo





const persona = (tipo, hijosMayores, plan, NombrePlan, hijosMenores) =>{

    const hijosTotales = hijosMayores + hijosMenores
    if(hijosTotales>5){
            hijosTotales = 5;
    }

    if((NombrePlan =='Pulso' || NombrePlan=='BS A Mayor') && hijosTotales==0 ){
        console.log(tipo, hijosMayores, plan, NombrePlan, hijosMenores, hijosTotales)
        tipo = 'Individuo';
        return tipo
    }
    if(tipo =='pareja'  || tipo =='familia' && hijosTotales==0){
        switch (plan) {
            case 'OMINT':
                    tipo = 'Individuo';
                break;
            case 'Avalian':
                tipo = 'Individuo';
                break;
            case 'Alianza Medica':
                tipo = 'Individuo';
                break;
  
            default: 
            tipo ='Pareja';
                break;
        }

        return tipo
    }
   
    if(tipo =='pareja' || tipo =='familia' && hijosTotales>0){
        
        switch (plan) {
            case 'Integral Salud':
                    tipo = `pareja+${hijosTotales}Hijo`;
                break;
            case 'Prevencion Salud':
                    tipo = `pareja+${hijosTotales}Hijo`;
                break;
            case 'Britanica Salud':
                tipo = `pareja`;
                break;
            case 'Britanica':
                tipo = `pareja`;
            break;
  
            default: 
            tipo ='Individuo';
                break;
        }

        return tipo
   }
   if(tipo =='hijos' && hijosTotales>0){
        
    switch (plan) {
        case 'Integral Salud':
                tipo = `Individuo+${hijosTotales}Hijo`;
            break;
        case 'Prevencion Salud':
                tipo = `Individuo+${hijosTotales}Hijo`;
            break;
 
        default: 
        tipo='Individuo';
            break;
    }

    return tipo
}
if(tipo =='hijos' && hijosTotales==0){
tipo = `Individuo`;
return tipo
}
else{
tipo = 'Individuo';
}


return tipo;
}

//descuentos y forma de calculo


//Integral Salud ------------ Sueldo*0.03/3*7.09 ---- sin descuentos 

//Prevencion Salud ------------ precio segun edad persona y hijo // familia o pareja, se toma el valor de la persona mas grande  -----50% descuento

//OMint ----------------- precio segun edad persona y hijo // familia o pareja, precio segun edad de cada una mas hijos  -----15% descuento

//Britanica Salud --- precio segun edad persona y hijo // familia o pareja, se toma el valor de la persona mas grande  ----- planBS100 35% / planBS180 25% // plan pulso 25% // BSA Mayor 10%

//Avalian --- precio segun edad persona y hijo // familia o pareja, precio segun edad de cada una mas hijos  -----45% descuento

//Alianza ---- precio segun edad persona y hijo // familia o pareja, precio segun edad de cada una mas hijos  -----0% descuento


///aportes monutributo

//CATEGORIAS A,B,C	APORTES: *$3500 X PERSONA
//CATEGORIA D		APORTES: *$4100 X PERSONA
//CATEGORIA H		APORTES: *$4400 X PERSONA
//CATEGORIA F		APORTES: *$4900 X PERSONA
//CATEGORIA G		APORTES: *$5100 X PERSONA
//CATEGORIA H		APORTES: *$6300 X PERSONA

function aportesMonotributista (monutributo){
    switch (monutributo) {
        case 'Categorias A,B,C':
            descuento = 10500
            break;
        case 'Categorias D':
                descuento = 12000
            break;
        case 'Categorias E':
                descuento = 18000
            break;
        case 'Categorias H':
                descuento = 28000
            break;
        case 'Categorias F':
                descuento = 20000
            break;
        case 'Categorias G':
            descuento = 21000
                break;
        case 'Categorias I':
            descuento = 34000
                break;
        case 'Categorias J':
            descuento = 39000
                break;
        case 'Categorias K':
            descuento = 45000
            break;
        case 'vacio':
            descuento = 0
                break;
        default: 
            descuento = 0;
            break;
    }
    return descuento

}
function aportesSueldoBruto (SueldoBruto, plan){
    
    switch (plan) {
        case 'Integral Salud':
            descuentoSueldo = SueldoBruto * 0.0709
            break;
        case 'Alianza Medica':
            descuentoSueldo = SueldoBruto * 0.0709
            break;
        case 'Prevencion Salud':
            descuentoSueldo = SueldoBruto * 0.065
            break;
        case 'OMINT':
            descuentoSueldo = SueldoBruto * 0.065
            break;
        case 'Britanica Salud':
            descuentoSueldo = SueldoBruto * 0.0705
                break;
        case 'Britanica':
            descuentoSueldo = SueldoBruto * 0.0705
                break;
        case 'Avalian':
            descuentoSueldo = SueldoBruto * 0.065
                break;
        case 'PLenit':
            descuentoSueldo = SueldoBruto * 0.0685
            break;
        default:
            break;

    }
    

    return descuentoSueldo

}


//descuentos de britanica
function descuentosBritanica (NombrePlan, edad){
    switch (NombrePlan) {
        case 'BS100':
            if(edad >= 18 && edad <= 44){
                bonificacion = 0.65
            }
            if(edad >= 45 && edad <= 64){
                bonificacion = 0.75
            }
            if(edad >= 65){
                bonificacion = 0.9
            }
            break;
        case 'BS180':
            if(edad >= 18 && edad <= 44){
                bonificacion = 0.75
            }
            if(edad >= 45 && edad <= 64){
                bonificacion = 0.85
            }
            if(edad >= 65){
                bonificacion = 0.9
            }
            break;
        case 'Pulso':
            bonificacion = 0.75
            break;
        case 'BS A Mayor':
            bonificacion = 0.9
            break;

        default:
            break;
    }
    return bonificacion
}


function encontrarNumeroMasGrande(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

const costo = async(tipo, plan, NombrePlan, edad, edadPareja, hijosMayores, tributo, tipoMonutributo, sueldoBruto, hijosMenores)=>{

console.log(tipo)

    queryGeneral = `SELECT Cotizacion FROM cotizaciones 
    WHERE plan = ?
    AND NombrePlan = ?
    AND ? > Rango_Edad_min
    AND ? <= Rango_Edad
    AND Tipo_Individuo = ?
    AND (tributo = ? OR tributo = 'todos')`;
    
    //const aportes = aportesMonotributista (tipoMonutributo)

    try {
         //plan=='Integral Salud'**********************
    
    if(plan=='Integral Salud'){

        return 'Consultar Valor'

        if (tributo ==='monotributo' || tributo === 'sueldo'){
                tributo = 'Sueldo'
        }
 
        params = [plan, NombrePlan,edad, edad, tipo,tributo]
        
        const valorIncial = await pool.query(queryGeneral, params)
        
        price = parseFloat(valorIncial[0][0].Cotizacion);
     
        if(tipoMonutributo){
            descuento = aportesMonotributista(tipoMonutributo)
        }else{
            descuento = 0
        }
        if(sueldoBruto){
            descuentoSueldo = aportesSueldoBruto(sueldoBruto, plan)
        }else{
            descuentoSueldo = 0
        }

        // return Math.round(price - descuento - descuentoSueldo)
        return 'Consultar Valor'
    }
    //plan=='Prevencion Salud'*********************
    if(plan=='Prevencion Salud'){

        
     
        if (tributo ==='monotributo' || tributo === 'sueldo'){
            tributo = 'Sueldo'
         }


        const maximo = Math.max(edad, edadPareja);

        params = [plan, NombrePlan,maximo, maximo, tipo,tributo]

        const valorIncial = await pool.query(queryGeneral, params)
        console.log(valorIncial, params);
        price = parseFloat(valorIncial[0][0].Cotizacion);
       
        if(tipoMonutributo){
            descuento = aportesMonotributista(tipoMonutributo)
        }else{
            descuento = 0
        }

        if(sueldoBruto){
            descuentoSueldo = aportesSueldoBruto(sueldoBruto, plan)
        }else{
            descuentoSueldo = 0
        }

        let costo = price - descuento - descuentoSueldo
        return "$" + Math.round(costo)
        
    }
    //plan=='OMINT'*********************
    if(plan=='OMINT'){

       let hijosOmint = hijosMayores + hijosMenores;
    
        if (tributo ==='monotributo' || tributo === 'sueldo'){
            tributo = 'Sueldo'
         }
        params1 = [plan, NombrePlan,edad, edad, tipo,tributo]
     

        const valorIncial1 = await pool.query(queryGeneral, params1)
       
        price1 = parseFloat(valorIncial1[0][0].Cotizacion);
        

        if(edadPareja>0){
            params2 = [plan, NombrePlan,edadPareja, edadPareja, tipo,tributo]


            const valorIncial2 = await pool.query(queryGeneral, params2)
            price2 = parseFloat(valorIncial2[0][0].Cotizacion);
        }else{
            price2=0
        }
       

        if(hijosOmint==1){

            params3 = [plan, NombrePlan,21, 21, 'Hijo',tributo]
            

            const valorIncial3 = await pool.query(queryGeneral, params3)
           
           price3 = parseFloat(valorIncial3[0][0].Cotizacion);
        }else{
            price3=0
        }
        if(hijosOmint>=2){

            params4 = [plan, NombrePlan,20, 20, 'Hijos',tributo]
            

            const valorIncial4 = await pool.query(queryGeneral, params4)
           
           price4 = parseFloat(valorIncial4[0][0].Cotizacion);
        }else{
            price4=0
        }

      
        
        let price = price1 + price2 + price3 + price4*(hijosOmint-1)  
        


        
        if(tipoMonutributo){
            descuento = aportesMonotributista(tipoMonutributo)
        }else{
            descuento = 0
        }

        if(sueldoBruto){
            descuentoSueldo = aportesSueldoBruto(sueldoBruto, plan)
        }else{
            descuentoSueldo = 0
        }
        let costo = price - descuento- descuentoSueldo
     
        return "$" + Math.round(costo)
        // return 'Consultar Valor'
    }
    //plan=='Britanica Salud'*********************
    if(plan == 'Britanica Salud' || plan == 'Britanica'){

        if (tributo ==='monotributo' || tributo === 'sueldo'){
            tributo = 'Sueldo'
         }

        const hijosTotalesBritanica = hijosMayores + hijosMenores

        if(tipo == 'Individuo'){
            params = [plan, NombrePlan,edad, edad, tipo,tributo]
            console.log(params, 'britanica');
            const valorIncial4 = await pool.query(queryGeneral, params)
            price4 = parseFloat(valorIncial4[0][0].Cotizacion) || 0;
        }else{
            price4 = 0
        }
        if(tipo != 'Individuo'){
            if((NombrePlan !== 'Pulso' && NombrePlan !== 'BS A Mayor') && !edadPareja){
               
                params = [plan, NombrePlan,edad, edad, tipo,tributo]
               
                const valorIncial0 = await pool.query(queryGeneral, params)
              
                price0 = parseFloat(valorIncial0[0][0].Cotizacion);
               
            
                }else{
                    price0 = 0
                }
            }else{
                    price0 = 0
                }

            if(edadPareja){
                    edadCotizada = encontrarNumeroMasGrande(edad, edadPareja)

            }else{
                   edadCotizada = edad;
            }
       
    
            if((NombrePlan !== 'Pulso' && NombrePlan !== 'BS A Mayor') && edadPareja>0){
                
                params = [plan, NombrePlan,edadCotizada, edadCotizada, tipo,tributo]
                const valorIncial1 = await pool.query(queryGeneral, params)
                pricePareja = parseFloat(valorIncial1[0][0].Cotizacion);
               
                paramsIndividuo = [plan, NombrePlan,edadCotizada, edadCotizada, 'Individuo',tributo]
                const valorIncial2 = await pool.query(queryGeneral, paramsIndividuo);
                priceIndividuo = parseFloat(valorIncial2[0][0].Cotizacion);
                
                price1 = pricePareja + priceIndividuo;
            }else{
                price1 =0
            }
    
          
    
            if( (NombrePlan !== 'Pulso' && NombrePlan !== 'BS A Mayor') && hijosTotalesBritanica>=1){
    
                
                params = [plan, NombrePlan,21, 21, '1Hijo',tributo]
       
        
                const valorIncial2 = await pool.query(queryGeneral, params)
                
                price2 = parseFloat(valorIncial2[0][0].Cotizacion);
                    
            }else{
                price2 = 0
            }
            
            if( (NombrePlan !== 'Pulso' && NombrePlan !== 'BS A Mayor') && hijosTotalesBritanica>1){
    
                params = [plan, NombrePlan,21, 21, 'Hijos',tributo]
               
        
                const valorIncial3 = await pool.query(queryGeneral, params)
                
                price3 = parseFloat(valorIncial3[0][0].Cotizacion*(hijosTotalesBritanica - 1));
               
    
            }else{
                price3 = 0
            }
        
       
       
            if(tipoMonutributo){
                descuento = aportesMonotributista(tipoMonutributo)
            }else{
                descuento = 0
            }
    
            
            if(sueldoBruto){
                descuentoSueldo = aportesSueldoBruto(sueldoBruto, plan)
        }else{
            descuentoSueldo = 0
        }

        bonificacion = descuentosBritanica(NombrePlan, edad);

        //sacamos bonificacion 3/6/24
        
        let price = price0 + price1 + price2 + price3 + price4 - descuento - descuentoSueldo;
        return "$" + Math.round(price);
    }
    //plan=='Avalian'*********************
    if(plan=='Avalian'){

       
       
        if (tributo ==='monotributo' || tributo === 'sueldo'){
            tributo = 'Sueldo'
         }


        const hijosTotalesAvalian = hijosMayores + hijosMenores

        params = [plan, NombrePlan,edad, edad, tipo,tributo]
        const valorIncial = await pool.query(queryGeneral, params)
        price1 = parseFloat(valorIncial[0][0].Cotizacion);
       
        

        if(edadPareja>0){

            params = [plan, NombrePlan,edadPareja, edadPareja, tipo,tributo]
            const valorIncialPareja = await pool.query(queryGeneral, params)
            price2 = parseFloat(valorIncialPareja[0][0].Cotizacion); 
          
        }else{
            price2= 0;
        }


        if(hijosTotalesAvalian>0){

            params = [plan, NombrePlan,21, 21, '1Hijo',tributo]
            const valorIncial1HIjo = await pool.query(queryGeneral, params)
            price3 = parseFloat(valorIncial1HIjo[0][0].Cotizacion); 
           
       
            if(hijosTotalesAvalian>=2){

                params = [plan, NombrePlan,21, 21, '2Hijo',tributo]
                const valorIncial2Hijo = await pool.query(queryGeneral, params)
                price4 = parseFloat(valorIncial2Hijo[0][0].Cotizacion);
               

            }else{
                price4 = 0
            }
          
        
            if(hijosTotalesAvalian>=3){

                params = [plan, NombrePlan,21, 21, 'Hijos',tributo]
                const valorIncialHijos = await pool.query(queryGeneral, params)
                price5 = valorIncialHijos[0][0].Cotizacion*(hijosTotalesAvalian - 2);
              
            }else{
                price5 = 0
            }
   
     
        } else{
            price3 = 0;
            price4 = 0;
            price5 = 0;
        }
        if(tipoMonutributo){
            descuento = aportesMonotributista(tipoMonutributo)
        }else{
            descuento = 0
        }

        
        if(sueldoBruto){
            descuentoSueldo = aportesSueldoBruto(sueldoBruto, plan)
        }else{
            descuentoSueldo = 0
        }
        let price = price1 + price2 + price3 + price4 + price5 - descuento -descuentoSueldo;
        return "$" + Math.round(price);
        
    }


    if(plan=='Plenit'){
       
        if (tributo ==='monotributo' || tributo === 'sueldo'){
            tributo = 'Sueldo'
         }


        const hijosTotalesPlenit = hijosMayores + hijosMenores

        if(edadPareja==0 && hijosTotalesPlenit==0 ){
            params = [plan, NombrePlan,edad, edad, tipo,tributo]
            const valorIncial = await pool.query(queryGeneral, params)
            console.log('valor', params, valorIncial);
            price1 = parseFloat(valorIncial[0][0].Cotizacion); 
        }else{
            price1 = 0;
        }
      
        

        if(edadPareja>0 && hijosTotalesPlenit==0 ){

            params = [plan, NombrePlan,edad, edad,'Matrimonio',tributo]
            const valorIncialPareja = await pool.query(queryGeneral, params)
            price2 = parseFloat(valorIncialPareja[0][0].Cotizacion); 
          
        }else{
            price2= 0;
        }


        if(hijosTotalesPlenit>0){

            if(edadPareja>0){
                params = [plan, NombrePlan,edad, edad, 'Matrimonio1Hijo',tributo]
                const valorIncial1HIjo = await pool.query(queryGeneral, params)
                price3 = parseFloat(valorIncial1HIjo[0][0].Cotizacion); 
            }else{
                params = [plan, NombrePlan,edad, edad, 'Individual1Hijo',tributo]
                const valorIncial1HIjo = await pool.query(queryGeneral, params)
                price3 = parseFloat(valorIncial1HIjo[0][0].Cotizacion); 
            }

            
           
       
            if(hijosTotalesPlenit>=2){

                params = [plan, NombrePlan,edad, edad, '2Hijo',tributo]
                const valorIncial2Hijo = await pool.query(queryGeneral, params)
                price4 = parseFloat(valorIncial2Hijo[0][0].Cotizacion);
               

            }else{
                price4 = 0
            }
          
        
            if(hijosTotalesPlenit>=3){

                params = [plan, NombrePlan,edad, edad, 'Hijos',tributo]
                const valorIncialHijos = await pool.query(queryGeneral, params)
                price5 = valorIncialHijos[0][0].Cotizacion*(hijosTotalesPlenit - 2);
              
            }else{
                price5 = 0
            }
   
     
        } else{
            price3 = 0;
            price4 = 0;
            price5 = 0;
        }
        if(tipoMonutributo){
            descuento = aportesMonotributista(tipoMonutributo)
        }else{
            descuento = 0
        }

        
        if(sueldoBruto){
            descuentoSueldo = aportesSueldoBruto(sueldoBruto, plan)
        }else{
            descuentoSueldo = 0
        }
        let price = price1 + price2 + price3 + price4 + price5 - descuento -descuentoSueldo;
        console.log(price1, price2, price3, price4, price5, descuento, descuentoSueldo);
        return "$" + Math.round(price);

        
    }






    if(plan=='Alianza Medica'){


        if (tributo === 'sueldo'){
            tributo = 'Sueldo'
         }else{
            tributo = 'Particular'
         }


        params = [plan, NombrePlan,edad, edad, tipo,tributo]
        
      
        const valorIncial = await pool.query(queryGeneral, params)
        price1 = parseFloat(valorIncial[0][0].Cotizacion);

        if(edadPareja>0){

            params = [plan, NombrePlan,edadPareja, edadPareja, tipo,tributo]
            const valorIncialPareja = await pool.query(queryGeneral, params)
            price2 = parseFloat(valorIncialPareja[0][0].Cotizacion); 
        }else{
                price2=0
        }
        if(hijosMayores>0){

            
            params = [plan, NombrePlan,21, 21, 'HijoMayor',tributo]
            const valorIncialHijos = await pool.query(queryGeneral, params)
            price3 = parseFloat(valorIncialHijos[0][0].Cotizacion)*hijosMayores;
        }else{
            price3 = 0
        }
        if(hijosMenores>0){

            
            params = [plan, NombrePlan,17, 17, 'HijoMenor',tributo]
            const valorIncialHijos = await pool.query(queryGeneral, params)
            price4 = parseFloat(valorIncialHijos[0][0].Cotizacion)*hijosMenores;
        }else{
            price4 = 0
        }
        if(tipoMonutributo){
            descuento = aportesMonotributista(tipoMonutributo)
        }else{
            descuento = 0
        }

        
        if(sueldoBruto){
            descuentoSueldo = aportesSueldoBruto(sueldoBruto, plan)
        }else{
            descuentoSueldo = 0
        }

         //sacamos bonificacion 3/6/24
        return price ="$" + Math.round(price1 + price2 + price3 + price4 - descuento - descuentoSueldo);
    }

    } catch (error) {
        console.log(error)
        res.json(error);
    }
  



}



module.exports ={
    persona,
    costo,
    encontrarNumeroMasGrande,
    aportesMonotributista
};

