class Seguro {
    constructor(id, tipo, precio ){
        this.id = id;
        this.tipo = tipo;
        this.precio = precio;
    }

}

let misSeguros = [];
let botonEliminarTodo = document.getElementById("eliminarTodo");

botonEliminarTodo.addEventListener("click", () => eliminarTodo());

const iva = 1.21;
let enviar = document.getElementById("enviar");
console.log(enviar);
enviar.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputs = e.target.children;
    menu(inputs[0].value, inputs[1].value);
});


function menu (opcion, monto){
    switch (parseInt(opcion)) {
        case 1:
            if (monto >= 50000 && monto <= 200000) {
                if (misSeguros.length === 0) {
                    misSeguros.push(new Seguro(0, "celular", calcularPrecioAPagar(monto)));
                    localStorage.setItem("misSeguros", JSON.stringify(misSeguros));
                }else {
                    misSeguros.push(new Seguro(misSeguros.length + 1, "celular",calcularPrecioAPagar(monto)));
                    localStorage.setItem("misSeguros", JSON.stringify(misSeguros));
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
                    localStorage.setItem("misSeguros", JSON.stringify(misSeguros));
                }else {
                    misSeguros.push(new Seguro(misSeguros.length + 1, "bolso",calcularPrecioAPagar(monto)));
                    localStorage.setItem("misSeguros", JSON.stringify(misSeguros));
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
                    localStorage.setItem("misSeguros", JSON.stringify(misSeguros));
                }else {
                    misSeguros.push(new Seguro(misSeguros.length + 1, "bicicleta",calcularPrecioAPagar(monto)));
                    localStorage.setItem("misSeguros", JSON.stringify(misSeguros));
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
    card.innerHTML = "";
    console.log(misSeguros);

    misSeguros.forEach(item => {
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = `Tipo de seguro ${item.tipo} - Precio: $${item.precio}
    <input type="submit" class="btn btn-danger btn-sm mt-3" id="eliminar${item.id}" value="Eliminar">
    `;
    
        ul.append(li);
        card.append(ul);

        let boton = document.getElementById(`eliminar${item.id}`);
        boton.addEventListener("click", () => eliminarSeguro(item.id));
    });  

}

function eliminarSeguro(idSeguro){
    misSeguros = JSON.parse(localStorage.getItem("misSeguros"));
    let aux = misSeguros.filter((item) => item.id != idSeguro);
    misSeguros = aux;
    localStorage.setItem("misSeguros", JSON.stringify(aux));
    verSegurosContratados(misSeguros);
}

function eliminarTodo(){
    localStorage.clear();
    misSeguros = [];
    verSegurosContratados(misSeguros);
}