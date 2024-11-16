document.addEventListener('DOMContentLoaded', function () {
    const classesMenu = document.getElementById('classes-menu');
    const classesSubmenu = document.getElementById('classes-submenu');
    const dropdownIcon = classesMenu.querySelector('.dropdown-icon');

    classesMenu.addEventListener('click', function (e) {
        e.preventDefault();
        classesSubmenu.classList.toggle('active');
        dropdownIcon.textContent = classesSubmenu.classList.contains('active') ? '▲' : '▼';
    });
});

// Tutorial Content
const tutorialContent = [
    {
        title: "¡Bienvenido a Politécnico ITLA! 👋",
        welcomeText: "Estamos felices de verte.",
        tutorialText: "Si necesitas una guía sobre el uso de Notatio, pasa a la siguiente diapositiva."
    },
    {
        title: "📊Explorar el Panel de Control📊",
        welcomeText: "Comienza tu viaje en Notatio.",
        tutorialText: "En el Panel de Control encontrarás un resumen de tus clases"
    },
    {
        title: "📝Gestionar Calificaciones📝",
        welcomeText: "Mantén un registro de tu progreso.",
        tutorialText: "En la sección de Calificaciones podrás ver y administrar las notas de tus estudiantes."
    },
    {
        title: "📚Organizar tus Clases📚",
        welcomeText: "Todo en un solo lugar.",
        tutorialText: "Accede a tus clases desde el menú lateral y gestiona los detalles de cada una."
    },
    {
        title: "¿Necesitas Ayuda?",
        welcomeText: "Estamos aquí para apoyarte.",
        tutorialText: "Si tienes alguna duda, no dudes en visitar nuestra sección de Ayuda o contactar al soporte."
    }
];

let currentSlide = 0;

const welcomeCard = document.getElementById('welcomeCard');
const title = welcomeCard.querySelector('h2');
const welcomeText = document.getElementById('welcomeText');
const tutorialText = document.getElementById('tutorialText');
const prevButton = document.getElementById('prevSlideButton');
const nextButton = document.getElementById('nextSlideButton');
const dots = document.querySelectorAll('.dot');

function updateSlide() {
    const slide = tutorialContent[currentSlide];
    title.textContent = slide.title;
    welcomeText.textContent = slide.welcomeText;
    tutorialText.textContent = slide.tutorialText;

    // Actualizar los dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });

    // Habilitar/deshabilitar botones según la posición
    prevButton.disabled = currentSlide === 0;
    nextButton.disabled = currentSlide === tutorialContent.length - 1;
}

prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlide();
    }
});

nextButton.addEventListener('click', () => {
    if (currentSlide < tutorialContent.length - 1) {
        currentSlide++;
        updateSlide();
    }
});

// Inicializar el slide
updateSlide();