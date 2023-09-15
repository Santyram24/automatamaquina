
const error = "no es automata";//mensaje de error


//funcion para ejecutar en el boton
document.getElementById('BotonPedir').addEventListener('click', pedir);

function pedir() {
    salida('I');
}

function salida(producto) {

    var div = document.querySelector(".salida");
    var imagen = document.createElement("img");

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
            alert(error);
    }

    imagen.style.width = "100%";
    div.appendChild(imagen);

}