var computadora = 'Papel';

var persona = 'Piedra';

if (persona === 'Piedra' && computadora === 'Papel') {
    console.log('Gana la computadora.');

} else if (persona === 'Papel' && computadora === 'Tijera') {
    console.log('Gana la computadora');

} else if (persona === 'Tijera' && computadora === 'Piedra') {
    console.log('Gana la computadora');

} else if (persona === computadora) {
    console.log('Empate');
    
} else {
    console.log('Gana el usuario');
}

