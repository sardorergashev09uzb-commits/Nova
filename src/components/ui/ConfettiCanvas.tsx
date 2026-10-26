import React, { useEffect, useRef } from 'react';

export const ConfettiCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#ea580c', '#1d4ed8', '#f97316', '#3b82f6', '#10b981', '#ffffff'];
    const particles: {
      x: number;
      y: number;
      w: number;
      h: number;
      color: string;
      vx: number;
      vy: number;
      rotation: number;
      vRot: number;
      opacity: number;
    }[] = [];

    // Create 80 studio particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: canvas.width / 2 + (Math.random() - 0.5) * 200,
        y: canvas.height * 0.4 + (Math.random() - 0.5) * 50,
        w: Math.random() * 8 + 4,
        h: Math.random() * 12 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 16,
        vy: -Math.random() * 14 - 4,
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 10,
        opacity: 1,
      });
    }

    let animationId: number;
    let elapsed = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      elapsed += 16;

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35; // gravity
        p.vx *= 0.98; // air resistance
        p.rotation += p.vRot;
        if (elapsed > 1800) {
          p.opacity = Math.max(0, p.opacity - 0.02);
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });

      if (elapsed < 3200) {
        animationId = requestAnimationFrame(render);
      }
    };

    animationId = requestAnimationFrame(render);

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 w-full h-full"
    />
  );
};
