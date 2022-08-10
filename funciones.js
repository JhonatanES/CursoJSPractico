function nombreCompleto(name , lastName){
    return name + ' ' + lastName;
}

nombreCompleto('Pedro', 'Ramos');


function saludar(nombre, apellido, username){
    const completeName = nombre + ' ' + apellido;
    const nickName = username;

    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickName +".");
}