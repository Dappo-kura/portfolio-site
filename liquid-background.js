(() => {
  const canvas = document.getElementById('liquid-background');
  if (!canvas) return;
  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const mouse = { x: 0.5, y: 0.5 };
  const eased = { x: 0.5, y: 0.5 };
  let width = 0, height = 0, dpr = 1, rafId = 0;

  // 液体ブロブ定義（parallax層ごとに異なる速度で動く）
  const blobs = [
    // [x, y, 半径, 色相, 彩度, 輝度, 不透明度, layer, phase, speed]
    { ox: 0.38, oy: 0.44, r: 0.54, h: 148, s: 88, l: 28, a: 0.82, layer: 0.80, phase: 0.00, speed: 1.00 },
    { ox: 0.72, oy: 0.28, r: 0.42, h: 168, s: 85, l: 34, a: 0.72, layer: 0.60, phase: 1.57, speed: 0.82 },
    { ox: 0.18, oy: 0.70, r: 0.40, h: 140, s: 82, l: 22, a: 0.68, layer: 0.42, phase: 3.14, speed: 1.18 },
    { ox: 0.82, oy: 0.62, r: 0.36, h: 182, s: 90, l: 36, a: 0.64, layer: 1.00, phase: 4.71, speed: 0.90 },
    { ox: 0.52, oy: 0.82, r: 0.30, h: 158, s: 80, l: 26, a: 0.58, layer: 0.32, phase: 2.36, speed: 1.12 },
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

  // 有機的なブロブ輪郭（sin波で変形した閉じたベジェ曲線）
  function organicPath(cx, cy, r, t, phase) {
    const N = 10;
    const pts = [];
    for (let i = 0; i < N; i++) {
      const a = (i / N) * Math.PI * 2;
      // 複数周波数のsin波で自然なうねりを生成
      const rad = r * (
        0.88 +
        0.09 * Math.sin(t       + a * 2.3 + phase) +
        0.06 * Math.cos(t * 0.73 + a * 3.7 + phase * 1.4) +
        0.04 * Math.sin(t * 1.27 + a * 5.1 + phase * 0.65)
      );
      pts.push({ x: cx + Math.cos(a) * rad, y: cy + Math.sin(a) * rad });
    }

    // 中点をつなぐ二次ベジェで滑らかな閉曲線
    ctx.beginPath();
    const sx = (pts[N - 1].x + pts[0].x) / 2;
    const sy = (pts[N - 1].y + pts[0].y) / 2;
    ctx.moveTo(sx, sy);
    for (let i = 0; i < N; i++) {
      const p = pts[i];
      const q = pts[(i + 1) % N];
      ctx.quadraticCurveTo(p.x, p.y, (p.x + q.x) / 2, (p.y + q.y) / 2);
    }
    ctx.closePath();
  }

  function render(time) {
    // マウス位置をゆっくり追従
    eased.x += (mouse.x - eased.x) * 0.055;
    eased.y += (mouse.y - eased.y) * 0.055;
    const t = time * 0.001;

    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.filter = 'blur(80px) saturate(1.4)';
    ctx.globalCompositeOperation = 'screen';

    const minDim = Math.min(width, height);

    blobs.forEach(b => {
      const bt = t * b.speed;

      // 有機的な浮遊モーション
      const floatX = Math.sin(bt * 0.62 + b.phase) * 0.06;
      const floatY = Math.cos(bt * 0.47 + b.phase * 1.3) * 0.045;

      // layer値で各ブロブの parallax 強度が異なる → 奥行き感
      const px = (eased.x - 0.5) * b.layer * 0.34;
      const py = (eased.y - 0.5) * b.layer * 0.26;

      const cx = (b.ox + floatX + px) * width;
      const cy = (b.oy + floatY + py) * height;

      // 呼吸するような半径変化
      const breathe = 1 + 0.055 * Math.sin(bt * 0.38 + b.phase);
      const r = minDim * b.r * breathe;

      organicPath(cx, cy, r, bt, b.phase);

      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      g.addColorStop(0,    `hsla(${b.h}, ${b.s}%, ${b.l + 14}%, ${b.a})`);
      g.addColorStop(0.42, `hsla(${b.h}, ${b.s}%, ${b.l}%,      ${b.a * 0.70})`);
      g.addColorStop(0.78, `hsla(${b.h}, ${b.s - 5}%, ${b.l - 8}%, ${b.a * 0.28})`);
      g.addColorStop(1,    `hsla(${b.h}, ${b.s}%, ${b.l - 12}%, 0)`);
      ctx.fillStyle = g;
      ctx.fill();
    });

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

  window.addEventListener('resize', () => { resize(); start(); }, { passive: true });

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) start();
  });

  reducedMotion.addEventListener?.('change', start);

  resize();
  start();
})();
