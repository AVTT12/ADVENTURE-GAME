// ===== FLYING BATS =====
(function spawnBats() {
  const container = document.getElementById('bats');
  const batEmojis = ['🦇'];
  const count = 12;

  for (let i = 0; i < count; i++) {
    const bat = document.createElement('div');
    bat.className = 'bat';
    bat.textContent = batEmojis[0];

    const top = Math.random() * 80 + 10;
    const duration = Math.random() * 8 + 6;
    const delay = Math.random() * 10;

    bat.style.cssText = `
      top: ${top}%;
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
      font-size: ${Math.random() * 0.8 + 0.8}rem;
    `;
    container.appendChild(bat);
  }
})();

// ===== THREAT BARS =====
document.querySelectorAll('.threat-bar').forEach(bar => {
  const level = parseInt(bar.dataset.level, 10);
  const max = 10;
  let html = '';
  for (let i = 0; i < max; i++) {
    const filled = i < level;
    html += `<span style="
      display:inline-block;
      width:8px; height:10px;
      background:${filled ? '#f0c030' : '#333'};
      margin:0 1px;
    "></span>`;
  }
  bar.innerHTML = html;
});

// ===== QUOTE CAROUSEL =====
(function initCarousel() {
  const slides = document.querySelectorAll('.quote-slide');
  const dotsContainer = document.getElementById('quoteDots');
  const prevBtn = document.getElementById('prevQuote');
  const nextBtn = document.getElementById('nextQuote');
  let current = 0;

  slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  function goTo(index) {
    slides[current].classList.remove('active');
    dotsContainer.children[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dotsContainer.children[current].classList.add('active');
  }

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));

  setInterval(() => goTo(current + 1), 6000);
})();

// ===== NAVBAR SCROLL EFFECT =====
(function navbarScroll() {
  const nav = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.style.background = 'rgba(5,5,5,0.98)';
    } else {
      nav.style.background = 'rgba(10,10,10,0.92)';
    }
  });
})();

// ===== VILLAIN CARD HOVER =====
document.querySelectorAll('.villain-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 0 20px rgba(240,192,48,0.12)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = '';
  });
});
