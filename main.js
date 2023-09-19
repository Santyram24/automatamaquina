
const error = "no es automata";//mensaje de error
//letras validas para la cadena
const letraQ1 = "ABC";
const letraQ2 = "DE";
const letraQ3 = "FG";
const letraQ4 = "HI";

//combinacion validas para la cadena
const Q1 = ["0"];
const Q2 = ["1", "00"];
const Q3 = ["000", "10", "01"];
const Q4 = ["11", "100", "001", "010", "0000"];


//funcion para ejecutar en el boton
document.getElementById('BotonPedir').addEventListener('click', pedir);

function pedir() {
    //salida();
    compararCadenas();

}

function compararCadenas() {
    // Obtén el valor del textarea
    var cadena = document.getElementById("miTextarea").value.toString();

    // Obtén el primer carácter del string
    let primerCaracter = cadena.charAt(0);
    //quita el primer caracter y crea una nueva cadena
    let monedas = cadena.substring(1);


    // Verifica si el primer carácter está en el segundo string
    if (letraQ1.includes(primerCaracter) && Q1.includes(monedas)) {
        salida(primerCaracter);
    } else if (letraQ2.includes(primerCaracter) && Q2.includes(monedas)) {
        salida(primerCaracter);
    } else if (letraQ3.includes(primerCaracter) && Q3.includes(monedas)) {
        salida(primerCaracter);
    } else if (letraQ4.includes(primerCaracter) && Q4.includes(monedas)) {
        salida(primerCaracter);
    } else {
        alert(error);
    }
}


function salida(producto) {
    // Obtener el elemento div con la clase "salida"
    var div = document.querySelector(".salida");

    // Borra el contenido actual del div al establecer innerHTML como una cadena vacía
    div.innerHTML = "";

    // Crea un elemento de imagen
    var imagen = document.createElement("img");

    // Utiliza un switch case para asignar la ruta de la imagen según el producto
    switch (producto) {
        case 'A':
            imagen.src = "img/Sparkies.png";
            break;
        case 'B':
            imagen.src = "img/Quipitos.png";
            break;
        case 'C':
            imagen.src = "img/Galletas Noel Wafer x 18.png";
            break;
        case 'D':
            imagen.src = "img/Galletas Milo.png";
            break;
        case 'E':
            imagen.src = "img/Galletas Cocosette.png";
            break;
        case 'F':
            imagen.src = "img/Galletas Ramo.png";
            break;
        case 'G':
            imagen.src = "img/Nucita.png";
            break;
        case 'H':
            imagen.src = "img/Tubito - Leche Condensada.png";
            break;
        case 'I':
            imagen.src = "img/Chocolatina Gol.png";
            break;
        default:
            // Si el producto no es válido, muestra una alerta y sale de la función
            alert("Producto no válido");
            return;
    }

    // Establece el ancho de la imagen al 100%
    imagen.style.width = "100%";

    // Agrega la imagen como hijo del div
    div.appendChild(imagen);
}
