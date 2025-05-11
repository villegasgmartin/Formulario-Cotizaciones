
//comparaciones
const comparaciones = [
    {
      "compañía": "Avalian",
      "plan": "Cerca",
      "cartilla": "Seleccionada por proximidad",
      "consultas_médicas": "Con copago, sin tope",
      "internacion": "Habitación compartida",
      "medicamentos": "40% de descuento",
      "ortodoncia": "No especificado",
      "asistencia_viajero": "No especificado",
      "telemedicina": "e-Doc Avalian",
      "odontologia": "Con copago, sin tope",
      "psicoterapia": "30 sesiones con copago",
      "fisioterapia": "25 sesiones con copago",
      "fonoaudiologia": "25 sesiones con copago",
      "cirugia_refractiva": "No especificado",
      "optica": "100% en marcos y cristales",
      "plan_materno_infantil": "100% de cobertura"
    },
    {
      "compañía": "Avalian",
      "plan": "Integral",
      "cartilla": "Amplia, alcance nacional",
      "consultas_médicas": "Con copago, sin tope",
      "internacion": "Habitación individual",
      "medicamentos": "40% de descuento",
      "ortodoncia": "De 5 a 30 años",
      "asistencia_viajero": "Argentina y países limítrofes",
      "telemedicina": "e-Doc Avalian",
      "odontologia": "Con copago, sin tope",
      "psicoterapia": "30 sesiones con copago",
      "fisioterapia": "40 sesiones con copago",
      "fonoaudiologia": "30 sesiones con copago",
      "cirugia_refractiva": "Subsidio según plan y normas",
      "optica": "100% en marcos y cristales",
      "plan_materno_infantil": "100% de cobertura"
    },
    {
      "compañía": "Avalian",
      "plan": "Superior",
      "cartilla": "Amplia, prestadores de primera calidad",
      "consultas_médicas": "Sin copago, sin tope",
      "internacion": "Habitación individual",
      "medicamentos": "40% de descuento",
      "ortodoncia": "De 5 a 35 años",
      "asistencia_viajero": "Internacional",
      "telemedicina": "e-Doc Avalian",
      "odontologia": "Sin copago, sin tope",
      "psicoterapia": "30 sesiones con copago",
      "fisioterapia": "45 sesiones (30 sin copago, 15 con copago)",
      "fonoaudiologia": "35 sesiones (30 sin copago, 5 con copago)",
      "cirugia_refractiva": "Subsidio según plan y normas",
      "optica": "100% en marcos y cristales",
      "plan_materno_infantil": "100% de cobertura"
    },
    {
      "compañía": "Prevención Salud",
      "plan": "A1",
      "cartilla": "Cerrada",
      "consultas_médicas": "Sin tope, sin límite",
      "internacion": "Habitación compartida",
      "medicamentos": "40% de descuento",
      "ortodoncia": "De 5 a 18 años (por reintegro)",
      "asistencia_viajero": "Nacional",
      "telemedicina": "Consultorio Médico Virtual",
      "odontologia": "Sin tope, sin límite",
      "psicoterapia": "Hasta 30 sesiones con copago",
      "fisioterapia": "25 sesiones",
      "fonoaudiologia": "25 sesiones",
      "cirugia_refractiva": "No especificado",
      "optica": "1 par de anteojos con cristales monofocales anual (por reintegro con tope)",
      "plan_materno_infantil": "100% de cobertura"
    },
    {
      "compañía": "Prevención Salud",
      "plan": "A2",
      "cartilla": "Abierta con reintegros",
      "consultas_médicas": "Sin tope, sin límite",
      "internacion": "Habitación individual",
      "medicamentos": "40% de descuento",
      "ortodoncia": "De 5 a 35 años (por reintegro)",
      "asistencia_viajero": "Nacional y países limítrofes",
      "telemedicina": "Consultorio Médico Virtual",
      "odontologia": "Sin tope, sin límite",
      "psicoterapia": "Hasta 30 sesiones con copago",
      "fisioterapia": "30 sesiones",
      "fonoaudiologia": "30 sesiones",
      "cirugia_refractiva": "50% por única vez (con antigüedad mínima de 18 meses)",
      "optica": "Por reintegro",
      "plan_materno_infantil": "100% de cobertura"
    },
    {
        "compañía": "DOCTORED",
        "plan": "PLAN500PLUS",
        "cartilla": "En prestadores habilitados en la cartilla de doctored 500",
        "consultas_médicas": "Consultas en consultorio: ct-cl-sc, consultas en guardia: st-sl-sc, emergencias / urgencias médicas: st-sl-sc, visitas a domicilio: ct-cl-cc",
        "internacion": "Alcoholismo y adicciones: Cobertura pmo, clinica: 100%, quirurgica: 100%, neo/uti/uco: 100%, tipo de habitacion: Compartida, internacion domiciliaria: Segun auditoria medica",
        "medicamentos": "Ambulatoria: 40%, internacion: 100%, cronica: 70%, oncologico/hiv/diabetes: 100%",
        "ortodoncia": "Sin cobertura",
        "asistencia_viajero": "Sin cobertura",
        "telemedicina": "St-sl-sc",
        "odontologia": "Urgencias: 100%, odontologia general: 100%",
        "psicoterapia": "Hasta 30 sesiones cc",
        "fisioterapia": "Hasta 25 sesiones cc",
        "fonoaudiologia": "Hasta 25 sesiones cc",
        "cirugia_refractiva": "Sin cobertura",
        "optica": "Anteojos: Hasta los 15 años, lentes de contacto: Sin cobertura",
        "plan_materno_infantil": "Parto normal: 100%, cesarea: 100%, parto personalizado: Sin cobertura, pmi: medicamentos y vacunas: Segun norma vigente, pmi: leche maternidad: Según norma vigente, vacunas: Por calendario: 100%, especiales: Sin cobertura"
    },
    {
        "compañía": "DOCTORED",
        "plan": "PLAN1000",
        "cartilla": "Información no disponible",
        "consultas_médicas": "Atención médica sin coseguros ni copagos",
        "internacion": "Cobertura en internaciones clínicas y quirúrgicas",
        "medicamentos": "Descuentos en farmacias del 40%, 70% y 100%",
        "ortodoncia": "40% de descuento en placas de descanso en nuestro centro odontológico propio",
        "asistencia_viajero": "Información no disponible",
        "telemedicina": "Información no disponible",
        "odontologia": "Centros odontológicos propios donde no debe abonar coseguro",
        "psicoterapia": "30 sesiones de psicología/psiquiatría",
        "fisioterapia": "25 sesiones de kinesiología",
        "fonoaudiologia": "25 sesiones de fonoaudiología",
        "cirugia_refractiva": "Información no disponible",
        "optica": "Cobertura de lentes hasta los 15 años",
        "plan_materno_infantil": "Plan materno infantil"
    }
  ]


