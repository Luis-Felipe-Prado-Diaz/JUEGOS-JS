export default (() => {

  const listaPestañas = document.querySelectorAll(".pestaña");
  const listaContenido = document.querySelectorAll(".contenido");

  listaPestañas.forEach(pestaña => {
    pestaña.addEventListener("click", () => {
      if (pestaña.classList.contains('activado')) {
        pestaña.classList.add('activado');
      } else {
        listaPestañas.forEach(pestaña => {
          pestaña.classList.remove('activado');
        })
        pestaña.classList.add('activado');
      }
      listaContenido.forEach(contenido => {
        if (pestaña.dataset.tab === contenido.dataset.tab) {
          contenido.classList.add('activado');
        } else {
          contenido.classList.remove('activado');
        }
      })
    });
  });

})()