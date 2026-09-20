import { useEffect, useRef } from 'react';

/** Lightweight futuristic grid + drifting nodes. */
export default function FuturisticBg() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = canvas.getContext('2d');
    let raf = 0;
    let running = true;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    const mouse = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };
    let t0 = performance.now();

    const nodes = Array.from({ length: 42 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00035,
      vy: (Math.random() - 0.5) * 0.00035,
      r: 1 + Math.random() * 1.8,
    }));

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (e) => {
      mouse.tx = e.clientX / w;
      mouse.ty = e.clientY / h;
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onMove);

    const frame = (now) => {
      if (!running) return;
      const t = reduce ? 0 : (now - t0) / 1000;
      mouse.x += (mouse.tx - mouse.x) * 0.06;
      mouse.y += (mouse.ty - mouse.y) * 0.06;
      ctx.clearRect(0, 0, w, h);

      // Grid
      const gap = 56;
      const ox = (mouse.x - 0.5) * 20;
      const oy = (mouse.y - 0.5) * 16;
      ctx.strokeStyle = 'rgba(34, 211, 238, 0.04)';
      ctx.lineWidth = 1;
      for (let x = (ox % gap); x < w; x += gap) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = (oy % gap); y < h; y += gap) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Soft vignette glow
      const g = ctx.createRadialGradient(w * mouse.x, h * mouse.y, 0, w * 0.5, h * 0.4, w * 0.7);
      g.addColorStop(0, 'rgba(34, 211, 238, 0.07)');
      g.addColorStop(0.4, 'rgba(59, 130, 246, 0.03)');
      g.addColorStop(1, 'transparent');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      if (!reduce) {
        nodes.forEach((n) => {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > 1) n.vx *= -1;
          if (n.y < 0 || n.y > 1) n.vy *= -1;
        });
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = (a.x - b.x) * w;
          const dy = (a.y - b.y) * h;
          const dist = Math.hypot(dx, dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x * w, a.y * h);
            ctx.lineTo(b.x * w, b.y * h);
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.1 * (1 - dist / 120)})`;
            ctx.stroke();
          }
        }
      }

      nodes.forEach((n, i) => {
        const pulse = 0.5 + 0.5 * Math.sin(t * 2 + i);
        ctx.beginPath();
        ctx.arc(n.x * w, n.y * h, n.r * pulse, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 238, ${0.35 + pulse * 0.25})`;
        ctx.fill();
      });

      raf = requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame(frame);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  return <canvas ref={ref} className="fixed inset-0 z-0 pointer-events-none" aria-hidden />;
}