let planesSeleccionados = [];

function handleCompareCheckbox(checkbox) {
    const plan = checkbox.value;
    if (checkbox.checked) {
        if (planesSeleccionados.length >= 4) {
            alert("Solo puedes comparar hasta 4 planes.");
            checkbox.checked = false;
        } else {
            planesSeleccionados.push(plan);
        }
    } else {
        planesSeleccionados = planesSeleccionados.filter(p => p !== plan);
    }
    document.getElementById('compararBtn').disabled = planesSeleccionados.length === 1;
}


const mostrarComparativa = ()=> {
    console.log('entro')
    // Aquí usarías el JSON que te pasé arriba
    const planes = comparaciones;
    console.log(planes)
    const planesFiltrados = planes.filter(p => planesSeleccionados.includes(p.plan));
    console.log(planesSeleccionados, planesFiltrados, "planes")

    if (planesFiltrados.length === 0) return;

    let html = "<table border='1' cellpadding='5' cellspacing='0'><tr><th>Atributo</th>";

    planesFiltrados.forEach(p => {
        html += `<th>${p.plan} (${p.compañía})</th>`;
    });

    html += "</tr>";

    const atributos = [
        "cartilla", "consultas_médicas", "internacion", "medicamentos",
        "ortodoncia", "asistencia_viajero", "telemedicina", "odontologia",
        "psicoterapia", "fisioterapia", "fonoaudiologia", "cirugia_refractiva",
        "optica", "plan_materno_infantil"
    ];

    atributos.forEach(attr => {
        html += `<tr><td><b>${attr.replace(/_/g, ' ').toUpperCase()}</b></td>`;
        planesFiltrados.forEach(p => {
            html += `<td>${p[attr]}</td>`;
        });
        html += "</tr>";
    });

    html += "</table>";

    document.getElementById("comparativa").innerHTML = html;
}

const compararbtn = document.querySelector("#compararBtn");

