document.addEventListener('DOMContentLoaded', function () {
    const carouselTrack = document.querySelector('.carousel-track');
    const barraBusqueda = document.getElementById('barra-busqueda');
    const perfilBtn = document.getElementById('perfilBtn');
    const perfilPopup = document.getElementById('perfilPopup');
    const notificacionesBtn = document.getElementById('notificacionesBtn');
    const notificacionesPopup = document.getElementById('notificacionesPopup');

    // Carousel functionality
    if (carouselTrack) {
        carouselTrack.addEventListener('mouseenter', () => {
            carouselTrack.style.animationPlayState = 'paused';
        });

        carouselTrack.addEventListener('mouseleave', () => {
            carouselTrack.style.animationPlayState = 'running';
        });
    }

    // Search bar visibility
    window.addEventListener("scroll", function() {
        const alturaInicio = document.getElementById('inicio').offsetHeight;

        if (window.scrollY > alturaInicio) {
            barraBusqueda.classList.remove('hidden');
            barraBusqueda.classList.add('show');
        } else {
            barraBusqueda.classList.remove('show');
            barraBusqueda.classList.add('hidden');
        }
    });

    // Profile and Notifications pop-up functionality
    perfilBtn.addEventListener('click', function (event) {
        event.stopPropagation();
        perfilPopup.classList.toggle('hidden');
        notificacionesPopup.classList.add('hidden');
    });

    notificacionesBtn.addEventListener('click', function (event) {
        event.stopPropagation();
        notificacionesPopup.classList.toggle('hidden');
        perfilPopup.classList.add('hidden');
    });

    // Close pop-ups when clicking outside
    document.addEventListener('click', function (event) {
        if (!perfilBtn.contains(event.target) && !perfilPopup.contains(event.target) && 
            !notificacionesBtn.contains(event.target) && !notificacionesPopup.contains(event.target)) {
            perfilPopup.classList.add('hidden');
            notificacionesPopup.classList.add('hidden');
        }
    });

    // Prevent clicks inside pop-ups from closing them
    perfilPopup.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    notificacionesPopup.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});