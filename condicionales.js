const tipoDeSuscripcion = "Basic";

//Switch
switch (tipoDeSuscripcion) {
    case "Free":
        console.log("Solo puedes tomar cursos gratis");
        break;
    case "Basic":
        console.log("Puedes tomar casi todos los curso durante un mes");
        break;
    case "Expert":
        console.log("Puedes tomar casi todos los cursos durante un año");
        break;
    case "ExpertDuo":
        console.log("Puedes tomar todos los cursos tu y alguien mas por un año");
        break;
    default:
        console.log("No tienes suscripcion");
}


//If
if (tipoDeSuscripcion == "Free") {
    console.log("Solo puedes tomar cursos gratis");
} else if (tipoDeSuscripcion = "Basic") {
    console.log("Puedes tomar casi todos los curso durante un mes");
} else if (tipoDeSuscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos durante un año");
} else if (tipoDeSuscripcion == "ExpertDuo") {
    console.log("Puedes tomar todos los cursos tu y alguien mas por un año");
} else {
    console.log("No tienes suscripcion");
}