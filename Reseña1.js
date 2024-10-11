document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.stars i');
    const reviewTextarea = document.getElementById('review');
    const submitReviewBtn = document.getElementById('submitReview');
    const additionalOptions = document.getElementById('additionalOptions');
    const negativeOptions = document.getElementById('negativeOptions');
    const positiveOptions = document.getElementById('positiveOptions');
    let rating = 0;

    // Selección de estrellas
    stars.forEach(star => {
        star.addEventListener('click', function () {
            rating = this.getAttribute('data-value');
            updateStarRating(rating);
        });
    });

    function updateStarRating(rating) {
        stars.forEach(star => {
            if (star.getAttribute('data-value') <= rating) {
                star.classList.add('selected');
            } else {
                star.classList.remove('selected');
            }
        });
    }

    // Enviar reseña
    submitReviewBtn.addEventListener('click', function () {
        const reviewText = reviewTextarea.value.trim();
        if (reviewText === '' || rating === 0) {
            alert('Por favor, escribe una reseña y selecciona una calificación.');
            return;
        }

        additionalOptions.classList.remove('hidden');

        if (rating <= 2) {
            negativeOptions.classList.remove('hidden');
            positiveOptions.classList.add('hidden');
        } else {
            positiveOptions.classList.remove('hidden');
            negativeOptions.classList.add('hidden');
        }
    });

    // Opción de bloquear o reportar si la reseña es negativa
    document.getElementById('blockProvider').addEventListener('click', function () {
        alert('El prestador ha sido bloqueado.');
    });

    document.getElementById('reportProvider').addEventListener('click', function () {
        alert('El prestador ha sido reportado.');
    });

    // Opción de enviar propina si la reseña es positiva
    document.getElementById('sendTip').addEventListener('click', function () {
        const tipAmount = document.getElementById('tipAmount').value;
        if (tipAmount && parseFloat(tipAmount) > 0) {
            alert(`Propina de $${tipAmount} enviada con éxito.`);
        } else {
            alert('No se ha enviado ninguna propina.');
        }
    });
});
