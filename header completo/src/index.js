const btnHamburguesa = document.querySelector('#btn-hamburguesa');
const navUl = document.querySelector('nav ul');
const logo = document.querySelector('.logo');
const iniciarSesion = document.querySelector('.iniciar-sesion');
const header = document.querySelector('header');

btnHamburguesa.addEventListener('click', () => {
  navUl.classList.toggle('active');
  logo.classList.toggle('active');
  header.classList.toggle('active');
  iniciarSesion.classList.toggle('active');
});