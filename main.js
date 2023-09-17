
const error = "no es automata";//mensaje de error


//funcion para ejecutar en el boton
document.getElementById('BotonPedir').addEventListener('click', pedir);

function pedir() {
    //salida(PrimeraLetra());
    compararCadenas();
}

function compararCadenas() {
    // Obtener el valor del textarea por su ID
    var texto = document.getElementById("miTextarea").value.toString();

    // Verificar si el textarea contiene al menos un carácter
    if (texto.length > 0) {
        // Tomar la segunda cadena desde el segundo carácter en adelante
        var segundaCadena = texto.substring(1);

        // Comparar la cadena por defecto con la segunda cadena sin el primer carácter
        var cadenaPorDefecto = "Hola"; // Cambia esto por tu cadena por defecto
        if (cadenaPorDefecto === segundaCadena) {
            alert("Las cadenas son iguales sin el primer carácter.");
        } else {
            alert("Las cadenas son diferentes.");
        }
    } else {
        alert("El área de texto está vacío.");
    }
}

function PrimeraLetra() {
    // Obtener el valor del textarea por su ID
    var texto = document.getElementById("miTextarea").value;

    // Verificar si la cadena está vacía o es nula
    if (texto && texto.length > 0) {
        // Obtener la primera letra y mostrarla
        return texto.charAt(0);
    } else {
        // Si la cadena está vacía o es nula, mostrar un mensaje de error
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