if(compararbtn){
    compararbtn.addEventListener('click',mostrarComparativa )
}



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
// const cobertura = document.querySelector('#cobertura-particular');
const nuevaCobertura = document.querySelector('.obra-social');



localidad.addEventListener('change', ()=>{
    let valor = localidad.value;
    if (valor == 'otro'){
        nuevaLocalidad.classList.add('active');
    }else{
        nuevaLocalidad.classList.remove('active');
    }

})



// cobertura.addEventListener('change', ()=>{
//     let valor = cobertura.value;
//     if (valor == 'Otra'){
//         nuevaCobertura.classList.add('active');
//     }else{
//         nuevaCobertura.classList.remove('active');
//     }

// })




//condicional tipo de situacion laboral

const selectAfip = document.querySelector('#selectAfip');
const monotributista = document.querySelector('.monotributista');
// const particular = document.querySelector('.particular');
const sueldoBruto = document.querySelector('.sueldo-bruto');


selectAfip.addEventListener('change', ()=>{
    let value = selectAfip.value;
    console.log(value);

    if ( value == 'particular'){
        // particular.classList.add('active')
        monotributista.classList.remove('active');
        sueldoBruto.classList.remove('active')
    }
    if(value == 'sueldo'){
        console.log(sueldoBruto)
        sueldoBruto.classList.add('active');
        monotributista.classList.remove('active');
    }
    else if(value =='monotributo'){
        monotributista.classList.add('active');
        // particular.classList.remove('active')
        sueldoBruto.classList.remove('active')
    }else{
        // particular.classList.remove('active');
        monotributista.classList.remove('active')
        sueldoBruto.classList.remove('active')
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


//validacion formulario

const form = document.querySelector('.form-cotiza');
const btnOtraConsulta = document.querySelector('.otra-consulta');
const btnSubmit = document.querySelector('.submit-btn')


form.addEventListener('submit', (e) => {
    let selectLocalidad = document.getElementById('select-localidad');
    if (selectLocalidad.value == "base" ) {
        alert("Por favor seleccione Localidad válida.");
        e.preventDefault(); // Evita que el formulario se envíe
    }
    console.log(btnSubmit)
    btnSubmit.value = 'Consultado ....'
    
   
});

document.addEventListener('DOMContentLoaded', () => {
    const resultados = document.querySelectorAll('.cobertura');
    const form = document.querySelector('.form-cotiza');
    const btnOtraConsulta = document.querySelector('.otra-consulta');
  
    if (resultados.length > 0) {
      form.style.display = 'none';
      btnOtraConsulta.style.display = 'block';
      // No hace falta usar renderResultados si ya están en el DOM
    }
  });
btnOtraConsulta.addEventListener('click', function () {
    form.style.display = 'block';
    btnOtraConsulta.style.display = 'none';
    btnSubmit.value = 'Buscar y Comparar Planes'
  });



// Seleccionar todos los botones "mas-info-btn"
const masInfoBtns = document.querySelectorAll('.mas-info-btn');

// Iterar sobre cada botón y agregar un evento clic
masInfoBtns.forEach((btn) => {
    console.log('entro al masinfo')
    btn.addEventListener('click', (event) => {
        // Obtener el nombre de la compañía y el nombre del plan
        const compania = event.target.parentNode.querySelector('.nombre-comp').textContent;
        const plan = event.target.parentNode.querySelector('.plan').textContent;
        const edad = event.target.parentNode.querySelector('.edad').textContent;
        const edadPareja = event.target.parentNode.querySelector('.edad-pareja')?.textContent ?? '';
        const monotributo = event.target.parentNode.querySelector('.monotributo')?.textContent ?? 'No monotributo';
        const sueldo = event.target.parentNode.querySelector('.sueldo')?.textContent ?? '';
        const tipo = event.target.parentNode.querySelector('.tipo')?.textContent ?? '';
        const tributo = event.target.parentNode.querySelector('.tributo')?.textContent ?? '';
        const localidad = event.target.parentNode.querySelector('.localidad')?.textContent ?? '';
        const hijos = event.target.parentNode.querySelector('.hijos')?.textContent ?? '';

        console.log(tipo, "tributo:", tributo)


        if(tipo == 'Individuo'  && tributo != "sueldo" ){
            // Construir el mensaje personalizado
            mensajePersonalizado = `Buenas tardes, quisiera averiguar sobre la cobertura ${compania}, el plan ${plan}, Edad: ${edad}, Tipo: ${tributo}, Localidad: ${localidad.toLowerCase()},total de hijos: ${hijos}, Edad pareja: ${edadPareja}`;

        }
        if(tipo == 'Individuo' && tributo =="sueldo"  ){
                mensajePersonalizado = `Buenas tardes, quisiera averiguar sobre la cobertura ${compania}, el plan ${plan}, Edad: ${edad}, Tipo: En relacion de dependecia, Monutributo: ${monotributo},  Sueldo: ${sueldo}, Localidad: ${localidad.toLowerCase()},total de hijos: ${hijos}, Edad pareja: ${edadPareja}`;

           
           
            // Construir el mensaje personalizado
        }
        if(tipo != 'Individuo' && tributo !="sueldo" ){
            // Construir el mensaje personalizado
            mensajePersonalizado = `Buenas tardes, quisiera averiguar sobre la cobertura ${compania}, el plan ${plan}, Edad: ${edad}, Tipo: ${tributo}, Localidad: ${localidad.toLowerCase()},total de hijos: ${hijos}, Edad pareja: ${edadPareja}`;
        }
        
        console.log(compania, plan)

      
       

        // Construir la URL de WhatsApp con el mensaje personalizado
        const telefono = '+5493413151350'; // Número de teléfono predeterminado
        const urlWhatsapp = `https://wa.me/${telefono}?text=${encodeURIComponent(mensajePersonalizado)}`;
console.log(urlWhatsapp);
        // Abrir la URL de WhatsApp en una nueva ventana
        window.open(urlWhatsapp, '_blank');
    });
});






//menu nav abrir y cerrar */
function toggleMenu() {
    var menu = document.getElementById("menu");
    var menuIcon = document.querySelector(".menu-icon");
    menu.classList.toggle("show");
    menuIcon.classList.toggle("active");
}

//color titulo cobertura


// 'Avalian' == #00986B, 
//'Prevencion Salud' == #E10173, 
//'Alianza Medica' == #007EA7, 
//'Omint' == #002583, 
//'Integral Salud' ==#25907E, 
//Britanica Salud o Britanica* ==#E4002B 

const resultados = document.querySelectorAll('.cobertura');


resultados.forEach(valor => {
    const compañia = valor.children[0].textContent;
    const foto = valor.children[1].src
    console.log(valor)

    // Condicionales para cambiar el color dependiendo del nombre de la compañía
    switch (compañia) { 
        case 'Avalian':
            valor.children[0].style.color = '#00986B';
            valor.children[1].src = 'https://res.cloudinary.com/dj3akdhb9/image/upload/v1733678611/avalian_logo-color__1_-removebg-preview_b8ws4i.png'

            break;
        case 'Omint':
            valor.children[0].style.color = '#002583';
            valor.children[0].src = 'https://res.cloudinary.com/dj3akdhb9/image/upload/v1733678476/omint_vxuug2.png'

            break;
        case 'Prevencion Salud':
            valor.children[0].style.color = '#E10173';
            valor.children[1].src = 'https://res.cloudinary.com/dj3akdhb9/image/upload/v1733678477/prevencion_yweoqc.png'

        break;
        case 'Alianza Medica':
            valor.children[0].style.color = '#007EA7';
            valor.children[1].src = 'https://res.cloudinary.com/dj3akdhb9/image/upload/v1733678476/alianza_yh13hv.png'

        break;
        case 'Integral Salud':
            valor.children[0].style.color = '#25907E';
            valor.children[1].src = 'https://res.cloudinary.com/dj3akdhb9/image/upload/v1733678477/integral_q6crrw.png'

        break;
        case 'Britanica Salud':
            valor.children[0].style.color = '#E4002B';
            valor.children[1].src = 'https://res.cloudinary.com/dj3akdhb9/image/upload/v1733678477/britanica_logo_kjpsnf.png'
        break;
        case 'Britanica':
            valor.children[0].style.color = '#E4002B';
            valor.children[1].src = 'https://res.cloudinary.com/dj3akdhb9/image/upload/v1733678477/britanica_logo_kjpsnf.png'

        break;
        case 'DOCTORED':
            valor.children[0].style.color = '#383D8A';
            valor.children[1].src = 'https://res.cloudinary.com/dj3akdhb9/image/upload/v1737159086/doctored-medicina-privada-removebg-preview_1_ol7ikw.png'
        break;
        default:
            // Por defecto, no se cambia el color
            break;
    }
});


//acordion 

document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
  
      button.classList.toggle('active');
  
      if (button.classList.contains('active')) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });
  });
  