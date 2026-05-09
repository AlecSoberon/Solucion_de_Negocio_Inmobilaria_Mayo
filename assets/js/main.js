(function () {
  const track = document.getElementById('carouselTrack');
  if (!track) return;

  let currentSlide = 0;
  const slides = Array.from(document.querySelectorAll('.carousel-image'));
  const dotsContainer = document.querySelector('.carousel-dots');

  if (dotsContainer && dotsContainer.children.length === 0) {
    slides.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot' + (index === 0 ? ' active' : '');
      dot.type = 'button';
      dot.setAttribute('aria-label', `Ir a la lámina ${index + 1}`);
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });
  }

  function updateCarousel() {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
  }

  function moveSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    if (currentSlide >= slides.length) currentSlide = 0;
    updateCarousel();
  }

  function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
  }

  window.moveSlide = moveSlide;
  window.goToSlide = goToSlide;
})();