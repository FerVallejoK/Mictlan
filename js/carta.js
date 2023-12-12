// Revelar Carta

function revelar() {
  let cartasReveladas;
  let totalReveladas = document.querySelectorAll(".revelada:not(.acierto)");

  if (totalReveladas.length > 1) {
    return;
  }

  this.classList.add("revelada");
  audioCarta = document.querySelector("#audio-carta");
  audioCarta.volumeN = 0.8;
  audioCarta.cloneNode().play();

  cartasReveladas = document.querySelectorAll(".revelada:not(.acierto)");
  if (cartasReveladas.length < 2) {
    return;
  }

  comparar(cartasReveladas);
}

// Carta Dios

function revelarTodasLasCartas() {
  audioAcierto = document.querySelector("#audio-dios");
  audioAcierto.volume = 0.8;
  audioAcierto.play();
  document.querySelectorAll(".carta:not(.acierto)").forEach(function (elemento) {
    elemento.classList.add("revelada");
  });

  setTimeout(function () {
    document
      .querySelectorAll(".carta:not(.acierto)")
      .forEach(function (elemento) {
        elemento.classList.remove("revelada");
      });
  }, 2000);
}

function usarCartaDios() {
  revelarTodasLasCartas();
  document.querySelector("#carta-dios").style.display = "none";
}

// Comprueba si lo has hecho bien o mal

function comparar(cartas) {
  if (cartas[0].dataset.valor === cartas[1].dataset.valor) {
    bien(cartas);
  } else {
    mala(cartas);
  }
}

// Acierto

function bien(cartas) {
  cartas.forEach(function (elemento) {
    elemento.classList.add("acierto");
  });
  audioAcierto = document.querySelector("#audio-acierto");
  audioAcierto.volumen = 0.8;
  audioAcierto.play();
  actualizarContador();
  cartasNoReveladas = document.querySelectorAll(".carta:not(.acierto)");
  if (cartasNoReveladas.length === 0) {
    setTimeout(finRonda, 1000);
  } else if (movimientos > niveles[nivelActual].movimientosMax - 1) {
    setTimeout(function () {
      document.querySelector("#gameOver").classList.add("visible");
    }, 1000);
    return;
  }
}

// Error

function mala(cartas) {
  cartas.forEach(function (elemento) {
    elemento.classList.add("mala");
  });

  let audioMala = document.querySelector("#audio-explosion");
  audioMala.volumen = 0.28;
  audioMala.play();
  actualizarContador();
  setTimeout(function () {
    cartas.forEach(function (elemento) {
      elemento.classList.remove("revelada");
      elemento.classList.remove("mala");
    });
  }, 1000);

  if (movimientos > niveles[nivelActual].movimientosMax - 1) {
    setTimeout(function () {
      document.querySelector("#gameOver").classList.add("visible");
    }, 1000);
    return;
  }
}

// Contador de Movimientos

function actualizarContador() {
  let movimientosTexto;
  movimientos++;
  movimientosTexto = movimientos;

  if (movimientos < 10) {
    movimientosTexto = "0" + movimientos;
  }
  document.querySelector("#mov").innerText = movimientosTexto;
}

function maxContador() {
  let movimientosMaxTexto = niveles[nivelActual].movimientosMax;
  if (movimientosMaxTexto < 10) {
    movimientosMaxTexto = "0" + movimientosMaxTexto;
  }
  document.querySelector("#mov-total").innerText = movimientosMaxTexto;
}

// Mood Próximo Nivel

function finRonda() {
  if (nivelActual < niveles.length - 1) {
    document.querySelector("#proximoNivel").classList.add("visible");
  } else {
    ganarJuego();
  }
}

// Se gano el juego

function ganarJuego() {
  document.querySelector("#endGame").classList.add("visible");
  let audioGanar = document.querySelector("#audio-ganar");
  audioGanar.volumen = 0.8;
  audioGanar.play();
  (() => {
    new Confetti({
      width: window.innerWidth,
      height: window.innerHeight,
      length: 80,
      duration: 5000,
    });
  })();
}