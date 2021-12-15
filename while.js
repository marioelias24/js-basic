var estudiantess = ['Maria', 'Sergio', 'Rosa', 'Daniel'];

function saludarEstudiantes(estudiantess) {
    console.log(`Hola, $(estudiantess)`);
  }
  
  while(estudiantess.length > 0){
    var estudiante = estudiantess.shift();
    saludarEstudiantes(estudiantess);
  }