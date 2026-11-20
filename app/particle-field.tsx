"use client";

import { useEffect, useRef } from "react";

export default function ParticleField() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    const hero = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !hero || !ctx) return;
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0, height = 0, frame = 0, last = 0, phase = 0;
    let visible = false;
    let pointer: { x: number; y: number } | null = null;
    const seeds = Array.from({ length: 76 }, () => ({
      x: Math.random(), y: Math.random(), angle: Math.random() * Math.PI * 2,
    }));
    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      const points = seeds.slice(0, Math.max(16, Math.ceil(width * height / 7500))).map(p => ({
        x: p.x * width + 16 * Math.cos(phase + p.angle),
        y: p.y * height + 16 * Math.sin(phase + p.angle),
      }));
      function link(a: typeof points[number], b: typeof points[number], radius: number, alpha: number) {
        if (!ctx) return;
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d >= radius) return;
        ctx.strokeStyle = `rgba(29,104,155,${alpha * (1 - d / radius)})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
      points.forEach((p, i) => {
        for (let j = i + 1; j < points.length; j++) link(p, points[j], 124, 0.35);
        if (pointer && !motion.matches) link(p, pointer, 155, 0.65);
        ctx.fillStyle = i % 3 ? "rgba(38,88,176,.45)" : "rgba(0,132,126,.55)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, i % 3 ? 1.5 : 2.2, 0, Math.PI * 2);
        ctx.fill();
      });
    }
    function tick(now: number) {
      if (now - last >= 32) {
        phase += Math.min(now - last, 64) * 0.00025;
        last = now;
        draw();
      }
      frame = requestAnimationFrame(tick);
    }
    function sync() {
      cancelAnimationFrame(frame);
      draw();
      if (visible && !document.hidden && !motion.matches) frame = requestAnimationFrame(tick);
    }
    const resize = new ResizeObserver(() => {
      width = hero.clientWidth;
      height = hero.clientHeight;
      const scale = Math.min(devicePixelRatio, 2);
      canvas.width = Math.round(width * scale);
      canvas.height = Math.round(height * scale);
      ctx.setTransform(scale, 0, 0, scale, 0, 0);
      draw();
    });
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const rect = hero.getBoundingClientRect();
      pointer = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const leave = () => { pointer = null; };
    resize.observe(hero);
    observer.observe(hero);
    hero.addEventListener("pointermove", move);
    hero.addEventListener("pointerleave", leave);
    motion.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      observer.disconnect();
      hero.removeEventListener("pointermove", move);
      hero.removeEventListener("pointerleave", leave);
      motion.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);
  return <canvas className="particle-field" ref={ref} aria-hidden="true" />;
}
