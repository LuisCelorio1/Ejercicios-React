document.addEventListener("DOMContentLoaded", function() {
    const juego = new PalabraOculta();

    const inputLetras = document.getElementById("letras");
    const inputPalabra = document.getElementById("palabra");
    const btnNueva = document.getElementById("nueva");
    const btnSolucion = document.getElementById("solucion");
    const btnFinalizar = document.getElementById("finalizar");
    const resultado = document.getElementById("resultado");
    const porcentaje = document.getElementById("porcentaje");
    const radios = document.getElementsByName("dificultad");

    function getSelectedDificultad() {
        for (let radio of radios) {
            if (radio.checked) {
                return parseInt(radio.value);
            }
        }
        return 4; // Valor por defecto
    }

    function iniciarJuego() {
        const dificultad = getSelectedDificultad();
        const palabraDesordenada = juego.nuevaPalabra(dificultad);
        if (palabraDesordenada === null) {
            finalizarJuego();
            return;
        }
        inputLetras.value = palabraDesordenada;
        inputPalabra.value = "";
        inputPalabra.disabled = false;
        btnNueva.disabled = true;
        btnSolucion.disabled = false;
        resultado.innerHTML = "";
    }

    function finalizarJuego() {
        porcentaje.innerHTML = `Porcentaje de aciertos: ${juego.porcentajeAciertos()}%`;
        porcentaje.style.visibility = "visible";
        btnNueva.disabled = true;
        btnSolucion.disabled = true;
        btnFinalizar.disabled = true;
        inputPalabra.disabled = true;
        resultado.innerHTML = "No hay más palabras disponibles.";
    }

    iniciarJuego();

    inputPalabra.addEventListener("input", function() {
        this.value = this.value.toUpperCase();
        if (juego.verificarPalabra(this.value)) {
            resultado.innerHTML = `Has acertado la palabra ${juego.obtenerPalabra()}`;
            btnNueva.disabled = false;
            btnSolucion.disabled = true;
            inputPalabra.disabled = true;
        } else {
            resultado.innerHTML = "";
            btnNueva.disabled = true;
            btnSolucion.disabled = false;
        }
    });

    btnNueva.addEventListener("click", function() {
        iniciarJuego();
    });

    btnSolucion.addEventListener("click", function() {
        resultado.innerHTML = `La solución es ${juego.obtenerPalabra()}`;
        btnNueva.disabled = false;
        btnSolucion.disabled = true;
        inputPalabra.disabled = true;
    });

    btnFinalizar.addEventListener("click", function() {
        finalizarJuego();
    });

    for (let radio of radios) {
        radio.addEventListener("change", function() {
            iniciarJuego();
        });
    }
});

