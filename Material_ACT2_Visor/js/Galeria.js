class Galeria {
    constructor(cantidadImagenes) {
        this.imagenes = [];
        this.cursor = 0;
        for (let i = 1; i <= cantidadImagenes; i++) {
            this.imagenes.push(`foto${i}.jpg`);
        }
        this.mostrarImagenAleatoria();
        this.actualizarBotones();
    }

    mostrarImagenAleatoria() {
        this.cursor = Math.floor(Math.random() * this.imagenes.length);
        this.mostrarImagen();
    }

    mostrarPrimeraImagen() {
        this.cursor = 0;
        this.mostrarImagen();
    }

    mostrarUltimaImagen() {
        this.cursor = this.imagenes.length - 1;
        this.mostrarImagen();
    }

    mostrarImagenAnterior() {
        if (this.cursor > 0) {
            this.cursor--;
            this.mostrarImagen();
        }
    }

    mostrarImagenSiguiente() {
        if (this.cursor < this.imagenes.length - 1) {
            this.cursor++;
            this.mostrarImagen();
        }
    }

    mostrarImagen() {
        const imagenDiv = document.querySelector('#imagen');
        imagenDiv.style.backgroundImage = `url(images/${this.imagenes[this.cursor]})`;
    }

    actualizarBotones() {
        const primeraBtn = document.querySelector('#primera');
        const anteriorBtn = document.querySelector('#anterior');
        const siguienteBtn = document.querySelector('#siguiente');
        const ultimaBtn = document.querySelector('#ultima');

        if (this.cursor === 0) {
            primeraBtn.classList.add('deshabilitado');
            anteriorBtn.classList.add('deshabilitado');
        } else {
            primeraBtn.classList.remove('deshabilitado');
            anteriorBtn.classList.remove('deshabilitado');
        }

        if (this.cursor === this.imagenes.length - 1) {
            siguienteBtn.classList.add('deshabilitado');
            ultimaBtn.classList.add('deshabilitado');
        } else {
            siguienteBtn.classList.remove('deshabilitado');
            ultimaBtn.classList.remove('deshabilitado');
        }
    }
}

module.exports = Galeria;
