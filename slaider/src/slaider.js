export default (() => {
  let carousel = document.querySelector(".carousel");
  let cells = carousel.querySelectorAll(".carousel__cell");
  let cellCount; // cellCount set from cells-range input value
  let selectedIndex = 0;
  let isHorizontal = true;
  let rotateFn = isHorizontal ? "rotateY" : "rotateX";
  let radius, theta;
  const cellGap = 28;
  // console.log( cellWidth, cellHeight );

  function rotateCarousel() {
    let angle = theta * selectedIndex * -1;
    carousel.style.transform =
      "translateZ(" + -radius + "px) " + rotateFn + "(" + angle + "deg)";
  }

  let prevButton = document.querySelector(".previous-button");
  prevButton.addEventListener("click", function () {
    selectedIndex--;
    rotateCarousel();
  });

  let nextButton = document.querySelector(".next-button");
  nextButton.addEventListener("click", function () {
    selectedIndex++;
    rotateCarousel();
  });

  let cellsRange = document.querySelector(".cells-range");
  cellsRange.addEventListener("change", changeCarousel);
  cellsRange.addEventListener("input", changeCarousel);

  function changeCarousel() {
    cellCount = Number(cellsRange.value);
    theta = 360 / cellCount;
    const referenceCell = cells[0];
    const cellSize = isHorizontal
      ? referenceCell.offsetWidth
      : referenceCell.offsetHeight;

    // Sumamos un hueco entre caras antes de calcular el radio para que no se toquen.
    radius = Math.round(
      (cellSize + cellGap) / 2 / Math.tan(Math.PI / cellCount)
    );
    for (let i = 0; i < cells.length; i++) {
      let cell = cells[i];
      if (i < cellCount) {
        // visible cell
        cell.style.opacity = 1;
        let cellAngle = theta * i;
        cell.style.transform =
          rotateFn + "(" + cellAngle + "deg) translateZ(" + radius + "px)";
      } else {
        // hidden cell
        cell.style.opacity = 0;
        cell.style.transform = "none";
      }
    }

    rotateCarousel();
  }

  let orientationRadios = document.querySelectorAll('input[name="orientation"]');
  (function () {
    for (let i = 0; i < orientationRadios.length; i++) {
      let radio = orientationRadios[i];
      radio.addEventListener("change", onOrientationChange);
    }
  })();

  function cambiarTamano(ancho, alto) {
    const scene = document.querySelector(".scene");

    scene.style.width = `${ancho}px`;
    scene.style.height = `${alto}px`;

    changeCarousel();
  }
  cambiarTamano(500, 667);

  function onOrientationChange() {
    let checkedRadio = document.querySelector(
      'input[name="orientation"]:checked'
    );
    isHorizontal = checkedRadio.value == "horizontal";
    rotateFn = isHorizontal ? "rotateY" : "rotateX";
    changeCarousel();
  }

  window.addEventListener("resize", changeCarousel);

  // set initials
  onOrientationChange();
})()
