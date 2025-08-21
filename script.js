const slider = document.querySelector(".slider");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");
const dots = document.querySelectorAll(".button");
const images = document.querySelectorAll(".image");

let index = 0;
let autoPlayInterval;

// Function to update slider
function updateSlider() {
  slider.style.transform = `translateX(-${index * 100}%)`;

  // Update active dot
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

// Move left
function moveLeft() {
  index = (index - 1 + images.length) % images.length;
  updateSlider();
  resetAutoPlay();
}

// Move right
function moveRight() {
  index = (index + 1) % images.length;
  updateSlider();
  resetAutoPlay();
}

// Dot navigation
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    updateSlider();
    resetAutoPlay();
  });
});

// Auto-play
function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    moveRight();
  }, 3000); // 3s per slide
}

function resetAutoPlay() {
  clearInterval(autoPlayInterval);
  startAutoPlay();
}

// Event listeners
leftArrow.addEventListener("click", moveLeft);
rightArrow.addEventListener("click", moveRight);

// Init
updateSlider();
startAutoPlay();
