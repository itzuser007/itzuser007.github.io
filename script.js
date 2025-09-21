function createConfettiPiece() {
  const div = document.createElement('div');
  div.className = 'confetti-piece';
  div.style.background = `hsl(${Math.random() * 360}, 90%, 65%)`;
  div.style.left = `${Math.random() * 100}%`;
  div.style.animationDuration = `${Math.random() * 2 + 3}s`;
  div.style.opacity = Math.random();
  div.style.width = div.style.height = `${Math.random() * 8 + 8}px`;
  document.querySelector('.confetti').appendChild(div);
  setTimeout(() => div.remove(), 4000);
}
setInterval(() => createConfettiPiece(), 90);

const sheet = document.createElement('style');
sheet.innerHTML = `.confetti-piece {
  position: absolute;
  top: 0;
  border-radius: 50%;
  opacity: 0.85;
  will-change: transform;
  animation: confetti-fall linear forwards;
}
@keyframes confetti-fall {
  to {
    transform: translateY(95vh) rotate(360deg);
  }
}`;
document.head.appendChild(sheet);

function showCake() {
  document.getElementById('greetCard').style.display = 'none';
  document.getElementById('cakeContainer').style.display = 'flex';

  const audio = document.getElementById('bday-audio');
  audio.currentTime = 0;
  audio.play().catch(e => console.error('Audio play failed:', e));
}
