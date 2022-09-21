class Seguro {
    constructor(id, tipo, precio ){
        this.id = id;
        this.tipo = tipo;
        this.precio = precio;
    }

}

let misSeguros = [];

const iva = 1.21;
let enviar = document.getElementById("enviar");
console.log(enviar);
enviar.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("hola");
    let inputs = e.target.children;
    menu(inputs[0].value, inputs[1].value);
});


function menu (opcion, monto){
    switch (parseInt(opcion)) {
        case 1:
            if (monto >= 50000 && monto <= 200000) {
                if (misSeguros.length === 0) {
                    misSeguros.push(new Seguro(0, "celular", calcularPrecioAPagar(monto)));
                }else {
                    misSeguros.push(new Seguro(misSeguros.length + 1, "celular",calcularPrecioAPagar(monto)));
                }
                alert("El valor que debe abonar es: $ " + calcularPrecioAPagar(monto));
            }else {
                alert("Ingrese una suma correcta");
            }
            break;
        case 2:
            if (monto >= 10000 && monto <= 80000) {
                if (misSeguros.length === 0) {
                    misSeguros.push(new Seguro(0, "bolso", calcularPrecioAPagar(monto)));
                }else {
                    misSeguros.push(new Seguro(misSeguros.length + 1, "bolso",calcularPrecioAPagar(monto)));
                }
                alert("El valor que debe abonar es: $ " + calcularPrecioAPagar(monto));
            }else {
                alert("Ingrese una suma correcta");
            }
            break;
        case 3:
            if (monto >= 50000 && monto <= 150000) {
                if (misSeguros.length === 0) {
                    misSeguros.push(new Seguro(0, "bicicleta", calcularPrecioAPagar(monto)));
                }else {
                    misSeguros.push(new Seguro(misSeguros.length + 1, "bicicleta",calcularPrecioAPagar(monto)));
                }
                alert("El valor que debe abonar es: $ " + calcularPrecioAPagar(monto));
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
    
}

function calcularPrecioAPagar(producto) {
    let premio = (producto*0.05) * iva;
        return premio;
}


function verSegurosContratados(misSeguros){

    let ul = document.createElement("ul");
    ul.className = "list-group list-group-flush";
    let card = document.getElementById("tuseguros");
    console.log(misSeguros);

    misSeguros.forEach(item => {
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = `Tipo de seguro ${item.tipo} - Precio: $${item.precio}`;
    
        ul.append(li);

    });
    card.append(ul);
}