"use client";
import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  update: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

// Particle Class
class ParticleClass implements Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 2 + 2; // Smaller, dust-like particles
    // Slower, ambient drift
    this.speedX = (Math.random() * 2 - 1) * 1.5;
    this.speedY = (Math.random() * 2 - 1) * 1.5;
    // Subtle opacity for background feel
    // Rose-400 color (251, 113, 133) for visibility in light & dark mode
    this.color = `rgba(219, 21, 0, ${Math.random() * 0.3 + 0.1})`;
  }

  update(): void {
    this.x += this.speedX;
    this.y += this.speedY;

    // Very slow fade out for lingering trails
    if (this.size > 0.1) this.size -= 0.01;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

export default function CursorParticles(): React.JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize handling
    const resize = (): void => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    // Spawn particle on mouse move
    const handleMouseMove = (e: MouseEvent): void => {
      // Spawn particles
      for (let i = 0; i < 0.1; i++) {
        particles.current.push(new ParticleClass(e.clientX, e.clientY));
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    const animate = (): void => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.current.length; i++) {
        particles.current[i].update();
        particles.current[i].draw(ctx);

        // Remove tiny particles
        if (particles.current[i].size <= 0.1) {
          particles.current.splice(i, 1);
          i--;
        }
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[-1]"
    />
  );
}
