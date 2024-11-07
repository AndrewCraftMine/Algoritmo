function verificarRespuesta(pregunta, respuestaCorrecta) {
    const opciones = document.getElementsByName(pregunta);
    let respuestaSeleccionada = null;

    opciones.forEach((opcion) => {
        if (opcion.checked) {
            respuestaSeleccionada = opcion.value;
        }
        opcion.disabled = true;
    });

    const resultadoDiv = document.getElementById(`resultado-${pregunta}`);
    resultadoDiv.classList.remove("oculto");

    if (respuestaSeleccionada === respuestaCorrecta) {
        resultadoDiv.textContent = "¡Correcto!";
        resultadoDiv.classList.add("correcto");
    } else {
        resultadoDiv.textContent = "Incorrecto";
        resultadoDiv.classList.add("incorrecto");
    }

    opciones.forEach((opcion) => {
        const label = opcion.parentElement;
        if (opcion.value === respuestaCorrecta) {
            label.classList.add("correcto");
        } else if (opcion.checked) {
            label.classList.add("incorrecto");
        }
    });

    verificarRespuestasCompletas();
}

function verificarRespuestasCompletas() {
    const preguntas = document.querySelectorAll('.example');
    let todasRespondidas = true;

    preguntas.forEach((pregunta) => {
        const opciones = pregunta.querySelectorAll('input[type="radio"]');
        const algunaSeleccionada = Array.from(opciones).some(opcion => opcion.checked);

        if (!algunaSeleccionada) {
            todasRespondidas = false;
        }
    });

    if (todasRespondidas) {
        document.getElementById('continuar').classList.remove('oculto');
    }
}