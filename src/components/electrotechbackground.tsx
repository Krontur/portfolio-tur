import { useEffect, useRef } from "react";

export default function ElectroTechBackground({
  colorPrimary = "#0ea5e9",
  colorSecondary = "#22c55e",
  bg = "#0b1020",
  density = 0.9,
  interactive = true,
  opacity = 0.18,
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef(0);
  const mouse = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const DPR = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    interface Point {
      x: number;
      y: number;
      vx: number;
      vy: number;
    }
    const points: Point[] = [];
    interface Spark {
      a: { x: number; y: number };
      b: { x: number; y: number };
      life: number;
    }
    let sparks: Spark[] = [];

    function resize() {
      if (!canvas) return;
      const { innerWidth, innerHeight } = window;
      canvas.width = Math.floor(innerWidth * DPR);
      canvas.height = Math.floor(innerHeight * DPR);
      canvas.style.width = innerWidth + "px";
      canvas.style.height = innerHeight + "px";
      if (ctx) {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(DPR, DPR);
      }
      initPoints();
    }

    function rand(a: number, b: number): number { return a + Math.random() * (b - a); }

    function initPoints() {
      points.length = 0;
      const cols = Math.max(10, Math.floor((window.innerWidth / 80) * density));
      const rows = Math.max(6, Math.floor((window.innerHeight / 90) * density));
      const gx = window.innerWidth / cols;
      const gy = window.innerHeight / rows;
      for (let y = 0; y <= rows; y++) {
        for (let x = 0; x <= cols; x++) {
          const jitterX = rand(-gx * 0.25, gx * 0.25);
          const jitterY = rand(-gy * 0.25, gy * 0.25);
          points.push({
            x: x * gx + jitterX,
            y: y * gy + jitterY,
            vx: rand(-0.05, 0.05),
            vy: rand(-0.05, 0.05),
          });
        }
      }
    }

    function drawBackground() {
      if (!ctx) return;
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      const g = ctx.createRadialGradient(
        window.innerWidth * 0.7,
        window.innerHeight * 0.3,
        50,
        window.innerWidth * 0.5,
        window.innerHeight * 0.8,
        Math.max(window.innerWidth, window.innerHeight)
      );
      g.addColorStop(0, "rgba(255,255,255,0.03)");
      g.addColorStop(1, "rgba(255,255,255,0.0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    }

    function stepPoints(dt: number) {
      const maxMove = 0.3;
      for (const p of points) {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        if (p.vx > maxMove || p.vx < -maxMove) p.vx *= -0.8;
        if (p.vy > maxMove || p.vy < -maxMove) p.vy *= -0.8;
        if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1;
        if (p.y < 0 || p.y > window.innerHeight) p.vy *= -1;
      }
    }

    function _hex(hex: string): [number, number, number] {
      return [
        parseInt(hex.slice(1, 3), 16),
        parseInt(hex.slice(3, 5), 16),
        parseInt(hex.slice(5, 7), 16),
      ];
    }

    function mixColors(
      m: number,
      colorPrimary: string,
      colorSecondary: string,
      opacity: number,
      t: number
    ): string {
      const [r1, g1, b1] = _hex(colorPrimary);
      const [r2, g2, b2] = _hex(colorSecondary);
      const r = Math.round(r1 * (1 - m) + r2 * m);
      const g = Math.round(g1 * (1 - m) + g2 * m);
      const b = Math.round(b1 * (1 - m) + b2 * m);
      return `rgba(${r},${g},${b},${opacity * t})`;
    }

    function drawNetwork() {
      if (!ctx) return;
      ctx.lineWidth = 1;
      for (let i = 0; i < points.length; i++) {
        const a = points[i];
        for (let j = i + 1; j < i + 10 && j < points.length; j++) {
          const b = points[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          const maxD2 = 150 * 150;
          if (d2 < maxD2) {
            const t = 1 - d2 / maxD2;
            ctx.strokeStyle = mixColors(j % 3 ? 0.3 : 0.7, colorPrimary, colorSecondary, opacity, t);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const p of points) {
  ctx.fillStyle = colorPrimary + "33";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function addSpark() {
      const a = points[(Math.random() * points.length) | 0];
      let b;
      if (mouse.current.active) {
        b = { x: mouse.current.x, y: mouse.current.y };
      } else {
        b = points[(Math.random() * points.length) | 0];
      }
      sparks.push({ a, b, life: 1 });
      if (sparks.length > 8) sparks.shift();
    }

    function drawSparks(dt: number) {
      if (!ctx) return;
      for (const s of sparks) {
  s.life -= dt * 0.0008;
        const alpha = Math.max(0, s.life);
        if (!alpha) continue;
  ctx.strokeStyle = colorSecondary.replace("#", "#") + "";
        ctx.lineWidth = 1.5;
        ctx.shadowBlur = 6;
        ctx.shadowColor = colorSecondary;

        const segs = 6;
        const dx = (s.b.x - s.a.x) / segs;
        const dy = (s.b.y - s.a.y) / segs;
        ctx.beginPath();
        ctx.moveTo(s.a.x, s.a.y);
        for (let i = 1; i < segs; i++) {
          const nx = s.a.x + dx * i + (Math.random() - 0.5) * 8;
          const ny = s.a.y + dy * i + (Math.random() - 0.5) * 8;
          ctx.lineTo(nx, ny);
        }
        ctx.lineTo(s.b.x, s.b.y);
  ctx.globalAlpha = alpha * 0.7;
        ctx.strokeStyle = colorSecondary;
        ctx.stroke();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      }
      sparks = sparks.filter((s) => s.life > 0);
    }

    let last = performance.now();
    let paused = false;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    function loop(now: number) {
      if (paused || reduceMotion.matches) return;
      const dt = Math.min(33, now - last);
      last = now;
      drawBackground();
      stepPoints(dt);
      drawNetwork();
      drawSparks(dt);
      if (Math.random() < 0.04) addSpark();
      rafRef.current = requestAnimationFrame(loop);
    }

    function onMouseMove(e: MouseEvent) {
      if (!interactive) return;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
      mouse.current.active = true;
    }

    function onMouseLeave() {
      mouse.current.active = false;
    }

    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("visibilitychange", () => {
      paused = document.hidden;
      if (!paused) {
        last = performance.now();
        rafRef.current = requestAnimationFrame(loop);
      }
    });

    resize();
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [bg, colorPrimary, colorSecondary, density, interactive, opacity]);

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
  zIndex: 0,
  pointerEvents: "none",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            pointerEvents: "none",
        }}
        />

      <svg
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0, mixBlendMode: "overlay" }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="grid" width="6" height="6" patternUnits="userSpaceOnUse">
            <path d="M 6 0 L 0 0 0 6" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
          </pattern>
          <linearGradient id="vign" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(0,0,0,0.15)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.35)" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#grid)" />
        <rect x="0" y="0" width="100%" height="100%" fill="url(#vign)" />
      </svg>
    </div>
  );
}
