var segundos = 0;
var minutos = 0;
var horas = 0;
var intervalo;

function iniciar() {
  relogio();
  intervalo = setInterval(relogio, 1000);
  l;
}

function pausar() {
  clearInterval(intervalo);
  setTimeout();
}

function parar() {
  clearInterval(intervalo);
  segundos = 0;
  minutos = 0;
  horas = 0;
  window.alert(
    "Você parou em: " + document.getElementById("contador").innerText
  );
  document.getElementById("contador").innerText = "00:00:00";
}

function relogio() {
  segundos++;
  var contador = document.getElementById("contador");
  contador.textContent =
    formatarTempo(horas) +
    ":" +
    formatarTempo(minutos) +
    ":" +
    formatarTempo(segundos);
}

function formatarTempo(tempo) {
  return tempo < 10 ? "0" + tempo : tempo;
}
