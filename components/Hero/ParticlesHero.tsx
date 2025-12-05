"use client";
import { useEffect, useRef } from "react";

export default function ParticlesHero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId; // ← ADD THIS LINE!

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width; // Random position
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.5; // Random velocity
    this.vy = (Math.random() - 0.5) * 0.5;
    this.size = Math.random() * 2;
    this.color = "rgba(148, 163, 184, 0.5)"; // Gray color
  }

  update() {
    // Move
    this.x += this.vx;
    this.y += this.vy;

    // Bounce
    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

    const particle = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: 2,
      vy: 1,
      size: 3,
    };

    const particles = [];
    const particlesCount = 150;

    for (let i = 0; i < particlesCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      particles.forEach((a, index) => {
        for (let j = 0; j < particles.length; j++) {
          const b = particles[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(148, 163, 184, ${1 - distance / 100})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate); // Now it works!
    };

    animate(); // Start the animation

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-950 flex items-center justify-center">
      <canvas ref={canvasRef} className="absolute inset-0"></canvas>
    </div>
  );
}
