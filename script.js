
const botonesVerMas = document.querySelectorAll('.btn-ver-mas');

function alternarInformacion (event) {

    const boton = event.target;

    const infoExtra = boton.previousElementSibling;


    infoExtra.classList.toggle('oculto');

    if(infoExtra.classList.contains('oculto')){
        boton.textContent = 'Ver +';   
    } else {
        boton.textContent = 'Ver menos';
    }
};

botonesVerMas.forEach(function(boton) {
    boton.addEventListener('click', alternarInformacion);
});

const boton2 = document.querySelectorAll('.btn-dos')

function alternarBoton (event) {

    const boton = event.target;

    const infoExtra = boton.previousElementSibling;

    infoExtra.classList.toggle('oculto');

    if (infoExtra.classList.contains('oculto')){
        boton.textContent = 'Ver mas servicios';
    } else {
        boton.textContent = 'Contraer servicios'
    }
};

boton2.forEach(function(boton) {
    boton.addEventListener('click', alternarBoton);
});