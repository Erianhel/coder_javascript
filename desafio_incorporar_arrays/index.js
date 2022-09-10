class Seguro {
    constructor(id, tipo, precio ){
        this.id = id;
        this.tipo = tipo;
        this.precio = precio;
    }

}

let misSeguros = [];

let opcion = parseInt(prompt("Ingrese la opcion del producto que desea asegurar: \n1- Celular \n2- Bolso  \n3- Bicicleta \n4- Mis seguros \n5- Salir del programa"));
const iva = 1.21;


while (opcion !== 5 ) {

switch (opcion) {
    case 1:
        let celular = parseInt(prompt("Ingrese la suma que desee asegurar: entre $50.000 y $200.000"));
        if (celular >= 50000 && celular <= 200000) {
            if (misSeguros.length === 0) {
                misSeguros.push(new Seguro(0, "celular", calcularPrecioAPagar(celular)));
            }else {
                misSeguros.push(new Seguro(misSeguros.length + 1, "celular",calcularPrecioAPagar(celular)));
            }
            alert("El valor que debe abonar es: $ " + calcularPrecioAPagar(celular));
        }else {
            alert("Ingrese una suma correcta");
        }
        break;
    case 2:
        let bolso = parseInt(prompt("Ingrese la suma que desee asegurar: entre $10.000 y $80.000 "));
        if (bolso >= 10000 && bolso <= 80000) {
            if (misSeguros.length === 0) {
                misSeguros.push(new Seguro(0, "bolso", calcularPrecioAPagar(bolso)));
            }else {
                misSeguros.push(new Seguro(misSeguros.length + 1, "bolso",calcularPrecioAPagar(bolso)));
            }
            alert("El valor que debe abonar es: $ " + calcularPrecioAPagar(bolso));
        }else {
            alert("Ingrese una suma correcta");
        }
        break;
    case 3:
        let bicicleta = parseInt(prompt("Ingrese la suma que desee asegurar: entre $50.000 y $150.000 "));
        if (bicicleta >= 50000 && bicicleta <= 150000) {
            if (misSeguros.length === 0) {
                misSeguros.push(new Seguro(0, "bicicleta", calcularPrecioAPagar(bicicleta)));
            }else {
                misSeguros.push(new Seguro(misSeguros.length + 1, "bicicleta",calcularPrecioAPagar(bicicleta)));
            }
            alert("El valor que debe abonar es: $ " + calcularPrecioAPagar(bicicleta));
        }else {
            alert("Ingrese una suma correcta");
        }
        break;
    case 4:
            verSegurosContratados(misSeguros);
        break;
    case 5:
            alert("Gracias por utilizar nuestro cotizador");
        break;

    default:
        alert("Ingrese una opcion valida");
        break;
    }
    opcion = parseInt(prompt("Ingrese la opcion del producto que desea asegurar: \n1- Celular \n2- Bolso  \n3- Bicicleta \n4- Mis seguros \n5- Salir del programa"));
}

function calcularPrecioAPagar(producto) {
    let premio = (producto*0.05) * iva;
        return premio;
}


function verSegurosContratados(misSeguros){
    misSeguros.forEach(item => {
        let mensaje = `Tipo de seguro ${item.tipo} - Precio: $${item.precio}`
        alert(mensaje);
    });
}





