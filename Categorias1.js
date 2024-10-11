const toggleButton = document.getElementById('toggleButton');
const filterContainer = document.getElementById('filterContainer');
const closeButton = document.getElementById('closeButton');

// Evento para abrir el menú de filtros
toggleButton.addEventListener('click', () => {
    filterContainer.classList.toggle('open');
    if (filterContainer.classList.contains('open')) {
        toggleButton.style.left = '320px'; // Mover el botón junto al cuadro
        toggleButton.classList.add('open'); // Añadir clase para rotar flecha
    } else {
        toggleButton.style.left = '10px'; // Regresar a la posición original
        toggleButton.classList.remove('open'); // Quitar clase para rotar flecha
    }
});

// Evento para cerrar el menú de filtros
closeButton.addEventListener('click', () => {
    filterContainer.classList.remove('open');
    toggleButton.style.left = '10px'; // Regresar el botón a su posición original
    toggleButton.classList.remove('open'); // Quitar clase para rotar flecha
});
