// VARIABLES A DECLARAR EN ESTE APARTADO:

const words = ['DANIEL', 'JADUE', 'PARTIDO', 'COMUNISTA', 'CHILENO', 'ACCION', 'PROLETARIA'];

// FUNCIONES A DEFINIR EN ESTE APARTADO...

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

function updateWordDisplay()
{
    const contenedorPalabras = document.querySelector('.word');
    contenedorPalabras.innerText = palabrasAdivinadas.join(' ');
}

// GESTIONANDO ACTUALIZACIONES...

updateWordDisplay();
updateMeltingSnowmanGraphic();

// ELIMINANDO BOTONES GENERADOS AUTOMÁTICAMENTE...

const contenedorLetras = document.querySelector('.letters');

while (contenedorLetras.firstChild)
{
    contenedorLetras.removeChild(contenedorLetras.firstChild);
}

// GENERANDO LOS BOTONES DE CADA LETRA...

for (let i = 0; i < 26; i++)
{
    const letra = String.fromCharCode(65 + i);
    const boton = document.createElement('button');
    boton.innerText = letra;
    boton.addEventListener('click', function () {
        handleGuess(letra);
    });

    contenedorLetras.appendChild(boton);
}

// ELIMINANDO ALGUNOS DE LOS MENSAJES ACERCA DE LOS RESULTADOS DE UNA PARTIDA...

const contenedorMensaje = document.querySelector('.message');
contenedorMensaje.innerText = '';