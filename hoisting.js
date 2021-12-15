var miNombre = undefined;

console.log(miNombre + 'Soy ese hoisting');

miNombre = 'Mario'



hey();

function hey() {
    console.log('hola ' miNombre);
}