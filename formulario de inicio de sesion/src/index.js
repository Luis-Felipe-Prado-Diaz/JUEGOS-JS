const registro = document.querySelector(".registro");
const registrarse = document.querySelector("#registrarse");
const formulario = document.querySelector(".formulario");
const login = document.querySelector(".login");
const loginRegistrarse = document.querySelector("#login");

formulario.addEventListener('click', (event) => {
  event.preventDefault()
  if (event.target.closest('#registrarse')) {
    if (login.classList.contains('hidden')) {
      registro.classList.add('hidden')
      login.classList.remove('hidden')

    }
  }

  if (event.target.closest('#login')) {
    if (registro.classList.contains('hidden')) {
      login.classList.add('hidden')
      registro.classList.remove('hidden')

    }
  }
})