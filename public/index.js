
// //obras sociales
// const coberturasPlanes = {
//     Avalian:{      
//         Cerca:{
//             descripcion:`<ul class="descripcion">
//                 <li>Con coseguros</li>
//                 <li>Cobertura regional</li>
//                 <li>Internacion en hab. compartida</li>
//                 <li>Prestadores seleccionados</li>
//                 <li>Muchos beneficios mas</li>
//                 </ul>`,

//         },
//         Integral:{
//             descripcion:`<ul class="descripcion">
//             <li>Con coseguros</li>
//             <li>Cob. Nacional y en paises limitrofes</li>
//             <li>Internacion en Hab. Compartida/Privada</li>
//             <li>Mas prestadores en cartilla</li>
//             <li>Muchos beneficios mas</li>
//             </ul>`,

//         },
//         Superior:{
//             descripcion:`<ul class="descripcion">
//             <li>Sin coseguros</li>
//             <li>Internacion en hab. privada</li>
//             <li>Cobertura nacional e internacional</li>
//             <li>Mas prestadores en cartilla</li>
//             <li>Muchos beneficios mas</li>
//             </ul>`,

//         }
        
//     },
//     PrevencionSalud:{
//         A1:{
//             descripcion:`<ul class="descripcion">
//             <li>Sin coseguros</li>
//             <li>Cobertura nacional</li>
//             <li>Internación en hab. compartida</li>
//             <li>Ortodoncias hasta los 18 años</li>
//             <li>Muchos beneficios mas</li>
//             </ul>`,

//         },
//         A2:{
//             descripcion:`<ul class="descripcion">
//             <li>Sin coseguros</li>
//             <li>Cobertura nacional y en países limítrofes</li>
//             <li>Internación en Hab. privada</li>
//             <li>Más prestadores en cartilla</li>
//             <li>Ortodoncias hasta los 35 años</li>
//             <li>Muchos beneficios mas</li>
//             </ul>`,


//         },
//         A2CP:{
//             descripcion:`<ul class="descripcion">
//             <li>Con coseguros</li>
//             <li>Cobertura nacional y en países limítrofes</li>
//             <li>Internación en Hab. privada</li>
//             <li>Más prestadores en cartilla</li>
//             <li>Ortodoncias hasta los 35 años</li>
//             <li>Muchos beneficios mas</li>
//             </ul>`,

//         }
//     },
//     BritanicaSalud:{
//         BS100:{
//             descripcion:`<ul class="descripcion">
//             <li>Con coseguros</li>
//             <li>Internacion en hab. compartida</li>
//             <li>Cobertura regional con asistencia al viajero nacional e internacional</li>
//             <li>Prestadores seleccionados (Sanatorio de niños grupo oroño)</li>
//             <li>Muchos beneficios mas</li>
//             </ul>`,

//         },
//         BS180:{
//             descripcion:`<ul class="descripcion">
//             <li>Con coseguros</li>
//             <li>Internacion en hab. compartida</li>
//             <li>Cobertura regional con asistencia al viajero nacional e internacional</li>
//             <li>Mas prestadores en cartilla</li>
//             <li>Muchos beneficios mas</li>
//             </ul>`,
 
//         },
    
//     },
//     AlianzaMedica:{
//         PLAN100:{
//             descripcion:`<ul class="descripcion">
//             <li>Con coseguros solamente en consultas</li>
//             <li>Internacion en hab. compartida</li>
//             <li>Cobertura regional con asistencia al viajero nacional e internacional</li>
//             <li>Amplia cartilla de prestadores</li>
//             <li>Muchos beneficios mas</li>
//             </ul>`,
        
//         }
//     },
//     OMINT:{
//         PLAN1500:{
//             descripcion:`<ul class="descripcion">
//             <li>Sin coseguros/li>
//             <li>Cobertura Regional</li>
//             <li>Internación en hab. compartida</li>
//             <li>Prestadores seleccionados</li>
//             <li>Muchos beneficios mas</li>
//             </ul>`,
            
//         },
//         PLAN2500:{
//             descripcion:`<ul class="descripcion">
//             <li>Sin coseguros/li>
//             <li>Cobertura nacional y en países limítrofes</li>
//             <li>Internación en hab. compartida</li>
//             <li>Más prestadores en cartilla</li>
//             <li>Muchos beneficios mas</li>
//             </ul>`,
          
//         }
//     },
//     integralSalud:{
//         CEIBO:{
//             descripcion:`<ul class="descripcion">
//             <li>Con coseguros/li>
//             <li>Internación en hab. compartida</li>
//             <li>Cobertura regional con asistencia al viajero nacional</li>
//             <li>Amplia cartilla de prestadores</li>
//             <li>Muchos beneficios mas</li>
//             </ul>`,
            
//         }
//     }
// }



