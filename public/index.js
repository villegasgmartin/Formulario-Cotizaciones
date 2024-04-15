

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




//agregarle el link de ws a cada plan
const masInfoBtn = document.querySelector('.mas-info-btn');
masInfoBtn.addEventListener('click', (event) => {
        // Obtener el nombre de la compañía y el nombre del plan
            const compañia = event.target.parentNode.querySelector('.nombre-comp').textContent;
             const plan = event.target.parentNode.querySelector('.plan').textContent;
    
        // Construir el mensaje personalizado
            const mensajePersonalizado = `Buenas tardes, quisiera averiguar sobre la cobertura ${compañia}, el plan ${plan}.`;
    
        // Construir la URL de WhatsApp con el mensaje personalizado
            const telefono = '+5493413151350'; // Número de teléfono predeterminado
            const urlWhatsapp = `https://wa.me/${telefono}?text=${encodeURIComponent(mensajePersonalizado)}`;
    
         // Abrir la URL de WhatsApp en una nueva ventana
            window.open(urlWhatsapp, '_blank');
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
console.log(resultados)

resultados.forEach(valor => {
    const compañia = valor.children[0].textContent;
    console.log(compañia)

    // Condicionales para cambiar el color dependiendo del nombre de la compañía
    switch (compañia) {
        case 'Avalian':
            valor.children[0].style.color = '#00986B';
            break;
        case 'Omint':
            valor.children[0].style.color = '#002583';
            break;
        case 'Prevencion Salud':
            valor.children[0].style.color = '#E10173';
        break;
        case 'Alianza Medica':
            valor.children[0].style.color = '#007EA7';
        break;
        case 'Integral Salud':
            valor.children[0].style.color = '#25907E';
        break;
        case 'Omint':
            valor.children[0].style.color = '#002583';
        break;
        case 'Britanica Salud':
            valor.children[0].style.color = '#E4002B';
        break;
        case 'Britanica':
            valor.children[0].style.color = '#E4002B';
        break;
        default:
            // Por defecto, no se cambia el color
            break;
    }
});
