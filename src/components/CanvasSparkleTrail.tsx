"use client";
import { useEffect, useRef } from "react";

type P = {
  x: number; y: number; vx: number; vy: number;
  life: number; max: number; size: number; hue: number;
};

export default function CanvasSparkleTrail() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const raf = useRef<number | null>(null);
  const particles = useRef<P[]>([]);
  const mouse = useRef({ x: -9999, y: -9999 });
  const motionRef = useRef(0); // 0..1 recent mouse motion

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d", { alpha: true });
    if (!ctx) return;

    let w = 0, h = 0, dpr = 1;

    // Subtle preset (lighter & fewer)
    const MAX = 180;
    const SPAWN_BASE = 10;
    const FRICTION = 0.986;
    const LIFE_MIN = 26, LIFE_MAX = 42;
    const SIZE_MIN = 1.1, SIZE_MAX = 2.4;
    const EASE = 0.20;
    const HUE_MIN = 195, HUE_MAX = 215;
    const CENTER_WHITE_CHANCE = 0.04;
    const ALPHA_MULT = 0.55;
    const USE_ADDITIVE = true;

    const follower = { x: innerWidth / 2, y: innerHeight / 2 };

    const setup = () => {
      dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      w = window.innerWidth; h = window.innerHeight;
      c.width = Math.floor(w * dpr);
      c.height = Math.floor(h * dpr);
      (ctx as any).setTransform?.(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      motionRef.current = 1; // mark as active motion
    };

    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    const spawn = (x: number, y: number, count: number) => {
      for (let i = 0; i < count; i++) {
        const ang = Math.random() * Math.PI * 2;
        const spd = 0.7 + Math.random() * 1.4;
        const hue = rand(HUE_MIN, HUE_MAX);
        particles.current.push({
          x, y,
          vx: Math.cos(ang) * spd,
          vy: Math.sin(ang) * spd,
          life: 0,
          max: Math.floor(rand(LIFE_MIN, LIFE_MAX)),
          size: rand(SIZE_MIN, SIZE_MAX),
          hue
        });
      }
      if (particles.current.length > MAX) {
        particles.current.splice(0, particles.current.length - MAX);
      }
    };

    const tick = () => {
      follower.x += (mouse.current.x - follower.x) * EASE;
      follower.y += (mouse.current.y - follower.y) * EASE;

      // decay motion so trail quiets when idle
      motionRef.current *= 0.90;
      if (motionRef.current < 0.02) motionRef.current = 0;

      ctx.clearRect(0, 0, w, h);
      const prevComp = ctx.globalCompositeOperation;
      if (USE_ADDITIVE) ctx.globalCompositeOperation = "lighter";

      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i];
        p.life++;
        if (p.life >= p.max) { particles.current.splice(i, 1); continue; }

        p.vx *= FRICTION; p.vy *= FRICTION;
        p.x += p.vx; p.y += p.vy;

        const t = 1 - p.life / p.max;
        const alpha = Math.max(0, t) * 0.7 * ALPHA_MULT;

        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3.0);
        const whiteCore = Math.random() < CENTER_WHITE_CHANCE;
        g.addColorStop(0, whiteCore
          ? `rgba(255,255,255,${alpha})`
          : `hsla(${p.hue}, 100%, 85%, ${alpha})`);
        g.addColorStop(1, `hsla(${p.hue}, 100%, 60%, ${alpha * 0.65})`);
        ctx.fillStyle = g;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 1.1, 0, Math.PI * 2);
        ctx.fill();
      }

      if (USE_ADDITIVE) ctx.globalCompositeOperation = prevComp;

      const spawnCount = Math.round(SPAWN_BASE * motionRef.current);
      if (spawnCount > 0) spawn(follower.x, follower.y, spawnCount);

      raf.current = requestAnimationFrame(tick);
    };

    if (matchMedia("(hover: none), (pointer: coarse)").matches) return;

    setup();
    window.addEventListener("resize", setup);
    window.addEventListener("mousemove", onMove, { passive: true });

    // start visible
    mouse.current.x = follower.x; mouse.current.y = follower.y;
    motionRef.current = 0.6;
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", setup);
      window.removeEventListener("mousemove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        // ↓ put UNDER floating buttons, but above page content
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
}
