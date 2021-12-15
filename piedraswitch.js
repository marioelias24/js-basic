// 0 = papel, 1 = piedra, 2 = tijera

var persona = 1;
var computadora = 2;


switch (persona) {
    case 0:   // 0 es papel
        switch(computadora){
            case 0: //0 es papel
                console.log('Empate');
                break;
            case 1: //1 es piedra
                console.log('Gana usuario');
                break;
            default: //En este caso default representa 2 = tijera
                console.log('Gana computadora');
        }
    case 1:   // 1 es piedra
        switch(computadora){
            case 0: //0 es papel
            console.log('Gana computadora');
            break;
            case 1: //1 es piedra
            console.log('Empate');
            break;
            default: //En este caso default representa 2 = tijera
                console.log('Gana usuario');
        }
    case 2:   // 2 es tijera
        switch(computadora){
            case 0: //0 es papel
            console.log('Gana usuario');
            break;
            case 1: //1 es piedra
            console.log('Gana computadora');
            break;
            default: //En este caso default representa 2 = tijera
                console.log('Empate');
        }
    default:
        console.log('Ingrese valores correctos');
}