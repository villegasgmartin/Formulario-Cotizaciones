const pool = require('../database');

//selector de tipo de individuo, cada uno tiene una logica distinta al tener formas distintas de calculos

//coberturas

//Integral Salud ------------ individio+NumeroHijo / pareja+NumeroHijo
//Prevencion Salud ------------ individio+NumeroHijo / pareja+NumeroHijo
//OMint ----------------- HijoMayor / multiplar por cadidad de hijo // valor de cada individuo
//Britanica Salud --- valor por un solo hijo y valor a parti de 2 // valor de matrimonio
//Avalian --- valor por un solo hijo y valor 2 hijos y valor por el resto //valor de cada individuo
//Alianza ---- HijoMayor / multiplar por cadidad de hijo // valor de cada individuo





const persona = (tipo, hijosMayores, plan, NombrePlan) =>{
        console.log('persona', tipo, hijosMayores, plan);
        if(NombrePlan =='Pulso' || NombrePlan=='BS A Mayor' && tipo =='pareja'  || tipo =='familia' && hijosMayores==0 ){
            tipo = 'Individuo';
            return tipo
        }
        if(tipo =='pareja'  || tipo =='familia' && hijosMayores==0){
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
       
        if(tipo =='pareja' || tipo =='familia' && hijosMayores>0){
            
            switch (plan) {
                case 'Integral Salud':
                        tipo = `pareja+${hijosMayores}Hijo`;
                    break;
                case 'Prevencion Salud':
                        tipo = `pareja+${hijosMayores}Hijo`;
                    break;
                case 'Britanica Salud':
                    tipo = `pareja`;
                    break;
      
                default: 
                tipo ='Individuo';
                    break;
            }

            return tipo
       }
       if(tipo =='hijos' && hijosMayores>0){
            
        switch (plan) {
            case 'Integral Salud':
                    tipo = `Individuo+${hijosMayores}Hijo`;
                break;
            case 'Prevencion Salud':
                    tipo = `Individuo+${hijosMayores}Hijo`;
                break;
     
            default: 
            tipo='Individuo';
                break;
        }

        return tipo
   }
   if(tipo =='hijos' && hijosMayores==0){
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

const aportesMonotributista = (monutributo)=>{
    
    switch (monutributo) {
        case 'Categorias A,B,C':
            aporte = 3500
            break;
        case 'Categorias D':
                aporte = 4100
            break;
        case 'Categorias H':
                aporte = 4400
            break;
        case 'Categorias F':
                aporte = 4900
            break;
        case 'Categorias G':
            aporte = 5100
                break;
        case 'Categorias I':
            aporte = 6300
                break;
        default:
            break;
    }
    return aporte
}


//descuentos de britanica
const descuentosBritanica = (NombrePlan)=>{
    switch (NombrePlan) {
        case 'BS100':
           console.log(valorCobertura);nto = 0.65
            break;
        case 'BS180':
            descuento = 0.75
            break;
        case 'Pulso':
            descuento = 0.75
            break;
        case 'BS A Mayor':
            descuento = 0.9
            break;

        default:
            break;
    }
    return descuento
}


function encontrarNumeroMasGrande(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

const costo = async(tipo, plan, NombrePlan, edad, edadPareja, hijosMayores, tributo)=>{

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
 
        params = [plan, NombrePlan,edad, edad, tipo,tributo]
        console.log(params)
        const valorIncial = await pool.query(queryGeneral, params)
        
        price = parseFloat(valorIncial[0][0].Cotizacion);
     
        return price
    }
    //plan=='Prevencion Salud'*********************
    if(plan=='Prevencion Salud'){
     
        const maximo = Math.max(edad, edadPareja);

        params = [plan, NombrePlan,maximo, maximo, tipo,tributo]
        const valorIncial = await pool.query(queryGeneral, params)
        price = parseFloat(valorIncial[0][0].Cotizacion);
       
        return price
    }
    //plan=='OMINT'*********************
    if(plan=='OMINT'){
    
        params1 = [plan, NombrePlan,edad, edad, tipo,tributo]


        const valorIncial1 = await pool.query(queryGeneral, params1)
        price1 = parseFloat(valorIncial1[0][0].Cotizacion);
        

        if(edadPareja>0){
            params2 = [plan, NombrePlan,edadPareja, queryGeneral, tipo,tributo]


            const valorIncial2 = await pool.query(queryGeneral, params2)
            price2 = parseFloat(valorIncial2[0][0].Cotizacion);
        }else{
            price2=0
        }
       

        if(hijosMayores>0){

            params3 = [plan, NombrePlan,21, 21, 'HijoMayor',tributo]
            console.log(params3)

            const valorIncial3 = await pool.query(queryGeneral, params3)
           
           price3 = parseFloat(valorIncial3[0][0].Cotizacion);
        }else{
            price3=0
        }

        
        
        let price = price1 + price2 + price3*hijosMayores  


        
        return price
    }
    //plan=='Britanica Salud'*********************
    if(plan == 'Britanica Salud'){

        console.log('britanica', tipo)

        if(tipo == 'Individuo'){
            params = [plan, NombrePlan,edad, edad, tipo,tributo]
            const valorIncial4 = await pool.query(queryGeneral, params)
            price4 = parseFloat(valorIncial4[0][0].Cotizacion);
        }else{
            price4 = 0
        }
            const edadCotizada = encontrarNumeroMasGrande(edad, edadPareja)
            if((NombrePlan !== 'Pulso' && NombrePlan !== 'BS A Mayor') && !edadPareja){
               
                params = [plan, NombrePlan,edad, edad, tipo,tributo]
               
                const valorIncial0 = await pool.query(queryGeneral, params)
              
                price0 = parseFloat(valorIncial0[0][0].Cotizacion);
               
            }else{
                price0 =0
            }
    
            if((NombrePlan !== 'Pulso' && NombrePlan !== 'BS A Mayor') && edadPareja>0){
                
                params = [plan, NombrePlan,edadCotizada, edadCotizada, tipo,tributo]
                const valorIncial1 = await pool.query(queryGeneral, params)
                price1 = parseFloat(valorIncial1[0][0].Cotizacion);
            }else{
                price1 =0
            }
    
          
    
            if( (NombrePlan !== 'Pulso' && NombrePlan !== 'BS A Mayor') && hijosMayores==1){
    
                
                params = [plan, NombrePlan,edadCotizada, edadCotizada, '1Hijo',tributo]
        
        
                const valorIncial2 = await pool.query(queryGeneral, params)
                price2 = parseFloat(valorIncial2[0][0].Cotizacion);
            }else{
                price2 = 0
            }
            
            if( (NombrePlan !== 'Pulso' && NombrePlan !== 'BS A Mayor') && hijosMayores>1){
    
                params = [plan, NombrePlan,21, 21, 'Hijos',tributo]
                console.log('hijos',params)
        
                const valorIncial3 = await pool.query(queryGeneral, params)
                console.log(valorIncial3);
                price3 = parseFloat(valorIncial3[0][0].Cotizacion);
               
    
            }else{
                price3 = 0
            }
        
       
       
        console.log(price1, price2, price3)


        
        return price = price0 + price1 + price2 + price3 + price4
        
    }
    //plan=='Avalian'*********************
    if(plan=='Avalian'){
       


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


        if(hijosMayores>0){

            params = [plan, NombrePlan,21, 21, '1Hijo',tributo]
            const valorIncial1HIjo = await pool.query(queryGeneral, params)
            price3 = parseFloat(valorIncial1HIjo[0][0].Cotizacion); 
           
       
            if(hijosMayores>=2){

                params = [plan, NombrePlan,21, 21, '2Hijo',tributo]
                const valorIncial2Hijo = await pool.query(queryGeneral, params)
                price4 = parseFloat(valorIncial2Hijo[0][0].Cotizacion);
               

            }else{
                price4 = 0
            }
          
        
            if(hijosMayores>=3){

                params = [plan, NombrePlan,21, 21, 'Hijos',tributo]
                const valorIncialHijos = await pool.query(queryGeneral, params)
                price5 = valorIncialHijos[0][0].Cotizacion*hijosMayores;
              
            }else{
                price5 = 0
            }
   
     
        } else{
            price4 = 0;
            price5 = 0;
        }
        console.log(price1, price2, price3, price4 , price5 )
        return price = price1 + price2 + price3 + price4 + price5
      
    }

    if(plan=='Alianza Medica'){

        params = [plan, NombrePlan,edad, edad, tipo,tributo]
      
        const valorIncial = await pool.query(queryGeneral, params)
        price1 = parseFloat(valorIncial[0][0].Cotizacion);

        if(edadPareja>0){

            params = [plan, NombrePlan,edadPareja, edadPareja, tipo,tributo]
            const valorIncialPareja = await pool.query(queryGeneral, params)
            price2 = parseFloat(valorIncialPareja[0][0].Cotizacion); 
        }
        if(hijosMayores>0){

            
            params = [plan, NombrePlan,25, 25, 'HijoMayor',tributo]
            const valorIncialHijos = await pool.query(queryGeneral, params)
            price3 = parseFloat(valorIncialHijos[0][0].Cotizacion)*hijosMayores;
        }else{
            price3 = 0
        }

        return price = price1 + price2 + price3
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