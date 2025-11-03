// Slide navigation logic
let currentSlide = 1;
const totalSlides = 26;

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slideCounter = document.getElementById('slideCounter');
const slides = document.querySelectorAll('.slide');

// Initialize
updateNavigation();

// Event listeners
prevBtn.addEventListener('click', () => {
    if (currentSlide > 1) {
        goToSlide(currentSlide - 1);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentSlide < totalSlides) {
        goToSlide(currentSlide + 1);
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && currentSlide > 1) {
        goToSlide(currentSlide - 1);
    } else if (e.key === 'ArrowRight' && currentSlide < totalSlides) {
        goToSlide(currentSlide + 1);
    }
});

// Go to specific slide
function goToSlide(slideNumber) {
    // Remove active class from current slide
    slides[currentSlide - 1].classList.remove('active');
    
    // Update current slide
    currentSlide = slideNumber;
    
    // Add active class to new slide
    slides[currentSlide - 1].classList.add('active');
    
    // Update navigation
    updateNavigation();
}

// Update navigation buttons and counter
function updateNavigation() {
    // Update counter
    slideCounter.textContent = `Slide ${currentSlide} of ${totalSlides}`;
    
    // Update button states
    prevBtn.disabled = currentSlide === 1;
    nextBtn.disabled = currentSlide === totalSlides;
}