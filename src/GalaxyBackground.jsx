import React, { useRef, useEffect, useMemo } from "react";
import styled, { keyframes } from "styled-components";

const subtleTwinkle = keyframes`
  0%,100% { opacity: 0.45 }
  50% { opacity: 0.95 }
`;

const Galaxy = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.gradient};
  overflow: hidden;
  z-index: -1;
  pointer-events: none;
`;

const Canvas = styled.canvas`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
`;

const AccentStar = styled.div.attrs((p) => ({
  style: {
    top: `${p.$top}%`,
    left: `${p.$left}%`,
    width: `${p.$size}px`,
    height: `${p.$size}px`,
  },
}))`
  position: absolute;
  background: white;
  border-radius: 50%;
  opacity: 0.65;
  will-change: opacity, transform;
  box-shadow: 0 0 ${(p) => Math.max(2, p.$size * 1.4)}px rgba(255,255,255,0.6);
  animation: ${subtleTwinkle} ${(p) => p.$twinkleDuration}s ease-in-out infinite;
`;

/*
  High-performance galaxy:
  - Canvas draws many small stars with inexpensive gradients.
  - A handful of DOM `AccentStar`s provide larger twinkles using CSS (GPU-accelerated).
  - `canvasCount` and `accentCount` props control quality/performance.
*/

const GalaxyBackground = ({ canvasCount = 700, accentCount = 28 }) => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  const canvasStars = useMemo(() => {
    return Array.from({ length: canvasCount }).map(() => ({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 1.3 + 0.2,
      base: Math.random() * 0.6 + 0.05,
      amp: Math.random() * 0.45 + 0.05,
      speed: Math.random() * 0.002 + 0.00035,
      phase: Math.random() * Math.PI * 2,
    }));
  }, [canvasCount]);

  const accentStars = useMemo(() => {
    return Array.from({ length: accentCount }).map(() => ({
      id: Math.random().toString(36).slice(2, 9),
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 3.2 + 1.6,
      twinkleDuration: Math.random() * 2 + 1.2,
    }));
  }, [accentCount]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rect = canvas.getBoundingClientRect();
    let width = Math.max(1, Math.floor(rect.width));
    let height = Math.max(1, Math.floor(rect.height));
    const dpr = Math.max(1, window.devicePixelRatio || 1);

    function resize() {
      rect = canvas.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    let last = performance.now();

    function draw(now) {
      const t = now || performance.now();
      last = t;

      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.globalCompositeOperation = "lighter";

      for (let i = 0; i < canvasStars.length; i++) {
        const s = canvasStars[i];
        const alpha = Math.max(0, s.base + Math.sin((t * s.speed) + s.phase) * s.amp);
        ctx.globalAlpha = alpha;
        const px = Math.round(s.x * width);
        const py = Math.round(s.y * height);
        const r = Math.max(0.6, s.size);

        // draw soft dot with a radial gradient (cheap at small radii)
        const g = ctx.createRadialGradient(px, py, 0, px, py, r * 3);
        g.addColorStop(0, "rgba(255,255,255,1)");
        g.addColorStop(0.5, "rgba(255,255,255,0.25)");
        g.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(px, py, r * 2, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
      rafRef.current = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize, { passive: true });
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [canvasStars]);

  return (
    <Galaxy>
      <Canvas ref={canvasRef} aria-hidden />
      {accentStars.map((s) => (
        <AccentStar
          key={s.id}
          $top={s.top}
          $left={s.left}
          $size={s.size}
          $twinkleDuration={s.twinkleDuration}
        />
      ))}
    </Galaxy>
  );
};

export default GalaxyBackground;
