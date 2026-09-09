const boton = document.querySelector(".sonido");
const audio = document.querySelector(".audio");

boton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play('./audio/bart-ay-caramba.mp3');
  } else {
    audio.pause('./audio/bart-ay-caramba.mp3');
  }
});

const boton2 = document.querySelector(".button-number");
const audio2 = document.querySelector(".audio2");

boton2.addEventListener("click", () => {
  audio2.play('./audio/homero-ouch.mp3');
});

