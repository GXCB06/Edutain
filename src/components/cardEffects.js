// This file adds confetti and sparkle effects for card interactivity
export function launchConfetti(node) {
  if (!node) return;
  const confetti = document.createElement('div');
  confetti.className = 'confetti-burst-effect';
  confetti.innerHTML = `<svg width="120" height="60"><g>
    <circle cx="20" cy="20" r="6" fill="#FFD700"/>
    <circle cx="60" cy="10" r="4" fill="#6a82fb"/>
    <circle cx="100" cy="30" r="5" fill="#E03A80"/>
    <circle cx="40" cy="40" r="3" fill="#B03A1E"/>
    <circle cx="80" cy="50" r="4" fill="#7B4FA3"/>
  </g></svg>`;
  confetti.style.position = 'absolute';
  confetti.style.left = '50%';
  confetti.style.top = '10%';
  confetti.style.transform = 'translate(-50%, 0)';
  confetti.style.pointerEvents = 'none';
  confetti.style.zIndex = 20;
  confetti.style.animation = 'confetti-burst-effect 1.2s cubic-bezier(.4,2,.6,1) 1';
  node.appendChild(confetti);
  setTimeout(() => confetti.remove(), 1200);
}

export function playSuccessSound() {
  const audio = new Audio('https://cdn.pixabay.com/audio/2022/07/26/audio_124bfae7b2.mp3');
  audio.volume = 0.15;
  audio.play();
}
