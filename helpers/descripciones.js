
//obras sociales
const descripciones = {
    Avalian:{      
        Cerca:{
            descripcion:`<ul class="descripcion">
                <li>Acceso a los servicios solo con credencial <strong> CON COPAGOS</strong></li>
                <li>Internación en <strong> Hab. COMPARTIDA</strong></li>
                <li>Amplia red de prestadores, farmacias, odontologia, etc</li>
                <li>Cobertura <strong> en todo el pais</strong></li>
                <li>Anticeptivas al 100%</li>
                <li>Plan Materno Infantil (hasta el primer año de vida)</li>
                </ul>`,
            carateristicas: [
                    { nombre: "Cartilla Médica", valor: "Reducida", porcentaje: 30, color:"#54a96e" , colorbg:"#add767"},
                    { nombre: "Odontología", valor: "Básica", porcentaje: 50, color:"#54a96e", colorbg:"#add767" },
                    { nombre: "Ortodoncia", valor: "de 0 a 17 años", porcentaje: 80, color:"#54a96e" , colorbg:"#add767"},
                    { nombre: "Psicología", valor: "Hasta 30s", porcentaje: 60, color:"#54a96e", colorbg:"#add767" },
                    { nombre: "Farmacias", valor: "40% Dto", porcentaje: 40,color:"#54a96e", colorbg:"#add767" },
                    { nombre: "Kinesiología", valor: "Hasta 25s.", porcentaje: 70,color:"#54a96e", colorbg:"#add767" },
                    { nombre: "Ópticas", valor: "50% en cristales", porcentaje: 50,color:"#54a96e", colorbg:"#add767" },
                    ],
            color:"#54a96e",
            colorbg:"#add767"

        },
        Integral:{
             descripcion:`<ul class="descripcion">
                <li>Acceso a los servicios solo con credencial <strong> CON COPAGOS</strong></li>
                <li>Internación en <strong> Hab. COMPARTIDA</strong></li>
                <li>Amplia red de prestadores, farmacias, odontologia, etc</li>
                <li>Cobertura <strong> en todo el pais</strong></li>
                <li>Anticeptivas al 100%</li>
                <li>Plan Materno Infantil (hasta el primer año de vida)</li>
                </ul>`,
               carateristicas: [
                    { nombre: "Cartilla Médica", valor: "Amplia", porcentaje: 90, color:"#54a96e", colorbg:"#add767" },
                    { nombre: "Odontología", valor: "Básica", porcentaje: 50, color:"#54a96e", colorbg:"#add767" },
                    { nombre: "Ortodoncia", valor: "de 0 a 17 años", porcentaje: 80, color:"#54a96e", colorbg:"#add767" },
                    { nombre: "Psicología", valor: "Hasta 48s", porcentaje: 80, color:"#54a96e", colorbg:"#add767" },
                    { nombre: "Farmacias", valor: "40% Dto", porcentaje: 40,color:"#54a96e", colorbg:"#add767" },
                    { nombre: "Kinesiología", valor: "Hasta 40s.", porcentaje: 90,color:"#54a96e", colorbg:"#add767" },
                    { nombre: "Ópticas", valor: "50% en cristales", porcentaje: 50,color:"#54a96e", colorbg:"#add767" },
                    ],
            color:"#54a96e",
            colorbg:"#add767"

        },
        Superior:{
             descripcion:`<ul class="descripcion">
                <li>Acceso a los servicios solo con credencial <strong> SIN COPAGOS</strong></li>
                <li>Internación en <strong> Hab. PRIVADA</strong></li>
                <li>Amplia red de prestadores, farmacias, odontologia, etc</li>
                <li>Cobertura <strong> en todo el pais</strong></li>
                <li>Anticeptivas al 100%</li>
                <li>Plan Materno Infantil (hasta el primer año de vida)</li>
                </ul>`,
               carateristicas: [
                    { nombre: "Cartilla Médica", valor: "Muy Amplia", porcentaje: 100, color:"#54a96e", colorbg:"#add767" },
                    { nombre: "Odontología", valor: "Completa", porcentaje: 80, color:"#54a96e", colorbg:"#add767" },
                    { nombre: "Ortodoncia", valor: "de 0 a 17 años", porcentaje: 80, color:"#54a96e", colorbg:"#add767" },
                    { nombre: "Psicología", valor: "Hasta 48s", porcentaje: 80, color:"#54a96e", colorbg:"#add767" },
                    { nombre: "Farmacias", valor: "40% Dto", porcentaje: 40,color:"#54a96e", colorbg:"#add767" },
                    { nombre: "Kinesiología", valor: "Hasta 40s.", porcentaje: 90,color:"#54a96e", colorbg:"#add767" },
                    { nombre: "Ópticas", valor: "100% en cristales", porcentaje: 100,color:"#54a96e", colorbg:"#add767" },
                    ],
            color:"#54a96e",
            colorbg:"#add767"

        }
        
    },
    PrevencionSalud:{
        A1:{
                descripcion:`<ul class="descripcion">
                <li>Acceso a los servicios solo con credencial <strong> SIN COPAGOS</strong></li>
                <li>Internación en <strong> Hab. COMPARTIDA</strong></li>
                <li>Amplia red de prestadores, farmacias, odontologia, etc</li>
                <li>Cobertura <strong> en todo el pais</strong></li>
                <li>Anticeptivas al 100%</li>
                <li>Plan Materno Infantil (hasta el primer año de vida)</li>
                </ul>`,
               carateristicas: [
                    { nombre: "Cartilla Médica", valor: "Amplia", porcentaje: 80, color:"#ee3c76", colorbg:"#f5f6fc" },
                    { nombre: "Odontología", valor: "Basica", porcentaje: 40, color:"#ee3c76", colorbg:"#f5f6fc" },
                    { nombre: "Ortodoncia", valor: "de 0 a 17 años", porcentaje: 80, color:"#ee3c76", colorbg:"#f5f6fc" },
                    { nombre: "Psicología", valor: "Hasta 30s", porcentaje: 60, color:"#ee3c76", colorbg:"#f5f6fc" },
                    { nombre: "Farmacias", valor: "40% Dto", porcentaje: 40,color:"#ee3c76", colorbg:"#f5f6fc" },
                    { nombre: "Kinesiología", valor: "Hasta 25s.", porcentaje: 50,color:"#ee3c76", colorbg:"#f5f6fc" },
                    { nombre: "Ópticas", valor: "Basica", porcentaje: 30,color:"#ee3c76", colorbg:"#f5f6fc" },
                    ],
            color:"#ee3c76", 
            colorbg:"#f5f6fc"

        },
        A2:{
                 descripcion:`<ul class="descripcion">
                <li>Acceso a los servicios solo con credencial <strong> SIN COPAGOS</strong></li>
                <li>Internación en <strong> Hab. COMPARTIDA</strong></li>
                <li>Amplia red de prestadores, farmacias, odontologia, etc</li>
                <li>Cobertura <strong> en todo el pais</strong></li>
                <li>Anticeptivas al 100%</li>
                <li>Plan Materno Infantil (hasta el primer año de vida)</li>
                </ul>`,
               carateristicas: [
                    { nombre: "Cartilla Médica", valor: "Muy amplia", porcentaje: 100, color:"#ee3c76", colorbg:"#f5f6fc" },
                    { nombre: "Odontología", valor: "Completa", porcentaje: 80, color:"#ee3c76", colorbg:"#f5f6fc" },
                    { nombre: "Ortodoncia", valor: "de 0 a 17 años", porcentaje: 80, color:"#ee3c76", colorbg:"#f5f6fc" },
                    { nombre: "Psicología", valor: "Hasta 30s", porcentaje: 60, color:"#ee3c76",colorbg:"#f5f6fc" },
                    { nombre: "Farmacias", valor: "40% Dto", porcentaje: 40,color:"#ee3c76", colorbg:"#f5f6fc" },
                    { nombre: "Kinesiología", valor: "Hasta 30s.", porcentaje: 60,color:"#ee3c76", colorbg:"#f5f6fc" },
                    { nombre: "Ópticas", valor: "Amplia", porcentaje: 70,color:"#ee3c76", colorbg:"#f5f6fc" },
                    ],
            color:"#ee3c76",
             colorbg:"#f5f6fc"


        },
        A2CP:{
            descripcion:`<ul class="descripcion">
                 <li>Plan con copagos</li>
             <li>Cobertura Nacional y en Países limítrofes</li>
             <li>Internación cubierta al 100%</li>
             <li>Cartilla abierta</li>
             <li>Cobertura completa</li>
            </ul>`,

        }
    },
    BritanicaSalud:{
        BS100:{
            descripcion:`<ul class="descripcion">
            <li>Plan con copagos</li>
             <li>Cobertura local</li>
             <li>Internación cubierta al 100%</li>
             <li>Cartilla cerrada</li>
             <li>Cobertura para mayores de 65 años</li>
            </ul>`,

        },
        BS180:{
            descripcion:`<ul class="descripcion">
            <li>Plan sin copagos</li>
             <li>Cobertura local</li>
             <li>Internación cubierta al 100%</li>
             <li>Cartilla mas amplia</li>
             <li>Cobertura para mayores de 65 años</li>
            </ul>`,
 
        },
        BSAMAYOR:{
            descripcion:`<ul class="descripcion">
           <li>Plan sin copagos</li>
             <li>Cobertura local</li>
             <li>Internación cubierta al 100%</li>
             <li>Plan solo para socios de Pami</li>
             <li>Cobertura para mayores de 65 años</li>
            </ul>`,
 
        },
    
    },
    Britanica:{
        BSAMAYOR:{
            descripcion:`<ul class="descripcion">
           <li>Plan sin copagos</li>
             <li>Cobertura local</li>
             <li>Internación cubierta al 100%</li>
             <li>Plan solo para socios de Pami</li>
             <li>Cobertura para mayores de 65 años</li>
            </ul>`,
 
        }
    },
    AlianzaMedica:{
        100:{
            descripcion:`<ul class="descripcion">
            <li>Con coseguros solamente en consultas</li>
            <li>Internacion en hab. compartida</li>
            <li>Cobertura regional con asistencia al viajero nacional e internacional</li>
            <li>Amplia cartilla de prestadores</li>
            <li>Muchos beneficios mas</li>
            </ul>`,
        
        }
    },
    OMINT:{
        1500:{
            descripcion:`<ul class="descripcion">
            <li>Sin coseguros</li>
            <li>Cobertura Regional</li>
            <li>Internación en hab. compartida</li>
            <li>Prestadores seleccionados</li>
            <li>Muchos beneficios mas</li>
            </ul>`,
            
        },
        2500:{
            descripcion:`<ul class="descripcion">
            <li>Sin coseguros</li>
            <li>Cobertura nacional y en países limítrofes</li>
            <li>Internación en hab. compartida</li>
            <li>Más prestadores en cartilla</li>
            <li>Muchos beneficios mas</li>
            </ul>`,
          
        }
    },
    IntegralSalud:{
        UnicoPlan:{
            descripcion:`<ul class="descripcion">
            <li>Con coseguros</li>
            <li>Internación en hab. compartida</li>
            <li>Cobertura regional con asistencia al viajero nacional</li>
            <li>Amplia cartilla de prestadores</li>
            <li>Muchos beneficios mas</li>
            </ul>`,
            
        }
    },
    Plenit:{
        ConCoseguro:{
            descripcion:`<ul class="descripcion">
            <li>Cobertura directa solo con credencial</li>
            <li>Con copagos</li>
            <li>Internacion cubierta al 100% </li>
            <li>Cobertura completa (Estudios, analisis, practicas, etc)</li>
            <li>Medico a domicilio, urgencias y emergencias</li>
            <li>Toda la red propia del sanatorio de la mujer</li>
            </ul>`,
            
        },
        SinCoseguro:{
            descripcion:`<ul class="descripcion">
            <li>Cobertura directa solo con credencial</li>
            <li>Sin copagos</li>
            <li>Internacion cubierta al 100% </li>
            <li>Cobertura completa (Estudios, analisis, practicas, etc)</li>
            <li>Medico a domicilio, urgencias y emergencias</li>
            <li>Toda la red propia del sanatorio de la mujer</li>
            </ul>`,
          
        }
    },
    DOCTORED:{
        PLAN500PLUS:{
             descripcion:`<ul class="descripcion">
                <li>Acceso a los servicios solo con credencial <strong> SIN COPAGOS</strong></li>
                <li>Internación en <strong> Hab. COMPARTIDA</strong></li>
                <li>Amplia red de prestadores, farmacias, odontologia, etc</li>
                <li>Cobertura <strong> en todo el pais</strong></li>
                <li>Anticeptivas al 100%</li>
                <li>Plan Materno Infantil (hasta el primer año de vida)</li>
                </ul>`,
               carateristicas: [
                    { nombre: "Cartilla Médica", valor: "Reducida", porcentaje: 40, color:"#483bb1", colorbg:"#ffcbc4" },
                    { nombre: "Odontología", valor: "Basica", porcentaje: 30, color:"#483bb1", colorbg:"#ffcbc4" },
                    { nombre: "Ortodoncia", valor: "de 0 a 17 años", porcentaje: 80, color:"#483bb1", colorbg:"#ffcbc4" },
                    { nombre: "Psicología", valor: "Hasta 30s", porcentaje: 60, color:"#483bb1", colorbg:"#ffcbc4" },
                    { nombre: "Farmacias", valor: "40% Dto", porcentaje: 40,color:"#483bb1", colorbg:"#ffcbc4" },
                    { nombre: "Kinesiología", valor: "Hasta 25s.", porcentaje: 50,color:"#483bb1", colorbg:"#ffcbc4" },
                    { nombre: "Ópticas", valor: "basica", porcentaje: 30,color:"#483bb1", colorbg:"#ffcbc4" },
                    ],
            color:"#483bb1", 
             colorbg:"#ffcbc4"
            
        },
        PLAN1000:{
               descripcion:`<ul class="descripcion">
                <li>Acceso a los servicios solo con credencial <strong> SIN COPAGOS</strong></li>
                <li>Internación en <strong> Hab. COMPARTIDA</strong></li>
                <li>Amplia red de prestadores, farmacias, odontologia, etc</li>
                <li>Cobertura <strong> en todo el pais</strong></li>
                <li>Anticeptivas al 100%</li>
                <li>Plan Materno Infantil (hasta el primer año de vida)</li>
                </ul>`,
               carateristicas: [
                    { nombre: "Cartilla Médica", valor: "Amplia", porcentaje: 80, color:"#483bb1",  colorbg:"#ffcbc4" },
                    { nombre: "Odontología", valor: "Basica", porcentaje: 40, color:"#483bb1" ,  colorbg:"#ffcbc4"},
                    { nombre: "Ortodoncia", valor: "de 0 a 17 años", porcentaje: 80, color:"#483bb1",  colorbg:"#ffcbc4" },
                    { nombre: "Psicología", valor: "Hasta 30s", porcentaje: 60, color:"#483bb1", colorbg:"#ffcbc4" },
                    { nombre: "Farmacias", valor: "40% Dto", porcentaje: 40,color:"#483bb1",  colorbg:"#ffcbc4" },
                    { nombre: "Kinesiología", valor: "Hasta 25s.", porcentaje: 50,color:"#483bb1" ,  colorbg:"#ffcbc4"},
                    { nombre: "Ópticas", valor: "Basica", porcentaje: 30,color:"#483bb1",  colorbg:"#ffcbc4" },
                    ],
            color:"#483bb1",
            colorbg:"#ffcbc4"
          
        }
    },
    AMASALUD:{
        PlanTotal:{
               descripcion:`<ul class="descripcion">
                <li>Acceso a los servicios solo con credencial <strong> SIN COPAGOS</strong></li>
                <li>Internación en <strong> Hab. COMPARTIDA</strong></li>
                <li>Amplia red de prestadores, farmacias, odontologia, etc</li>
                <li>Cobertura <strong> en todo el pais</strong></li>
                <li>Anticeptivas al 100%</li>
                <li>Plan Materno Infantil (hasta el primer año de vida)</li>
                </ul>`,
               carateristicas: [
                    { nombre: "Cartilla Médica", valor: "amplia", porcentaje: 70, color:"#00a8a8", colorbg:"#add769" },
                    { nombre: "Odontología", valor: "Amplia", porcentaje: 70, color:"#00a8a8", colorbg:"#add769" },
                    { nombre: "Ortodoncia", valor: "de 0 a 17 años", porcentaje: 80, color:"#00a8a8", colorbg:"#add769" },
                    { nombre: "Psicología", valor: "Hasta 30s", porcentaje: 60, color:"#00a8a8", colorbg:"#add769" },
                    { nombre: "Farmacias", valor: "50% Dto", porcentaje: 50,color:"#00a8a8", colorbg:"#add769" },
                    { nombre: "Kinesiología", valor: "Hasta 25s.", porcentaje: 50,color:"#00a8a8", colorbg:"#add769" },
                    { nombre: "Ópticas", valor: "Amplia", porcentaje: 70,color:"#00a8a8", colorbg:"#add769" },
                    ],
            color:"#00a8a8", 
            colorbg:"#add769"
        }
    }

}

const obtenerDescripcion = (plan, NombrePlan)=>{
   

    PlanSinEspacios = plan.split(' ').join('');
    NombrePlanSinEspacios = NombrePlan.split(' ').join('');

       if (descripciones[PlanSinEspacios] && descripciones[PlanSinEspacios][NombrePlanSinEspacios]) {
        let descripcion = descripciones[PlanSinEspacios][NombrePlanSinEspacios];
        return descripcion
    } else {
     
        return
    }
    
}

module.exports = {obtenerDescripcion}
