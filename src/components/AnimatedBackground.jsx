
import { useEffect, useRef } from "react";
import "./AnimatedBackground.css";

const COLORS = ["#a855f7", "#8b5cf6", "#ec4899", "#6366f1"];

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w, h, dpr, raf, nodes = [];

    const LINK = 130; // distance max pour relier deux points

    const init = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(70, Math.floor((w * h) / 22000));
      nodes = Array.from({ length: count }, () => ({
        // la plupart des points se trouvent en bas de l'écran
        x: Math.random() * w,
        y: h * (1 - Math.pow(Math.random(), 2.2)),
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: 1.5 + Math.random() * 2.5,
        c: COLORS[Math.floor(Math.random() * COLORS.length)],
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        if (!reduce) {
          a.x += a.vx;
          a.y += a.vy;
          if (a.x < 0 || a.x > w) a.vx *= -1;
          if (a.y < 0 || a.y > h) a.vy *= -1;
        }
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK) {
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.28 * (1 - d / LINK)})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        ctx.shadowBlur = 10;
        ctx.shadowColor = a.c;
        ctx.fillStyle = a.c;
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };

    init();
    draw();
    window.addEventListener("resize", init);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <div className="bg" aria-hidden="true">
      <div className="bg__shapes" />
      <div className="bg__streaks" />
      <span className="bg__orb bg__orb--1" />
      <span className="bg__orb bg__orb--2" />
      <span className="bg__orb bg__orb--3" />
      <span className="bg__orb bg__orb--4" />
      <canvas ref={canvasRef} className="bg__canvas" />
    </div>
  );
}
