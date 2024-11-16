
window.addEventListener('load', function() {
    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookie-banner').style.display = 'flex';
    }
});


document.getElementById('accept-all').addEventListener('click', function() {
    localStorage.setItem('cookiesAccepted', true);
    document.getElementById('cookie-banner').style.display = 'none';
});


document.getElementById('manage-cookies').addEventListener('click', function() {
    alert('Función de gestión de cookies no implementada aún.');
});


document.addEventListener("DOMContentLoaded", function() {
    const tutorialButton = document.getElementById("tutorialButton");
    const videoModal = document.getElementById("videoModal");
    const closeModal = document.getElementById("closeModal");


    tutorialButton.addEventListener("click", function() {
        videoModal.style.display = "block"; // Muestra el modal
    });


    closeModal.addEventListener("click", function() {
        videoModal.style.display = "none"; // Oculta el modal
    });


    window.addEventListener("click", function(event) {
        if (event.target === videoModal) {
            videoModal.style.display = "none"; 
        }
    });
});
