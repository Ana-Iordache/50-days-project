const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
  currentActive = currentActive == circles.length ? circles.length : ++currentActive;

  update();
})

prev.addEventListener('click', () => {
  currentActive = currentActive == 1 ? 1 : --currentActive;

  update();
})

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  })

  const actives = document.querySelectorAll('.active');

  progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

  switch (currentActive) {
    case 1:
      prev.disabled = true;
      break;
    case circles.length:
      next.disabled = true;
      break;
    default:
      prev.disabled = false;
      next.disabled = false;
  }
}