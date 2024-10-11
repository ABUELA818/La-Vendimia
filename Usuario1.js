function changeMainImage(event) {
    if (event.target.classList.contains('gallery-image')) {
        const mainImage = document.getElementById('mainImage');
        mainImage.src = event.target.src.replace('80x80', '400x300');
        mainImage.alt = event.target.alt;
    }
}

// Agregar evento de clic a la galería de imágenes
const imageGallery = document.getElementById('imageGallery');
imageGallery.addEventListener('click', changeMainImage);