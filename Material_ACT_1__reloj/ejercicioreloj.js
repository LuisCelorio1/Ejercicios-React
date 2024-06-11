        function formateaHora(fecha) {
            let horas = fecha.getHours();
            let minutos = fecha.getMinutes();
            let segundos = fecha.getSeconds();

            horas = horas < 10 ? '0' + horas : horas;
            minutos = minutos < 10 ? '0' + minutos : minutos;
            segundos = segundos < 10 ? '0' + segundos : segundos;

            return horas + ':' + minutos + ':' + segundos;
        }

        function actualizarReloj() {
            setInterval(function() {
                var fechaActual = new Date();
                document.getElementById('divReloj').innerText = formateaHora(fechaActual);
            }, 1000);
        }

        function tiempoVacaciones(fechaFin) {
            var fechaActual = new Date();
            var diferencia = fechaFin - fechaActual;

            var segundos = Math.floor(diferencia / 1000);
            var minutos = Math.floor(segundos / 60);
            var horas = Math.floor(minutos / 60);
            var dias = Math.floor(horas / 24);

            horas %= 24;
            minutos %= 60;
            segundos %= 60;

            var resultado = dias + ' días, ' + horas + ' horas, ' + minutos + ' minutos y ' + segundos + ' segundos';

            document.getElementById('divVacaciones').innerText = resultado;
        }

        document.addEventListener('DOMContentLoaded', function() {
            let fechaFin = new Date("2024-06-27T00:00:00");

            actualizarReloj();

            setInterval(function() {
                tiempoVacaciones(fechaFin);
            }, 1000);

            tiempoVacaciones(fechaFin);
        });


