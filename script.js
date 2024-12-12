const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('visible');
});


const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const carouselImages = document.querySelector('.carousel-images');

let currentIndex = 0; // Index de l'image actuelle
const images = carouselImages.children; // Récupérer toutes les images
const totalImages = images.length; // Nombre total d'images

function updateCarousel() {
    const newTransformValue = -currentIndex * 100; // Calculer la valeur de transformation
    carouselImages.style.transform = `translateX(${newTransformValue}%)`; // Appliquer la transformation
}

// Fonction pour aller à la prochaine image
function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages; // Boucle au premier
    updateCarousel();
}

// Bouton précédent
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1; // Boucle au dernier
    updateCarousel();
});

// Bouton suivant
nextBtn.addEventListener('click', nextImage);

// Intervalle pour changer l'image automatiquement
setInterval(nextImage, 3000); // Change d'image toutes les 3 secondes
