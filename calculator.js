console.log("we are conected bro")

// Paso 1: Crear las variables donde vamos a almacenar los datos que el usuario ingrese

let first_number = 0;
let second_number = 0;
let result = 0

// Guardamos los datos en las variables inicializadas

first_number = parseInt(prompt("Ingresa tu primer numero"));
second_number = parseInt(prompt("Ingresa tu segundo numero"));

// Preguntar que tipo de operacion matematica

let typeMathOperation = ""

typeMathOperation = prompt("Ingresa el tipo de operación (sumar, restar, multiplicar, dividir)")

// Validamos si ingresó un tipo de operación
if (typeMathOperation !== "") {

    // Si la operación es sumar
    if (typeMathOperation === "sumar") {
        result = first_number + second_number
        alert("El resultado de " + first_number + " + " + second_number + " es " + result)

    // Si la operación es restar
    } else if(typeMathOperation === "restar"){ 
        result = first_number - second_number
        alert("El resultado de " + first_number + " - " + second_number + " es " + result)

    // Si la operacion es dividir
    } else if(typeMathOperation === "dividir") {
        result = first_number / second_number
        alert("El resultado de " + first_number + " / " + second_number + " es " + result)

    // Si la operacion es multiplicar
    } else if(typeMathOperation === "multiplicar") {
        result = first_number * second_number
        alert("El resultado de " + first_number + " X " + second_number + " es " + result)
    } else {
        alert("El tipo de operación no es valido :(")
    }
} else {
    alert("Ingresa el tipo de operacion PENDEJ@")
    
}

