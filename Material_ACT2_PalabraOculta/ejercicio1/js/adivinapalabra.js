class PalabraOculta {
    constructor() {
        this.palabras = ["ASTURIAS", "MURCIELAGO", "PROGRAMACION", "ORDENADOR", "VARIABLE", "FUNCION"];
        this.palabraActual = "";
        this.aciertos = 0;
        this.jugadas = 0;
        this.utilizadas = [];
    }

    // Método para seleccionar una palabra al azar y desordenarla
    nuevaPalabra() {
        if (this.utilizadas.length >= this.palabras.length) {
            return null; // No hay más palabras disponibles
        }

        let palabra;
        do {
            palabra = this.palabras[Math.floor(Math.random() * this.palabras.length)];
        } while (this.utilizadas.includes(palabra));

        this.palabraActual = palabra;
        this.utilizadas.push(palabra);
        this.jugadas++; // Contar una nueva jugada al generar una nueva palabra
        return this.desordenar(this.palabraActual);
    }

    // Método para desordenar una palabra
    desordenar(palabra) {
        return palabra.split('').sort(() => Math.random() - 0.5).join('');
    }

    // Método para verificar si la palabra ingresada es correcta
    verificarPalabra(palabra) {
        if (palabra.toUpperCase() === this.palabraActual) {
            this.aciertos++;
            return true;
        }
        return false;
    }

    // Método para obtener la palabra correcta
    obtenerPalabra() {
        return this.palabraActual;
    }

    // Método para calcular el porcentaje de aciertos
    porcentajeAciertos() {
        return this.jugadas === 0 ? 0 : Math.round((this.aciertos / this.jugadas) * 100);
    }
}


