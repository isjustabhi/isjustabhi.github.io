import { useEffect, useRef } from 'react';

/** Quiet futuristic field — soft grid, sparse nodes, mouse glow. */
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
    const mouse = { x: 0.5, y: 0.35, tx: 0.5, ty: 0.35 };
    let t0 = performance.now();

    const nodes = Array.from({ length: 28 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00028,
      vy: (Math.random() - 0.5) * 0.00028,
      r: 0.9 + Math.random() * 1.6,
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
      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;
      ctx.clearRect(0, 0, w, h);

      const sky = ctx.createLinearGradient(0, 0, 0, h);
      sky.addColorStop(0, 'rgba(12, 24, 48, 0.55)');
      sky.addColorStop(0.45, 'rgba(4, 6, 11, 0)');
      sky.addColorStop(1, 'rgba(4, 10, 18, 0.5)');
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, w, h);

      const gap = 72;
      const ox = (mouse.x - 0.5) * 14;
      const oy = (mouse.y - 0.5) * 10;
      ctx.strokeStyle = 'rgba(46, 230, 255, 0.028)';
      ctx.lineWidth = 1;
      for (let x = ox % gap; x < w; x += gap) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = oy % gap; y < h; y += gap) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      const g = ctx.createRadialGradient(w * mouse.x, h * mouse.y, 0, w * mouse.x, h * mouse.y, w * 0.45);
      g.addColorStop(0, 'rgba(46, 230, 255, 0.08)');
      g.addColorStop(0.45, 'rgba(75, 141, 255, 0.035)');
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
          if (dist < 145) {
            ctx.beginPath();
            ctx.moveTo(a.x * w, a.y * h);
            ctx.lineTo(b.x * w, b.y * h);
            ctx.strokeStyle = `rgba(46, 230, 255, ${0.1 * (1 - dist / 145)})`;
            ctx.stroke();
          }
        }
      }

      nodes.forEach((n, i) => {
        const pulse = 0.55 + 0.45 * Math.sin(t * 1.5 + i);
        ctx.beginPath();
        ctx.arc(n.x * w, n.y * h, n.r * pulse, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(46, 230, 255, ${0.25 + pulse * 0.22})`;
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
