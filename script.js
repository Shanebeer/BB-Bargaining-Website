const container = document.querySelector(".animation-container");
const frames = document.querySelectorAll(".frame");
let currentFrame = 0;

function nextFrame() {
  currentFrame = (currentFrame + 1) % frames.length;
  container.style.transform = `translateX(-${currentFrame * 33.33}%)`;
}

setInterval(nextFrame, 3000);
