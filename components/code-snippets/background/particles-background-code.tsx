import CodeShowCase from "@/components-ui/code-showcase";

const code = String.raw`"use client";
import { useEffect, useRef } from "react";

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  canvasWidth: number;
  canvasHeight: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.size = Math.random() * 2 + 1;
    this.color = \`rgba(148, 163, 184, \${Math.random() * 0.5 + 0.3})\`;
  }

  update(mouseX: number, mouseY: number, mouseDistance: number) {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > this.canvasWidth) this.vx *= -1;
    if (this.y < 0 || this.y > this.canvasHeight) this.vy *= -1;

  
    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < mouseDistance) {
      const forceX = (dx / distance) * ((mouseDistance - distance) / mouseDistance) * 3;
      const forceY = (dy / distance) * ((mouseDistance - distance) / mouseDistance) * 3;
      this.x -= forceX;
      this.y -= forceY;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

export default function ParticlesHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 180;
    const connectDistance = 100;
    const mouseDistance = 150;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const init = () => {
      resize();
      particles = Array.from(
        { length: particleCount },
        () => new Particle(canvas.width, canvas.height)
      );
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.update(mouse.current.x, mouse.current.y, mouseDistance);
        p.draw(ctx);
      });

      particles.forEach((a, i) => {
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectDistance) {
            ctx.beginPath();
            ctx.strokeStyle = \`rgba(148,163,184,\${1 - dist / connectDistance})\`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", init);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-950 flex items-center justify-center">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl font-bold mb-4">Particle Network</h1>
        <p className="text-xl text-slate-300">Move your mouse to interact</p>
      </div>
    </div>
  );
}
`;



export default function ParticlesBackgroundCode() {
  return (
    <>
      <CodeShowCase language=".tsx" title="Particles Background" code={code} />
    </>
  );
}