// const coberturas = {
//     particular:{
//         Avalian: coberturasPlanes.Avalian,
//         PrevencionSalud:coberturasPlanes.PrevencionSalud,
//         BritanicaSalud:coberturasPlanes.BritanicaSalud,
//         AlianzaMedica:coberturasPlanes.AlianzaMedica
//     },
//     sueldo:{
//         Avalian: coberturasPlanes.Avalian,
//         PrevencionSalud:coberturasPlanes.PrevencionSalud,
//         BritanicaSalud:coberturasPlanes.BritanicaSalud,
//         AlianzaMedica:coberturasPlanes.AlianzaMedica,
//         OMINT:coberturasPlanes.OMINT,
//         integralSalud:coberturasPlanes.IntegralSalud,
//     },
//     monotributo:{
//         Avalian: coberturasPlanes.Avalian,
//         PrevencionSalud:coberturasPlanes.PrevencionSalud,
//         BritanicaSalud:coberturasPlanes.BritanicaSalud,
//         AlianzaMedica:coberturasPlanes.AlianzaMedica,
//         OMINT:coberturasPlanes.OMINT
//     },
//     otraLocalidad:{
//         Avalian: coberturasPlanes.Avalian,
//         PrevencionSalud:coberturasPlanes.PrevencionSalud,
//         BritanicaSalud:coberturasPlanes.BritanicaSalud,
//         AlianzaMedica:coberturasPlanes.AlianzaMedica
//     },
//     otraLocalidadParticular:{
//         Avalian: coberturasPlanes.Avalian,
//         PrevencionSalud:coberturasPlanes.PrevencionSalud,
//         AlianzaMedica:coberturasPlanes.AlianzaMedica
//     }
   
// }

//variables

//seleccion de variables

const optionsCobertura = document.querySelectorAll('.divoption');

    
optionsCobertura.forEach(option => {
        option.addEventListener('click', function() {
            
            optionsCobertura.forEach(opt => opt.classList.remove('selected'));
            
            this.classList.add('selected');
        });
    });

//condicional cantidad de usuario de cobertura

const options = document.querySelectorAll(".divoption");
const divPareja = document.querySelector('.pareja');
const divFamilia = document.querySelector('.familia');
const divHijos = document.querySelector('.hijos')


const cantidadCobertura = {
    mi : ()=>{
        divPareja.classList.remove('active');
        divFamilia.classList.remove('active');
        divHijos.classList.remove('active');
    },
    pareja : () => {
        divPareja.classList.add('active');
        divFamilia.classList.remove('active');
        divHijos.classList.remove('active');
    },
    hijos: () => {
        divPareja.classList.remove('active');
        divFamilia.classList.remove('active');
        divHijos.classList.add('active');
    },
    familia:()=>{
        divPareja.classList.remove('active');
        divFamilia.classList.add('active');
        divHijos.classList.add('active');
    },
}


options.forEach(function (option) {
    option.addEventListener("click", function () {
        let selectedValue = option.getAttribute("data-value");
        cantidadCobertura[selectedValue]();
    });
});


//condicinal localidad y coberturas (seleccion opcion = otra)

const localidad = document.querySelector('#select-localidad');
const nuevaLocalidad = document.querySelector('.localidad');
const cobertura = document.querySelector('#cobertura-particular');
const nuevaCobertura = document.querySelector('.obra-social');
const sueldoBruto = document.querySelector('.sueldo-bruto');


localidad.addEventListener('change', ()=>{
    let valor = localidad.value;
    if (valor == 'otro'){
        nuevaLocalidad.classList.add('active');
    }else{
        nuevaLocalidad.classList.remove('active');
    }

})

cobertura.addEventListener('change', ()=>{
    let valor = cobertura.value;
    if (valor == 'Otra'){
        nuevaCobertura.classList.add('active');
    }else{
        nuevaCobertura.classList.remove('active');
    }

})


//condicional tipo de situacion laboral

const selectAfip = document.querySelector('#selectAfip');
const monotributista = document.querySelector('.monotributista');
const particular = document.querySelector('.particular');


selectAfip.addEventListener('change', ()=>{
    let value = selectAfip.value;

    if ( value == 'particular' || value == 'sueldo'){
        particular.classList.add('active')
        monotributista.classList.remove('active');
    }
    if(value == 'sueldo'){
        sueldoBruto.classList.add('active')
    }
    else if(value =='monotributo'){
        monotributista.classList.add('active');
        particular.classList.remove('active')
    }else{
        particular.classList.remove('active');
        monotributista.classList.remove('active')
    }
    
})

document.addEventListener('DOMContentLoaded', function () {
    const opciones = document.querySelectorAll('.divoption');

    opciones.forEach(function (opcion) {
        opcion.addEventListener('click', function () {
            const valor = this.getAttribute('data-value');
            document.getElementById('tipo').value = valor;
        });
    });
});




