
//obras sociales
const descripciones = {
    Avalian:{      
        Cerca:{
            descripcion:`<ul class="descripcion">
                <li>Con coseguros</li>
                <li>Cobertura regional</li>
                <li>Internacion en hab. compartida</li>
                <li>Prestadores seleccionados</li>
                <li>Muchos beneficios mas</li>
                </ul>`,

        },
        Integral:{
            descripcion:`<ul class="descripcion">
            <li>Con coseguros</li>
            <li>Cob. Nacional y en paises limitrofes</li>
            <li>Internacion en Hab. Compartida/Privada</li>
            <li>Mas prestadores en cartilla</li>
            <li>Muchos beneficios mas</li>
            </ul>`,

        },
        Superior:{
            descripcion:`<ul class="descripcion">
            <li>Sin coseguros</li>
            <li>Internacion en hab. privada</li>
            <li>Cobertura nacional e internacional</li>
            <li>Mas prestadores en cartilla</li>
            <li>Muchos beneficios mas</li>
            </ul>`,

        }
        
    },
    PrevencionSalud:{
        A1:{
            descripcion:`<ul class="descripcion">
            <li>Sin coseguros</li>
            <li>Cobertura nacional</li>
            <li>Internación en hab. compartida</li>
            <li>Ortodoncias hasta los 18 años</li>
            <li>Muchos beneficios mas</li>
            </ul>`,

        },
        A2:{
            descripcion:`<ul class="descripcion">
            <li>Sin coseguros</li>
            <li>Cobertura nacional y en países limítrofes</li>
            <li>Internación en Hab. privada</li>
            <li>Más prestadores en cartilla</li>
            <li>Ortodoncias hasta los 35 años</li>
            <li>Muchos beneficios mas</li>
            </ul>`,


        },
        A2CP:{
            descripcion:`<ul class="descripcion">
            <li>Con coseguros</li>
            <li>Cobertura nacional y en países limítrofes</li>
            <li>Internación en Hab. privada</li>
            <li>Más prestadores en cartilla</li>
            <li>Ortodoncias hasta los 35 años</li>
            <li>Muchos beneficios mas</li>
            </ul>`,

        }
    },
    BritanicaSalud:{
        BS100:{
            descripcion:`<ul class="descripcion">
            <li>Con coseguros</li>
            <li>Internacion en hab. compartida</li>
            <li>Cobertura regional con asistencia al viajero nacional e internacional</li>
            <li>Prestadores seleccionados (Sanatorio de niños grupo oroño)</li>
            <li>Muchos beneficios mas</li>
            </ul>`,

        },
        BS180:{
            descripcion:`<ul class="descripcion">
            <li>Sin coseguros</li>
            <li>Internacion en hab. compartida</li>
            <li>Cobertura regional con asistencia al viajero nacional e internacional</li>
            <li>Mas prestadores en cartilla</li>
            <li>Muchos beneficios mas</li>
            </ul>`,
 
        },
    
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
