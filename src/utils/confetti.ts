export function createConfetti(event: React.MouseEvent) {
  const button = event.currentTarget as HTMLElement;
  const rect = button.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;

  const colors = ['#9333ea', '#ec4899', '#f97316', '#10b981', '#3b82f6', '#eab308'];
  const particleCount = 30;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'confetti-particle';

    const size = Math.random() * 8 + 4;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const angle = (Math.PI * 2 * i) / particleCount;
    const velocity = Math.random() * 200 + 100;
    const dx = Math.cos(angle) * velocity;
    const dy = Math.sin(angle) * velocity;

    particle.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
      pointer-events: none;
      z-index: 10000;
      transform: rotate(${Math.random() * 360}deg);
    `;

    document.body.appendChild(particle);

    const animation = particle.animate([
      {
        transform: `translate(0, 0) rotate(0deg) scale(1)`,
        opacity: 1
      },
      {
        transform: `translate(${dx}px, ${dy + 200}px) rotate(${Math.random() * 720}deg) scale(0)`,
        opacity: 0
      }
    ], {
      duration: 1000 + Math.random() * 500,
      easing: 'cubic-bezier(0, .9, .57, 1)'
    });

    animation.onfinish = () => particle.remove();
  }
}
