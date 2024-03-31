//selector de tipo de individuo, cada uno tiene una logica distinta al tener formas distintas de calculos

//coberturas

//Integral Salud ------------ individio+NumeroHijo / pareja+NumeroHijo
//Prevencion Salud ------------ individio+NumeroHijo / pareja+NumeroHijo
//OMint ----------------- HijoMayor / multiplar por cadidad de hijo // valor de cada individuo
//Britanica Salud --- valor por un solo hijo y valor a parti de 2 // valor de matrimonio
//Avalian --- valor por un solo hijo y valor 2 hijos y valor por el resto //valor de cada individuo
//Alianza ---- HijoMayor / multiplar por cadidad de hijo // valor de cada individuo





const persona = (tipo, hijosMayores, plan) =>{

        if(tipo =='pareja'  || tipo =='familia' && hijosMayores==0){
             return tipo = 'pareja'
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
      
                default: 'individuo'
                    break;
            }

            return tipo
       }
       if(tipo =='hijos' && hijosMayores>0){
            
        switch (plan) {
            case 'Integral Salud':
                    tipo = `individio+${hijosMayores}Hijo`;
                break;
            case 'Prevencion Salud':
                    tipo = `individio+${hijosMayores}Hijo`;
                break;
     
            default: 'individuo'
                break;
        }

        return tipo
   }
   if(tipo =='hijos' && hijosMayores==0){
    tipo = `individio`;
    return tipo
}

       if(tipo =='invididuo'){
         return tipo = 'individuo';
       }

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
            descuento = 0.65
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


const costo = (tipo, cantidad, descuentos, plan, NombrePlan, edad, edadPareja, hijosMayores, tipoMonutributo)=>{

    const aportes = aportesMonotributista (tipoMonutributo)

    //plan=='Integral Salud' || plan=='Prevencion Salud'

    if(plan=='Integral Salud'){
        const queryValor = `SELECT Cotizacion FROM cotizaciones 
        WHERE plan = ?
        AND NombrePlan = ?
        AND ? > Rango_Edad_min
        AND ? <= Rango_Edad
        AND Tipo_Individuo = ?
        `
        params = [plan, NombrePlan,edad, edad, tipo]
        const valorIncial = pool.query(queryValor, params)
        let price = valorIncial[0];
        console.log(price)
        return price
    }

    if(plan=='Prevencion Salud'){

        const maximo = Math.max(edad, edadPareja);


        const queryValor = `SELECT Cotizacion FROM cotizaciones 
        WHERE plan = ?
        AND NombrePlan = ?
        AND ? > Rango_Edad_min
        AND ? <= Rango_Edad
        AND Tipo_Individuo = ?
        `
        params = [plan, NombrePlan,maximo, maximo, tipo]
        const valorIncial = pool.query(queryValor, params)
        let price = valorIncial[0];
        console.log(price)
        return price
    }

    if(plan=='OMINT'){


        const queryValor1 = `SELECT Cotizacion FROM cotizaciones 
        WHERE plan = ?
        AND NombrePlan = ?
        AND ? > Rango_Edad_min
        AND ? <= Rango_Edad
        AND Tipo_Individuo = ?
        `
        params = [plan, NombrePlan,edad, edad, tipo]


        const valorIncial1 = pool.query(queryValor1, params)
        let price1 = valorIncial1[0];

        const queryValor2 = `SELECT Cotizacion FROM cotizaciones 
        WHERE plan = ?
        AND NombrePlan = ?
        AND ? > Rango_Edad_min
        AND ? <= Rango_Edad
        AND Tipo_Individuo = ?
        `
        params = [plan, NombrePlan,edadPareja, edadPareja, tipo]


        const valorIncial2 = pool.query(queryValor2, params)
        let price2 = valorIncial2[0];

        const queryValor3 = `SELECT Cotizacion FROM cotizaciones 
        WHERE plan = ?
        AND NombrePlan = ?
        AND ? > Rango_Edad_min
        AND ? <= Rango_Edad
        AND Tipo_Individuo = ?
        `
        params = [plan, NombrePlan,25, 25, HijoMayot]


        const valorIncial3 = pool.query(queryValor3, params)
        let price3 = valorIncial3[0];
        
        
        let price = price1 + price2 + price3*hijosMayores  
        console.log(price)

        
        return price
    }



}



module.exports ={
    persona,
    costo
};