// Templeate Strings o Concatenación

const cliente = "Ernesto"
const saldo = 500

console.log('El cliente : ' + cliente + ' tiene un saldo de: $' + saldo);
console.log(`El cliente: ${cliente} tiene un saldo de: $${saldo}`);

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

const { nombre } = producto
const { precio } = producto

console.log(`El producto: ${nombre}, tiene un precio de $${precio}`);