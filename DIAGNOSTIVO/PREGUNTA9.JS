function generateGreeting(nombre) {
    return "¡Hola, " + nombre + "! Bienvenido.";
}

let nombreUsuario = "Pablo";
let saludo = generateGreeting(nombreUsuario);

console.log(saludo);
