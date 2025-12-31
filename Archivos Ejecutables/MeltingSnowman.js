// VARIABLES A DECLARAR EN ESTE APARTADO:

const words = ['DANIEL', 'JADUE', 'PARTIDO', 'COMUNISTA', 'CHILENO', 'ACCION', 'PROLETARIA'];

// FUNCIÓN A DEFINIR EN ESTE APARTADO...

function elegirPalabraAleatoria()
{
    return words[Math.floor(Math.random() * words.length)];
}