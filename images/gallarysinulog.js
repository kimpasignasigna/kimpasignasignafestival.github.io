// carousel.js

const positions = ['left2', 'left1', 'center', 'right1', 'right2'];
const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateCarousel(direction) {
  const images = Array.from(carousel.children);
  if (direction === 'next') {
    positions.unshift(positions.pop()); // move last to front
  } else {
    positions.push(positions.shift()); // move first to end
  }

  images.forEach((img, i) => {
    img.className = positions[i];
  });
}

prevBtn.addEventListener('click', () => updateCarousel('prev'));
nextBtn.addEventListener('click', () => updateCarousel('next'));
