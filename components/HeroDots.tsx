'use client';
import { useEffect, useRef } from 'react';

export default function HeroDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const SPACING = 10;
    const DOT_RADIUS = 1.2;
    const WAVE_SPEED = 0.012;
    const WAVE_SCALE = 0.18;
    const AMPLITUDE = 6;

    let animId: number;
    let t = 0;

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function draw() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = Math.ceil(canvas.width / SPACING) + 2;
      const rows = Math.ceil(canvas.height / SPACING) + 2;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const baseX = col * SPACING;
          const baseY = row * SPACING;

          // wave displacement
          const wave = Math.sin(col * WAVE_SCALE + row * WAVE_SCALE * 0.6 + t);
          const x = baseX + wave * AMPLITUDE;
          const y = baseY + Math.cos(col * WAVE_SCALE * 0.7 + row * WAVE_SCALE + t * 0.8) * AMPLITUDE * 0.6;

          // brightness based on wave
          const brightness = 0.12 + (wave + 1) * 0.08;

          ctx.beginPath();
          ctx.arc(x, y, DOT_RADIUS, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${brightness})`;
          ctx.fill();
        }
      }

      t += WAVE_SPEED;
      animId = requestAnimationFrame(draw);
    }

    resize();
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        filter: 'blur(0.3px)',
      }}
    />
  );
}
