
let movimientos = 0;


let grupoCartas = [
  ['🐕',"💀","🌊"],
  ["⛰️", "🧗‍♂️","🤕", "💨"],
  ["🥶", "❄️","🤸‍♂️","📤"],
  ["👐", "🏹","💓", "🐲"],
  ["🏊‍♂️", "♨️","🧎‍♂️","😴"],
];

let nivelActual = 0;
let niveles = [
  {
    cartas: grupoCartas[0],
    movimientosMax: 5,
  },
  {
    cartas: grupoCartas[0].concat(grupoCartas[1]),
    movimientosMax: 15,
  },
  {
    cartas: grupoCartas[0].concat(grupoCartas[1], grupoCartas[2]),
    movimientosMax: 25,
  },
  {
    cartas: grupoCartas[0].concat(
      grupoCartas[1],
      grupoCartas[2],
      grupoCartas[3]
    ),
    movimientosMax: 30,
  },
  {
    cartas: grupoCartas[0].concat(
      grupoCartas[1],
      grupoCartas[2],
      grupoCartas[3],
      grupoCartas[4]
    ),
    movimientosMax: 45,
  },
];
