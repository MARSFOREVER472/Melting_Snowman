// VARIABLES A DECLARAR EN ESTE APARTADO:

const words = ['DANIEL', 'JADUE', 'PARTIDO', 'COMUNISTA', 'CHILENO', 'ACCION', 'PROLETARIA'];

// FUNCIÓN A DEFINIR EN ESTE APARTADO...

function elegirPalabraAleatoria()
{
    return words[Math.floor(Math.random() * words.length)];
}

function inicializarPartida()
{
    palabrasAAdivinar = selectRandomWord();
    palabrasAdivinadas = Array(palabrasAAdivinar.length).fill('_');
    adivinanzasErroneas = 0;
}

// GESTIONANDO ACTUALIZACIONES...

updateWordDisplay();
updateMeltingSnowmanGraphic();