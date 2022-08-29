
let numero = parseInt(prompt("Ingrese un numero para continuar:"));


for (let i = 0; i <= 10; i++) {
    let sumar = numero + i;
    let mensaje = `${numero} + ${i} = ${sumar}`;

    alert(mensaje);
}