function incrementAge (edad) { 
    let edadnueva= edad+ 5;
    return edadnueva;
}
 
let edadactual = 30;
let edadnueva = incrementAge(edadactual);

console.log("La edad actual es: " + edadactual);
console.log("La edad incrementada es: " + edadnueva);