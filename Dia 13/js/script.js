let idBaraja = '';
let turnoActual = 1;
let manoJugador1 = [];
let manoJugador2 = [];
const totalCartasPorJugador = 2;
//Elementos del DOM
const menuDiv = document.getElementById('menu');
const juegoDiv = document.getElementById('juego');
const reglasDiv = document.getElementById('reglas');
const comoJugarDiv = document.getElementById('como-jugar');
const cartasJugador1Div = document.getElementById('jugador1-cartas');
const cartasJugador2Div = document.getElementById('jugador2-cartas');
const cartasDisponiblesDiv = document.getElementById('cartas-disponibles');
const turnoInfoP = document.getElementById('turno-info');
const resultadoP = document.getElementById('resultado');
const botonRepartir = document.getElementById('repartir-cartas-btn');
const botonReiniciar = document.getElementById('reiniciar-juego-btn');
const botonIniciarJuego = document.getElementById('iniciar-juego-btn');
const botonVerReglas = document.getElementById('ver-reglas-btn');
const botonComoJugar = document.getElementById('como-jugar-btn');
const botonVolverDesdeReglas = document.getElementById('volver-menu-desde-reglas-btn');
const botonVolverDesdeComoJugar = document.getElementById('volver-menu-desde-como-jugar-btn');
function iniciarJuego() {
    menuDiv.style.display = 'none';
    juegoDiv.style.display = 'block';
    iniciarBaraja();
}
function mostrarReglas() {
    menuDiv.style.display = 'none';
    reglasDiv.style.display = 'block';
}
function mostrarComoJugar() {
    menuDiv.style.display = 'none';
    comoJugarDiv.style.display = 'block';
}
function volverAlMenu() {
    reglasDiv.style.display = 'none';
    comoJugarDiv.style.display = 'none';
    menuDiv.style.display = 'block';
}
async function iniciarBaraja() {
    const respuesta = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/');
    const datos = await respuesta.json();
    idBaraja = datos.deck_id;
    botonRepartir.style.display = 'inline';
    botonReiniciar.style.display = 'none';
    turnoInfoP.textContent = "Turno de: Jugador 1";
}
async function repartirCartas() {
    const respuesta = await fetch(`https://deckofcardsapi.com/api/deck/${idBaraja}/draw/?count=5`);
    const datos = await respuesta.json();
    cartasDisponiblesDiv.innerHTML = '';
    datos.cards.forEach(carta => {
        const imagenCarta = document.createElement('img');
        imagenCarta.src = carta.image;
        imagenCarta.alt = `${carta.value} de ${carta.suit}`;
        imagenCarta.addEventListener('click', () => seleccionarCarta(carta));
        cartasDisponiblesDiv.appendChild(imagenCarta);
    });
}
function seleccionarCarta(carta) {
    if (turnoActual === 1) {
        manoJugador1.push(carta);
        mostrarCartas(manoJugador1, cartasJugador1Div);
        if (manoJugador1.length === totalCartasPorJugador) {
            turnoActual = 2;
            turnoInfoP.textContent = "Turno de: Jugador 2";
        }
    } else {
        manoJugador2.push(carta);
        mostrarCartas(manoJugador2, cartasJugador2Div);
        if (manoJugador2.length === totalCartasPorJugador) {
            determinarGanador();
        }
    }
    cartasDisponiblesDiv.innerHTML = '';
}
function mostrarCartas(cartas, contenedor) {
    contenedor.innerHTML = '';
    cartas.forEach(carta => {
        const imagenCarta = document.createElement('img');
        imagenCarta.src = carta.image;
        imagenCarta.alt = `${carta.value} de ${carta.suit}`;
        contenedor.appendChild(imagenCarta);
    });
}
function determinarGanador() {
    const puntajeJugador1 = calcularValorMano(manoJugador1);
    const puntajeJugador2 = calcularValorMano(manoJugador2);
    if (puntajeJugador1 > puntajeJugador2) {
        resultadoP.textContent = `¡Jugador 1 gana! Puntuación: ${puntajeJugador1}, Jugador 2: ${puntajeJugador2}`;
    } else if (puntajeJugador1 < puntajeJugador2) {
        resultadoP.textContent = `¡Jugador 2 gana! Puntuación: ${puntajeJugador2}, Jugador 1: ${puntajeJugador1}`;
    } else {
        resultadoP.textContent = `Empate. Ambos jugadores tienen: ${puntajeJugador1}`;
    }
    cartasDisponiblesDiv.innerHTML = '';
    turnoInfoP.textContent = 'Juego finalizado';
    botonReiniciar.style.display = 'inline';
    botonRepartir.style.display = 'none';
}
function calcularValorMano(cartas) {
    let valor = 0;
    cartas.forEach(carta => {
        if (['JACK', 'QUEEN', 'KING'].includes(carta.value)) {
            valor += 10;
        } else if (carta.value === 'ACE') {
            valor += 11;
        } else {
            valor += parseInt(carta.value);
        }
    });
    return valor;
}
function reiniciarJuego() {
    manoJugador1 = [];
    manoJugador2 = [];
    turnoActual = 1;
    resultadoP.textContent = '';
    cartasJugador1Div.innerHTML = '';
    cartasJugador2Div.innerHTML = '';
    cartasDisponiblesDiv.innerHTML = '';
    iniciarBaraja();
}
//menú de navegación
botonIniciarJuego.addEventListener('click', iniciarJuego);
botonVerReglas.addEventListener('click', mostrarReglas);
botonComoJugar.addEventListener('click', mostrarComoJugar);
botonVolverDesdeReglas.addEventListener('click', volverAlMenu);
botonVolverDesdeComoJugar.addEventListener('click', volverAlMenu);
botonRepartir.addEventListener('click', repartirCartas);
botonReiniciar.addEventListener('click', reiniciarJuego);