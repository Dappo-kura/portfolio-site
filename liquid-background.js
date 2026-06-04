(() => {
  const canvas = document.getElementById('liquid-background');
  if (!canvas) return;
  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const mouse = { x: 0.5, y: 0.5 };
  const eased = { x: 0.5, y: 0.5 };
  let width = 0, height = 0, dpr = 1, rafId = 0;

  // 波レイヤー定義（奥から手前の順に描画）
  // depth: マウス parallax の強さ（手前ほど大きく動く）
  const waves = [
    { y: 0.22, amp: 0.10, freq: 1.6, spd: 0.50, h: 145, l: 38, a: 0.60, depth: 0.25 },
    { y: 0.34, amp: 0.13, freq: 2.0, spd: 0.70, h: 152, l: 42, a: 0.68, depth: 0.45 },
    { y: 0.47, amp: 0.15, freq: 1.4, spd: 0.60, h: 160, l: 46, a: 0.72, depth: 0.65 },
    { y: 0.60, amp: 0.12, freq: 2.4, spd: 0.90, h: 148, l: 40, a: 0.76, depth: 0.80 },
    { y: 0.73, amp: 0.11, freq: 1.8, spd: 0.75, h: 170, l: 48, a: 0.78, depth: 1.00 },
  ];

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

  function drawWave(w, t) {
    const baseY = height * w.y;
    const amp   = height * w.amp;

    // マウス X → 位相シフト（手前のレイヤーほど大きく動く）
    const phaseShift = (eased.x - 0.5) * Math.PI * 5 * w.depth;
    // マウス Y → 波全体の縦位置を上下にずらす
    const yShift = (eased.y - 0.5) * height * 0.12 * w.depth;

    const steps = Math.ceil(width / 3) + 2;

    ctx.beginPath();
    for (let i = 0; i <= steps; i++) {
      const x = (i / steps) * width;
      const u = (i / steps) * Math.PI * 2 * w.freq;

      // 主波 + 倍音 2つで有機的な波形を合成
      const y = baseY + yShift
        + Math.sin(u + t * w.spd + phaseShift)           * amp
        + Math.sin(u * 1.83 - t * w.spd * 0.57 + phaseShift * 0.72) * amp * 0.38
        + Math.cos(u * 2.71 + t * w.spd * 0.33 + phaseShift * 0.41) * amp * 0.18;

      if (i === 0) ctx.moveTo(x, y);
      else         ctx.lineTo(x, y);
    }

    // 波の下を塗りつぶして「水面層」に見せる
    ctx.lineTo(width + 10, height + 10);
    ctx.lineTo(-10,        height + 10);
    ctx.closePath();

    // 波の上端が明るく、下に向かって暗くなるグラデーション
    const grad = ctx.createLinearGradient(0, baseY - amp * 2, 0, baseY + amp * 3);
    grad.addColorStop(0,    `hsla(${w.h}, 90%, ${w.l + 10}%, 0)`);
    grad.addColorStop(0.22, `hsla(${w.h}, 90%, ${w.l + 6}%,  ${w.a})`);
    grad.addColorStop(0.55, `hsla(${w.h}, 86%, ${w.l}%,      ${w.a * 0.80})`);
    grad.addColorStop(1,    `hsla(${w.h}, 82%, ${w.l - 10}%, ${w.a * 0.55})`);
    ctx.fillStyle = grad;
    ctx.fill();
  }

  function render(time) {
    eased.x += (mouse.x - eased.x) * 0.07;
    eased.y += (mouse.y - eased.y) * 0.07;
    const t = time * 0.001;

    ctx.clearRect(0, 0, width, height);

    // blur は波形の縁をほどよく滑らかにする程度に留める
    ctx.save();
    ctx.filter = 'blur(32px) saturate(1.5)';
    ctx.globalCompositeOperation = 'screen';

    // 奥（index 0）から手前（index 4）の順に描画
    waves.forEach(w => drawWave(w, t));

    ctx.restore();

    if (!reducedMotion.matches && !document.hidden) {
      rafId = requestAnimationFrame(render);
    } else {
      rafId = 0;
    }
  }

  function start() {
    if (!rafId) rafId = requestAnimationFrame(render);
  }

  window.addEventListener('pointermove', e => {
    mouse.x = e.clientX / window.innerWidth;
    mouse.y = e.clientY / window.innerHeight;
    start();
  }, { passive: true });

  window.addEventListener('resize',           () => { resize(); start(); }, { passive: true });
  document.addEventListener('visibilitychange', () => { if (!document.hidden) start(); });
  reducedMotion.addEventListener?.('change', start);

  resize();
  start();
})();
