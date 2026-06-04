(() => {
  const canvas = document.getElementById('liquid-background');
  if (!canvas) return;

  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const pointer = { x: 0.74, y: 0.36 };
  const eased = { x: pointer.x, y: pointer.y };
  const scroll = { current: 0, target: 0 };
  const state = {
    frame: 0,
    pointerX: pointer.x,
    pointerY: pointer.y,
    scroll: 0
  };

  let width = 0;
  let height = 0;
  let dpr = 1;
  let rafId = 0;

  window.__liquidBackgroundState = state;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.ceil(width * dpr);
    canvas.height = Math.ceil(height * dpr);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function setPointer(x, y) {
    if (!width || !height) return;
    pointer.x = clamp(x / width, 0, 1);
    pointer.y = clamp(y / height, 0, 1);
  }

  function updateScrollTarget() {
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    scroll.target = clamp(window.scrollY / maxScroll, 0, 1);
  }

  function addGlow(x, y, radius, colors) {
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
    colors.forEach(([stop, color]) => gradient.addColorStop(stop, color));
    ctx.fillStyle = gradient;
    ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
  }

  function drawBand(time, index, alpha, hue) {
    const points = 7;
    const baseY = height * (0.12 + index * 0.18) + Math.sin(time * 0.0005 + index) * 44;
    const offsetX = (eased.x - 0.5) * (70 + index * 20);
    const offsetY = (eased.y - 0.5) * (80 - index * 6);

    ctx.beginPath();
    for (let i = 0; i <= points; i += 1) {
      const t = i / points;
      const x = width * t;
      const wave =
        Math.sin(t * Math.PI * 2.2 + time * 0.00085 + index * 1.6) * (70 + index * 18) +
        Math.cos(t * Math.PI * 4.4 - time * 0.00045 + index) * 24;
      const y = baseY + wave + offsetY * Math.sin(t * Math.PI) + scroll.current * height * 0.42;

      if (i === 0) {
        ctx.moveTo(x - 120 + offsetX * 0.28, y);
      } else {
        ctx.lineTo(x + offsetX * t * 0.45, y);
      }
    }

    ctx.lineTo(width + 160, height + 160);
    ctx.lineTo(-160, height + 160);
    ctx.closePath();

    const gradient = ctx.createLinearGradient(0, baseY - 140, width, baseY + 220);
    gradient.addColorStop(0, `hsla(${hue - 10}, 88%, 24%, 0)`);
    gradient.addColorStop(0.3, `hsla(${hue}, 92%, 34%, ${alpha})`);
    gradient.addColorStop(0.72, `hsla(${hue + 18}, 96%, 42%, ${alpha * 0.72})`);
    gradient.addColorStop(1, `hsla(${hue + 24}, 90%, 20%, 0)`);

    ctx.fillStyle = gradient;
    ctx.fill();
  }

  function render(time) {
    eased.x += (pointer.x - eased.x) * 0.052;
    eased.y += (pointer.y - eased.y) * 0.052;
    scroll.current += (scroll.target - scroll.current) * 0.04;

    state.frame += 1;
    state.pointerX = Number(eased.x.toFixed(4));
    state.pointerY = Number(eased.y.toFixed(4));
    state.scroll = Number(scroll.current.toFixed(4));
    canvas.dataset.frame = String(state.frame);

    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.globalCompositeOperation = 'screen';
    ctx.filter = 'blur(42px) saturate(1.25)';

    const anchorX = width * (0.55 + (eased.x - 0.5) * 0.42);
    const anchorY = height * (0.43 + (eased.y - 0.5) * 0.36 + scroll.current * 0.24);
    const pulse = Math.sin(time * 0.00065) * 0.08;
    const radius = Math.max(width, height);

    addGlow(anchorX, anchorY, radius * (0.58 + pulse), [
      [0, 'rgba(23, 255, 91, 0.38)'],
      [0.18, 'rgba(0, 158, 75, 0.22)'],
      [0.46, 'rgba(0, 78, 46, 0.12)'],
      [1, 'rgba(0, 0, 0, 0)']
    ]);

    addGlow(width * (0.12 + eased.x * 0.2), height * (0.88 - eased.y * 0.22), radius * 0.62, [
      [0, 'rgba(10, 210, 95, 0.22)'],
      [0.34, 'rgba(0, 105, 50, 0.13)'],
      [1, 'rgba(0, 0, 0, 0)']
    ]);

    addGlow(width * (0.88 - eased.x * 0.16), height * (0.16 + eased.y * 0.16), radius * 0.5, [
      [0, 'rgba(80, 214, 190, 0.16)'],
      [0.42, 'rgba(0, 96, 72, 0.1)'],
      [1, 'rgba(0, 0, 0, 0)']
    ]);

    for (let i = 0; i < 5; i += 1) {
      drawBand(time, i, 0.058 - i * 0.005, 136 + i * 8);
    }

    ctx.restore();

    ctx.save();
    ctx.globalCompositeOperation = 'source-over';
    ctx.filter = 'blur(30px)';

    addGlow(width * (0.28 + eased.x * 0.18), height * (0.36 + eased.y * 0.16), radius * 0.42, [
      [0, 'rgba(5, 7, 7, 0.68)'],
      [0.44, 'rgba(5, 7, 7, 0.36)'],
      [1, 'rgba(5, 7, 7, 0)']
    ]);

    addGlow(width * (0.74 - eased.x * 0.12), height * (0.78 - eased.y * 0.1), radius * 0.38, [
      [0, 'rgba(5, 7, 7, 0.5)'],
      [0.5, 'rgba(5, 7, 7, 0.22)'],
      [1, 'rgba(5, 7, 7, 0)']
    ]);

    ctx.restore();

    if (!reducedMotion.matches && !document.hidden) {
      rafId = window.requestAnimationFrame(render);
    } else {
      rafId = 0;
    }
  }

  function start() {
    if (!rafId) {
      rafId = window.requestAnimationFrame(render);
    }
  }

  window.addEventListener('resize', () => {
    resize();
    updateScrollTarget();
    start();
  }, { passive: true });

  window.addEventListener('pointermove', (event) => {
    setPointer(event.clientX, event.clientY);
    start();
  }, { passive: true });

  window.addEventListener('pointerleave', () => {
    pointer.x = 0.74;
    pointer.y = 0.36;
  }, { passive: true });

  window.addEventListener('scroll', () => {
    updateScrollTarget();
    start();
  }, { passive: true });

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) start();
  });

  reducedMotion.addEventListener?.('change', () => {
    start();
  });

  resize();
  updateScrollTarget();
  start();
})();
