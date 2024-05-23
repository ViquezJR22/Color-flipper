const btn = document.getElementById('btn');
const colorSpan = document.querySelector('.color');
const colors = ["#f1f5f8", "#ff5733", "#33ff57", "#3357ff", "#f0ff33", "#ff33f0"];

btn.addEventListener('click', function() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});
