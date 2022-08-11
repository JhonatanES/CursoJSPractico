const tipoDeSuscripciones = {
    free: "Solo puede tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos por un mes",
    expert: "Puedes tomar casi todos los cursos por un año",
    expertduo: "Puedes tomat todos los cursos durante un año",
}

function validarTipoSuscripcion (suscripcion) {
    if (tipoDeSuscripciones[suscripcion]) {
        console.log(tipoDeSuscripciones[suscripcion]);
        return; //Para finalizar validacion
    }

    console.warn("Este tipo de suscripcion no existe");
}