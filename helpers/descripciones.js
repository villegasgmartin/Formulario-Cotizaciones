
//obras sociales
const descripciones = {
    Avalian:{      
        Cerca:{
            descripcion:`<ul class="descripcion">
                <li>Plan con copagos</li>
                <li>Cobertura Local</li>
                <li>Internación cubierta al 100%</li>
                <li>Cartilla reducida</li>
                <li>Cobertura completa</li>
                </ul>`,

        },
        Integral:{
            descripcion:`<ul class="descripcion">
            <li>Plan con copagos</li>
                <li>Cobertura Nacional</li>
                <li>Internación cubierta al 100%</li>
                <li>Cartilla más amplia</li>
                <li>Cobertura completa</li>
            </ul>`,

        },
        Superior:{
            descripcion:`<ul class="descripcion">
            <li>Plan sin copagos</li>
                <li>Cobertura Nacional e Internacional</li>
                <li>Internación cubierta al 100%</li>
                <li>Cartilla abierta (Más prestadores)</li>
                <li>Cobertura completa</li>
            </ul>`,

        }
        
    },
    PrevencionSalud:{
        A1:{
            descripcion:`<ul class="descripcion">
             <li>Plan sin copagos</li>
             <li>Cobertura Nacional</li>
             <li>Internación cubierta al 100%</li>
             <li>Cartilla cerrada</li>
             <li>Cobertura completa</li>
            </ul>`,

        },
        A2:{
            descripcion:`<ul class="descripcion">
            <li>Plan sin copagos</li>
             <li>Cobertura Nacional y en Países limítrofes</li>
             <li>Internación cubierta al 100%</li>
             <li>Cartilla abierta</li>
             <li>Cobertura completa</li>
            </ul>`,


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
            <li><strong>Sin copagos</strong></li>
            <li>Cobertura Nacional</li>
            <li>Internación cubierta al 100% </li>
            <li>Medico a domicilio</li>
            <li>Cobertura completa</li>
            </ul>`,
            
        },
        PLAN1000:{
            descripcion:`<ul class="descripcion">
             <li><strong>Sin copagos</strong></li>
            <li>Cobertura Nacional</li>
            <li>Internación cubierta al 100% </li>
            <li>Medico a domicilio</li>
            <li>Más prestadores en cartilla</li>
            </ul>`,
          
        }
    },

}

const obtenerDescripcion = (plan, NombrePlan)=>{
   

    PlanSinEspacios = plan.split(' ').join('');
    NombrePlanSinEspacios = NombrePlan.split(' ').join('');
   

   




       if (descripciones[PlanSinEspacios] && descripciones[PlanSinEspacios][NombrePlanSinEspacios]) {
        let descripcion = descripciones[PlanSinEspacios][NombrePlanSinEspacios].descripcion;
        return descripcion
    } else {
     
        return
    }
    
}

module.exports = {obtenerDescripcion}
