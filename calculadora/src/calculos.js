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

// funcion para que los botones esten en el input 
const calculadora = document.querySelector('.calculadora')
calculadora.addEventListener('click', (event) => {
  const input = document.querySelector('#numero');
  if (event.target.classList.contains('1')) {
    input.value += 1;
  }
  if (event.target.classList.contains('2')) {
    input.value += 2;
  }
  if (event.target.classList.contains('3')) {
    input.value += 3;
  }
  if (event.target.classList.contains('4')) {
    input.value += 4;
  }
  if (event.target.classList.contains('5')) {
    input.value += 5;
  }
  if (event.target.classList.contains('6')) {
    input.value += 6;
  }
  if (event.target.classList.contains('7')) {
    input.value += 7;
  }
  if (event.target.classList.contains('8')) {
    input.value += 8;
  }
  if (event.target.classList.contains('9')) {
    input.value += 9;
  }
  if (event.target.classList.contains('0')) {
    input.value += 0; 
  }
  if (event.target.classList.contains('00')) {
    input.value += 0.0;
  }
  if (event.target.classList.contains('.')) {
    input.value += '.';
  }
  if (event.target.classList.contains('+')) {
    console.log(input.value)
    input.value += '+';
  }
  if (event.target.classList.contains('-')) {
    input.value += '-';
  }
  if (event.target.classList.contains('*')) {
    input.value += '*';
  }
  if (event.target.classList.contains('/')) {
    input.value += '/';
  }
  if (event.target.classList.contains('C')) {
    input.value = '';
  }
  if (event.target.classList.contains('=')) {
    input.value = eval(input.value);
  }

})

