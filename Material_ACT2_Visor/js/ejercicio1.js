document.addEventListener('DOMContentLoaded', function () {
    const galeria = new Galeria(7);
    const imagenDiv = document.querySelector('#imagen');
    const primeraBtn = document.querySelector('#primera');
    const anteriorBtn = document.querySelector('#anterior');
    const siguienteBtn = document.querySelector('#siguiente');
    const ultimaBtn = document.querySelector('#ultima');

    primeraBtn.addEventListener('click', function (event) {
        event.preventDefault();
        galeria.mostrarPrimeraImagen();
        actualizarBotones();
    });

    anteriorBtn.addEventListener('click', function (event) {
        event.preventDefault();
        galeria.mostrarImagenAnterior();
        actualizarBotones();
    });

    siguienteBtn.addEventListener('click', function (event) {
        event.preventDefault();
        galeria.mostrarImagenSiguiente();
        actualizarBotones();
    });

    ultimaBtn.addEventListener('click', function (event) {
        event.preventDefault();
        galeria.mostrarUltimaImagen();
        actualizarBotones();
    });

    function actualizarBotones() {
        if (galeria.cursor === 0) {
            primeraBtn.classList.add('deshabilitado');
            anteriorBtn.classList.add('deshabilitado');
        } else {
            primeraBtn.classList.remove('deshabilitado');
            anteriorBtn.classList.remove('deshabilitado');
        }

        if (galeria.cursor === galeria.imagenes.length - 1) {
            siguienteBtn.classList.add('deshabilitado');
            ultimaBtn.classList.add('deshabilitado');
        } else {
            siguienteBtn.classList.remove('deshabilitado');
            ultimaBtn.classList.remove('deshabilitado');
        }
    }

    function mostrarImagen() {
        imagenDiv.style.backgroundImage = `url(${galeria.imagenes[galeria.cursor]})`;
    }

    document.addEventListener('DOMContentLoaded', function () {
        const galeria = new Galeria(7);
        const imagenDiv = document.querySelector('#imagen');
        const primeraBtn = document.querySelector('#primera');
        const anteriorBtn = document.querySelector('#anterior');
        const siguienteBtn = document.querySelector('#siguiente');
        const ultimaBtn = document.querySelector('#ultima');
    
        // ...
    
        document.addEventListener('keydown', function (event) {
            if (event.code === 'ArrowRight') {
                galeria.mostrarImagenSiguiente();
                actualizarBotones();
            } else if (event.code === 'ArrowLeft') {
                galeria.mostrarImagenAnterior();
                actualizarBotones();
            }
        });
    
        // ...
    });
    
});
