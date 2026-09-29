import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface BackgroundEffectsProps {
  section?: 'hero' | 'services' | 'about' | 'projects' | 'contact';
}

const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({ section = 'hero' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Grid intersection nodes setup
    const gridSize = 60;
    const gridNodes: { x: number; y: number; alpha: number; pulseSpeed: number }[] = [];
    for (let x = 0; x < width; x += gridSize) {
      for (let y = 0; y < height; y += gridSize) {
        if (Math.random() < 0.25) {
          gridNodes.push({
            x,
            y,
            alpha: Math.random() * 0.4 + 0.1,
            pulseSpeed: Math.random() * 0.02 + 0.01,
          });
        }
      }
    }

    // Low density particle setup matching reference image
    const particleCount = isMobile ? 15 : 35;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 2 + 0.8,
      alpha: Math.random() * 0.5 + 0.2,
    }));

    // Mouse lerp tracking
    let targetX = width / 2;
    let targetY = height / 2;
    let currentX = width / 2;
    let currentY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile || prefersReducedMotion) return;
      const rect = canvas.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    };

    if (!isMobile && !prefersReducedMotion) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Render Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      currentX += (targetX - currentX) * 0.04;
      currentY += (targetY - currentY) * 0.04;

      if (!isMobile && !prefersReducedMotion && section === 'hero') {
        setMousePos({
          x: (currentX - width / 2) / (width / 2),
          y: (currentY - height / 2) / (height / 2),
        });
      }

      // 1. Draw Subtle Cursor Radial Glow
      if (!isMobile && !prefersReducedMotion && section === 'hero') {
        const cursorGlow = ctx.createRadialGradient(
          currentX,
          currentY,
          0,
          currentX,
          currentY,
          350
        );
        cursorGlow.addColorStop(0, 'rgba(212, 175, 55, 0.08)');
        cursorGlow.addColorStop(0.5, 'rgba(212, 175, 55, 0.02)');
        cursorGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = cursorGlow;
        ctx.fillRect(0, 0, width, height);
      }

      // 2. Draw Faint Grid Intersection Glowing Nodes
      gridNodes.forEach((node) => {
        if (!prefersReducedMotion) {
          node.alpha += Math.sin(Date.now() * node.pulseSpeed) * 0.005;
          if (node.alpha < 0.1) node.alpha = 0.1;
          if (node.alpha > 0.5) node.alpha = 0.5;
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${node.alpha})`;
        ctx.fill();
      });

      // 3. Draw Floating Gold Dust Particles
      particles.forEach((p1) => {
        if (!prefersReducedMotion) {
          p1.x += p1.vx;
          p1.y += p1.vy;

          if (p1.x < 0) p1.x = width;
          if (p1.x > width) p1.x = 0;
          if (p1.y < 0) p1.y = height;
          if (p1.y > height) p1.y = 0;

          if (!isMobile) {
            const dx = currentX - p1.x;
            const dy = currentY - p1.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 150) {
              p1.x += (dx / dist) * 0.2;
              p1.y += (dy / dist) * 0.2;
            }
          }
        }

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${p1.alpha})`;
        ctx.shadowColor = '#d4af37';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (!isMobile && !prefersReducedMotion) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [section]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 select-none">
      {/* LAYER 1: Overlay to blend with site background */}
      <div className="absolute inset-0 bg-[#060608]/40 backdrop-blur-[1px]" />

      {/* LAYER 2: Top Center Soft Gold Spotlight */}
      <motion.div
        animate={{ opacity: [0.4, 0.6, 0.4], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-36 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.28)_0%,rgba(180,140,40,0.1)_45%,transparent_75%)] blur-[90px]"
      />

      {/* LAYER 3: Deep Burgundy / Ruby Ambient Glows (Matching Top-Left & Bottom-Right of Reference) */}
      <motion.div
        animate={{ opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-10 -left-10 w-[550px] h-[550px] bg-[radial-gradient(circle_at_top_left,rgba(90,16,28,0.45)_0%,rgba(45,8,14,0.2)_50%,transparent_75%)] blur-[100px]"
      />
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-10 -right-10 w-[600px] h-[600px] bg-[radial-gradient(circle_at_bottom_right,rgba(90,16,28,0.4)_0%,rgba(45,8,14,0.18)_50%,transparent_75%)] blur-[110px]"
      />

      {/* LAYER 4: Diamond Technology Grid with Low Opacity */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4af370f_1px,transparent_1px),linear-gradient(to_bottom,#d4af370f_1px,transparent_1px)] bg-[size:48px_48px] transform rotate-12 scale-125 opacity-25" />

      {/* LAYER 5: Glowing Dark Spheres with Crisp Golden Rim Lighting (Matching Reference Image) */}
      {/* Top Right Golden Luminous Sphere */}
      <motion.div
        style={{
          transform: `translate3d(${mousePos.x * 12}px, ${mousePos.y * 12}px, 0)`,
        }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-16 -right-16 w-96 h-96 rounded-full bg-gradient-to-br from-[#0c0a0e] via-[#1a1520] to-[#3a101a] border-2 border-amber-400/40 shadow-[0_0_80px_rgba(212,175,55,0.25)] opacity-90"
      />

      {/* Bottom Left Golden Luminous Sphere */}
      <motion.div
        style={{
          transform: `translate3d(${mousePos.x * -12}px, ${mousePos.y * -12}px, 0)`,
        }}
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-20 -left-20 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-[#0a080c] via-[#18141f] to-[#3a101a] border-2 border-amber-400/40 shadow-[0_0_90px_rgba(212,175,55,0.25)] opacity-90"
      />

      {/* Bottom Right Smaller Dark Orb */}
      <motion.div
        style={{
          transform: `translate3d(${mousePos.x * 8}px, ${mousePos.y * 8}px, 0)`,
        }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-28 right-24 w-36 h-36 rounded-full bg-gradient-to-br from-[#080709] via-[#1c0d13] to-[#400e18] border border-amber-500/30 shadow-[0_0_40px_rgba(212,175,55,0.2)] opacity-75"
      />

      {/* LAYER 6: Curved Golden Swoosh Ribbon Arcs & Light Beams (Matching Exact Reference Layout) */}
      {/* Top Left Golden Ribbon Curve */}
      <motion.div
        animate={{
          x: [-15, 15, -15],
          rotate: [-45, -42, -45],
          opacity: [0.6, 0.85, 0.6],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-12 -left-12 w-[500px] h-[500px] rounded-full border-t-[3px] border-l-[3px] border-lb-gold/60 shadow-[0_0_45px_rgba(212,175,55,0.4)] transform pointer-events-none"
      />

      {/* Bottom Right Golden Ribbon Curve */}
      <motion.div
        animate={{
          x: [15, -15, 15],
          rotate: [-45, -48, -45],
          opacity: [0.6, 0.85, 0.6],
        }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-12 -right-12 w-[520px] h-[520px] rounded-full border-b-[3px] border-r-[3px] border-lb-gold/60 shadow-[0_0_45px_rgba(212,175,55,0.4)] transform pointer-events-none"
      />

      {/* Diagonal Glowing Gold Light Beams */}
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3], x: [-20, 20, -20] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-36 left-12 w-[450px] h-[2px] bg-gradient-to-r from-transparent via-lb-gold to-transparent shadow-[0_0_20px_#d4af37] transform -rotate-30 pointer-events-none opacity-70"
      />
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3], x: [20, -20, 20] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-44 right-12 w-[450px] h-[2px] bg-gradient-to-r from-transparent via-lb-gold to-transparent shadow-[0_0_20px_#d4af37] transform -rotate-30 pointer-events-none opacity-70"
      />

      {/* LAYER 7: Canvas for Particle Dust & Intersection Grid Nodes */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-85" />
    </div>
  );
};

export default BackgroundEffects;
