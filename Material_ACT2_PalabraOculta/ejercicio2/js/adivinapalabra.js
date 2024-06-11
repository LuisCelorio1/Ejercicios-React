class PalabraOculta {
    constructor() {
        this.palabras = [
            ["CERO", "CUATRO", "NUEVE", "DIEZ", "CINE", "ROSA", "CASA", "MESA", "RUTA", "JIRA"],
            ["DIEZSE", "CASERO", "MEDICO", "RUTINA", "JARDIN", "SALIDA", "PELICA", "MUEBLE", "CENTRO", "FIESTA"],
            ["ORDENADO", "JARDINERO", "PROGRAMAR", "ENTENDER", "DIFICIL", "SENCILLO", "EDIFICIO", "MANZANAS", "CAMPEROS", "CARNICERO"]
        ];
        this.palabraActual = "";
        this.aciertos = 0;
        this.jugadas = 0;
        this.utilizadas = [[], [], []]; // Array para las palabras ya utilizadas por longitud
    }

    // Método para seleccionar una palabra al azar y desordenarla
    nuevaPalabra(longitud) {
        let indice;
        switch(longitud) {
            case 4: indice = 0; break;
            case 6: indice = 1; break;
            case 8: indice = 2; break;
            default: return null;
        }

        if (this.utilizadas[indice].length >= this.palabras[indice].length) {
            return null; // No hay más palabras disponibles de esta longitud
        }

        let palabra;
        do {
            palabra = this.palabras[indice][Math.floor(Math.random() * this.palabras[indice].length)];
        } while (this.utilizadas[indice].includes(palabra));

        this.palabraActual = palabra;
        this.utilizadas[indice].push(palabra);
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




