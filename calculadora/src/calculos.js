// funcion de sonido de teclas.
const boton = document.querySelector(".sonido");
const audio = document.querySelector(".audio");

boton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play('./audio/bart-ay-caramba.mp3');
  } else {
    audio.pause('./audio/bart-ay-caramba.mp3');
  }
});

const boton2 = document.querySelectorAll(".button-number, .button-operation");
const audio2 = document.querySelector(".audio2");

boton2.forEach(boton2 => {
  boton2.addEventListener("click", () => {
    audio2.currentTime = 0;
    audio2.play('./audio/homero-ouch.mp3');
  });
});


// ------------------------------------------------
// funcion para que los botones esten en el input 
// ------------------------------------------------

const input = document.querySelector('#numero');
const calculadora = document.querySelector('.calculadora');

function esOperador(caracter) {
  return ['+', '-', '*', '/'].includes(caracter);
}

calculadora.addEventListener('click', (event) => {
  const boton = event.target.closest('button');
  if (!boton) return;

  // Números del 1 al 9,
  if (boton.classList.contains('1')) input.value += '1';
  if (boton.classList.contains('2')) input.value += '2';
  if (boton.classList.contains('3')) input.value += '3';
  if (boton.classList.contains('4')) input.value += '4';
  if (boton.classList.contains('5')) input.value += '5';
  if (boton.classList.contains('6')) input.value += '6';
  if (boton.classList.contains('7')) input.value += '7';
  if (boton.classList.contains('8')) input.value += '8';
  if (boton.classList.contains('9')) input.value += '9';

  if (boton.classList.contains('0')) {
    const ultimoNumero = input.value.split(/[+\-*/]/).pop();
    if (ultimoNumero === '') return; else input.value += '0'
  }

  if (boton.classList.contains('00')) {
    const ultimoNumero = input.value.split(/[+\-*/]/).pop();
    if (ultimoNumero === '') return; else input.value += '00'
  }

  if (esOperador(boton.className)) {
    if (input.value === '') return;
    const ultimoCaracter = input.value.slice(-1); 
    input.value = esOperador(ultimoCaracter) ? input.value.slice(0, -1) + boton.className : input.value + boton.className;
  }

 

  if (boton.classList.contains('x')) {
    if (input.value === '') return;
    input.value = input.value.slice(0, -1);
  }

  if (boton.classList.contains('C')) {
    input.value = '';
  }

 if (boton.classList.contains('.')) {
    if(input.value === '' ) input.value = '0.';
    const ultimoNumero = input.value.split(/[+\-*/]/).pop();
    if(ultimoNumero.includes('.')) return; else input.value += '.'
  }

  if (boton.classList.contains('=')) {
    if (input.value === '') return;
    try {
      input.value = String(Function('"use strict"; return (' + input.value + ')')());
    } catch {
      input.value = 'Error';
    }
  }
});

