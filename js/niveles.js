// Botones
document.querySelectorAll(".reiniciar").forEach(function (btn) {
  btn.addEventListener("click", reiniciar);
});

document.querySelector("#inicio-btn").addEventListener("click", iniciaJuego);

document
  .querySelector("#proximoNivel-btn")
  .addEventListener("click", proximoNivel);

// Inicio y Niveles

function iniciaJuego() {
  document.querySelector("#pantalla-inicio").classList.remove("visible");
  iniciar();
}

function iniciar() {
  movimientos = 0;
  if (nivelActual >= 0) {
    document
      .querySelector("#carta-dios")
      .addEventListener("click", usarCartaDios);
  }
  reparteCartas(niveles[nivelActual].cartas);
  document.querySelector("#mov").innerText = "00";
  maxContador();
  document.querySelector("#endGame").classList.remove("visible");
  document.querySelector("#gameOver").classList.remove("visible");
  document.querySelector("#proximoNivel").classList.remove("visible");

  document.querySelectorAll(".carta").forEach(function (elemento) {
    elemento.addEventListener("click", revelar);
  });
}

function reiniciar() {
  document.querySelector("#carta-dios").style.display = "none";
  nivelActual = 0;
  atualizarNivel();
  iniciar();
}

function atualizarNivel() {
  let nivelTexto = nivelActual + 1;
  if (nivelTexto < 10) {
    nivelTexto = "0" + nivelTexto;
  }
  document.querySelector("#nivel").innerText = nivelTexto;
}

function proximoNivel() {
  nivelActual++;
  if (nivelActual >= 0) {
    document.querySelector("#carta-dios").style.display = "inline-block";
  }
  atualizarNivel();
  iniciar();
}

// Barajar Cartas

function barajarCartas(cartas) {
  let resultado;
  let totalCartas = cartas.concat(cartas);
  resultado = totalCartas.sort(function () {
    return 0.5 - Math.random();
  });
  return resultado;
}

// Reparte

function reparteCartas(cartas) {
  let mesa = document.querySelector("#mesa");
  let cartasBarajadas = barajarCartas(cartas);
  mesa.innerHTML = "";

  cartasBarajadas.forEach(function (emoji) {
    let carta = document.createElement("div");

    carta.innerHTML =
      "<div class='carta columna" +
      nivelActual +
      " ' data-valor= " +
      emoji +
      ">" +
      "<div class='carta__emoji'>" +
      emoji +
      "</div>" +
      "</div>";

    mesa.appendChild(carta);
  });
}
