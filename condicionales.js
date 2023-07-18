// Ejercicio uno

let pregunta = prompt("Eres bellisimo: Si o No: ");
if (pregunta == "Si") {
    alert("Ciertamente");
} else alert("No te creo");

// Ejercicio dos y tres

const numero = parseInt(prompt('Ingresa un número:'));
if (isNaN(numero)) {
    alert('Por favor, ingresa un número válido.');
} else {
    if (numero % 2 === 0) {
    alert(numero + ' es divisible entre 2 por lo tanto es par.');
        } else alert(numero + ' no es divisible entre 2 por lo tanto es impar.');
}

// Ejercicio tres