//agregarle el link de ws a cada plan
const masInfoBtn = document.querySelector('.mas-info-btn');
masInfoBtn.addEventListener('click', (event) => {
        // Obtener el nombre de la compañía y el nombre del plan
            const compañia = event.target.parentNode.querySelector('.nombre-comp').textContent;
             const plan = event.target.parentNode.querySelector('.plan').textContent;
    
        // Construir el mensaje personalizado
            const mensajePersonalizado = `Buenas tardes, quisiera averiguar sobre la cobertura ${compañia}, el plan ${plan}.`;
    
        // Construir la URL de WhatsApp con el mensaje personalizado
            const telefono = '+5492235131130'; // Número de teléfono predeterminado
            const urlWhatsapp = `https://wa.me/${telefono}?text=${encodeURIComponent(mensajePersonalizado)}`;
    
         // Abrir la URL de WhatsApp en una nueva ventana
            window.open(urlWhatsapp, '_blank');
        });




//calcular descuento obra social



// const aportesMonotributista = {
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
//          descuento = aportesMonotributista[categoria] 
//          return descuento
//     }
//     if(tipo =='sueldo'){
//         tresporcierto = (aporte * 0.03)/3
//         descuento = tresporcierto * cobertura[plan][coeficiente]
//         return descuento
//     }
// }

// evento enviar form 

// const form = document.querySelector('form');
// const aporte = document.querySelector('#sueldo').value;

// const opiones ={
//     0:{
//         planes : coberturas.particular
//     },
//     1:{
//         planes : coberturas.sueldo
//     },
//     2:{
//         planes: coberturas.monotributo
//     },
//     3:{
//         planes: coberturas.otraLocalidad
//     },
//     4:{
//         planes:coberturas.otraLocalidadParticular
//     }
// }


// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     // Verificar que los datos necesarios estén presentes
//     if (selectAfip.value == '-' || localidad.value == '-' || localidad.value == '0' || selectAfip.value == '0') {
//         return alert('Debe completar los datos para obtener una cotización');
//     }

//     let opcion;

//     if (selectAfip.value == 'particular' && localidad.value != 'otro') {
//         opcion = 0;
//     } else if (selectAfip.value == 'sueldo' && localidad.value != 'otro') {
//         opcion = 1;
//     } else if (selectAfip.value == 'monotributo' && localidad.value != 'otro') {
//         opcion = 2;
//     } else if ((selectAfip.value == 'monotributo' || selectAfip.value == 'sueldo') && localidad.value == 'otro') {
//         opcion = 3;
//     } else if (selectAfip.value == 'particular' && localidad.value == 'otro') {
//         opcion = 4;
//     }

//     const planesDiv = document.getElementById('planesDiv');
//     // Limpiar el contenido anterior
//     planesDiv.innerHTML = '';

//     // Obtener la opción correspondiente
//     const planes = opiones[opcion].planes;

//     // Iterar sobre cada compañía dentro de la opción
//     for (const compañia in planes) {
//         if (planes.hasOwnProperty(compañia)) {
//             const compañiaDiv = document.createElement('div');
//             compañiaDiv.className = 'cobertura';
    
//             const nombreCompDiv = document.createElement('div');
//             const nombreCompania = separarPorMayusculas(compañia);
//             nombreCompDiv.textContent = nombreCompania;
//             nombreCompDiv.className = 'nombre-comp';
    
//             compañiaDiv.appendChild(nombreCompDiv);
    
//             // Verificar si planes[compañia].planes es un array antes de intentar iterar
//             if (Array.isArray(planes[compañia].planes)) {
//                 // Iterar sobre cada plan de la compañía
//                 for (const plan of planes[compañia].planes) {
//                     const planDiv = document.createElement('p');
//                     planDiv.textContent = plan;
//                     planDiv.className = 'plan';
//                     compañiaDiv.appendChild(planDiv);
//                 }
//             }
    
//             const masInfoBtn = document.createElement('button');
//             masInfoBtn.textContent = 'Más Info';
//             masInfoBtn.className = 'mas-info-btn';
    
//             // Agregar un evento al botón (puedes personalizar esto según tus necesidades)
//             masInfoBtn.addEventListener('click', (event) => {
//                   // Obtener el nombre de la compañía y el nombre del plan
//                   const compañia = event.target.parentNode.querySelector('.nombre-comp').textContent;
//                   const plan = event.target.parentNode.querySelector('.plan').textContent;

//         // Construir el mensaje personalizado
//         const mensajePersonalizado = `Buenas tardes, quisiera averiguar sobre la cobertura ${compañia}, el plan ${plan}.`;

//                 // Construir la URL de WhatsApp con el mensaje personalizado
//                 const telefono = '+5492235131130'; // Número de teléfono predeterminado
//                 const urlWhatsapp = `https://wa.me/${telefono}?text=${encodeURIComponent(mensajePersonalizado)}`;

//                 // Abrir la URL de WhatsApp en una nueva ventana
//                 window.open(urlWhatsapp, '_blank');
//             });
    
//             compañiaDiv.appendChild(masInfoBtn);
    
//             // Agregar el div de compañía al contenedor principal
//             planesDiv.appendChild(compañiaDiv);
//         }
//     }
    
// });

// function separarPorMayusculas(texto) {
//     return texto.replace(/([a-z])([A-Z])/g, '$1 $2');
// }


