let opcion = parseInt(prompt("Ingrese la opcion del producto que desea asegurar: \n1- Celular \n2- Bolso \n3- Salir del programa"));
const iva = 1.21;

switch (opcion) {
    case 1:
        let celular = parseInt(prompt("Ingrese la suma que desee asegurar: entre $50.000 y $200.000"));
        if (celular >= 50000 && celular <= 200000) {
            alert("El valor que debe abonar es: $ " + calcularPrecioAPagar(celular));
        }else {
            alert("Ingrese una suma correcta");
        }
        break;
    case 2:
        let bolso = parseInt(prompt("Ingrese la suma que desee asegurar: entre $10.000 y $80.000 "));
        if (bolso >= 10000 && bolso <= 80000) {
            alert("El valor que debe abonar es: $ " + calcularPrecioAPagar(bolso));
        }else {
            alert("Ingrese una suma correcta");
        }
        break;
    case 3:
            alert("Gracias por utilizar nuestro cotizador");
        break;

    default:
        alert("Ingrese una opcion valida");
        break;
}


function calcularPrecioAPagar(celular) {
    let premio = (celular*0.05) * iva;
        return premio;
}

function calcularPrecioAPagar(bolso) {
    let premio = (bolso*0.05) * iva;
        return premio;
}