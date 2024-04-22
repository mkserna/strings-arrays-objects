// --------------------------------------------------------------
// -------------------------Reto-1--------------------------------

/*let usserName = prompt("Ingresa tu nombre y apellido: ").toLowerCase()

let nameAndLastname = usserName.split(" ")
console.log(nameAndLastname);

let name = nameAndLastname[0]
let lastname = nameAndLastname[1]

let nameUsser = name.slice(0, 3)
let lastNameUsser = lastname.slice(0, 3)

let usser = nameUsser + lastNameUsser
let email = usser + "@myDomain.com"

const ussers = {
    usser : email
}

console.log(ussers);*/

// --------------------------------------------------------------
// -------------------------Reto-2-------------------------------

/*function validatePassword(password) {
    if (password.length < 8) {
        return "La contraseña debe tener al menos 8 caracteres.";
    }

    if (!/\d/.test(password)) {
        return "La contraseña debe contener al menos un número.";
    }

    if (!/[a-zA-Z]/.test(password)) {
        return "La contraseña debe contener al menos una letra.";
    }

    if (!/[!@#$%^&*()+=_\-{}\[\]:;"'?><,.|\/\\~`]/.test(password)) {
        return "La contraseña debe contener al menos un caracter especial.";
    }

    return "Contraseña segura";
}

let passwordUsuario = prompt("Ingrese su contraseña:");

let resultado = validatePassword(passwordUsuario);

alert(resultado);*/

// --------------------------------------------------------------
// -------------------------Reto-3--------------------------------

/*function validateEmail(email) {
    if (!/^[\w.-]+@[a-zA-Z_-]+\.[a-zA-Z]+$/.test(email)) {
        return "Correo electrónico inválido";
    }
    return "Correo electrónico válido";
}

let emailUsuario = prompt("Ingrese su correo electrónico:");
let resultado = validateEmail(emailUsuario);

alert(resultado);*/
