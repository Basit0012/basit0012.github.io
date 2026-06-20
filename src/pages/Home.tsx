import React, { useEffect, useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

// Particle Canvas Component for subtle background depth
const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedY: number;
      opacity: number;
    }> = [];

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const count = Math.min(Math.floor(window.innerWidth / 20), 40);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          speedY: -(Math.random() * 0.15 + 0.05),
          opacity: Math.random() * 0.4 + 0.1,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        p.y += p.speedY;
        if (p.y < 0) {
          p.y = canvas.height;
          p.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10 pointer-events-none opacity-40" />;
};

export const Home: React.FC = () => {
  return (
    <div className="relative font-sans text-white bg-black overflow-hidden">
      <ParticleBackground />

      {/* 1. HERO SECTION (iPhone 17 Pro Launch Style) */}
      <section className="relative min-h-[95vh] flex flex-col justify-between pt-12 pb-16">
        <div className="mx-auto max-w-7xl px-6 w-full text-center flex flex-col items-center justify-center flex-1">
          {/* Top Title Tag */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-sm font-bold tracking-widest text-[#f5a972] uppercase font-mono"
          >
            MD ABDUL BASIT
          </motion.span>

          {/* Large Title Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2 flex flex-col items-center"
          >
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              iPhone 17
            </h1>
            <h2 className="text-hero-title text-gradient-copper tracking-tightest mt-1">
              PRO
            </h2>
            <span className="text-xs sm:text-sm font-bold tracking-widest text-white/50 uppercase mt-4 block">
              GAME DEV &bull; TECHNICAL ARTIST &bull; FULL-STACK ENGINEER
            </span>
          </motion.div>

          {/* Giant Portrait Centerpiece */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 relative w-72 sm:w-96 aspect-[4/5] rounded-3xl border border-white/10 bg-[#0d0d0d] p-4 shadow-[0_0_80px_rgba(240,128,60,0.08)] overflow-hidden group"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black">
              <img
                src="/profile.jpg"
                alt="MD Abdul Basit"
                className="w-full h-full object-cover object-center grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-80" />
            </div>
            
            {/* Gloss reflection overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/0 via-white/5 to-white/0 mix-blend-overlay" />
          </motion.div>
        </div>

        {/* Hero CTA & Pricing Footer */}
        <div className="w-full flex flex-col items-center mt-12 gap-3 z-10">
          <RouterLink to="/projects" className="btn-apple-blue">
            View Projects
          </RouterLink>
          <span className="text-[11px] font-mono text-[#86868b] tracking-wide">
            Available for select internship opportunities and full-time roles.*
          </span>
        </div>
      </section>

      {/* 2. HOLLOW LOOP SECTION (Unibody enclosure styling) */}
      <section className="relative py-32 border-t border-white/5 bg-[#050505]">
        <div className="mx-auto max-w-7xl px-6 text-center">
          
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <span className="text-xs font-bold tracking-widest text-[#f5a972] uppercase font-mono">
              FEATURED GAME DEVELOPMENT
            </span>
            <h2 className="text-3xl sm:text-6xl font-extrabold tracking-tighter text-white mt-4 leading-tight">
              Gameplay engineering.<br />makes a strong case for itself.
            </h2>
            <p className="text-sm sm:text-base text-[#86868b] mt-6 max-w-xl leading-relaxed font-medium">
              Introducing <strong>Hollow Loop</strong>, a 3D psychological horror game built in Unity. Engineered with a modular decoupled save architecture, slot-based inventory systems, and event-driven triggers.
            </p>
            
            <div className="mt-8 flex gap-4">
              <RouterLink to="/projects/hollow-loop" className="btn-apple-blue">
                Explore Case Study
              </RouterLink>
              <a href="/cv.pdf" target="_blank" className="btn-apple-secondary">
                Download CV
              </a>
            </div>
          </div>

          {/* Full Screen visual display */}
          <div className="mt-16 max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black aspect-[16/9]">
            <img
              src="/unity-game.png"
              alt="Hollow Loop Unity Game"
              className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
              loading="lazy"
            />
          </div>

        </div>
      </section>

      {/* 3. ISOMETRIC ENVIRONMENT SECTION (Camera Zoom-in styling) */}
      <section className="relative py-32 border-t border-white/5 bg-black">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Visual Left */}
            <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black aspect-[16/10]">
              <img
                src="/blender-work.png"
                alt="Stylized Isometric Blender Environment"
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
            </div>

            {/* Content Right */}
            <div className="lg:col-span-5 text-left flex flex-col gap-6">
              <span className="text-xs font-bold tracking-widest text-[#f5a972] uppercase font-mono">
                TECHNICAL ART CASE STUDY
              </span>
              
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tighter text-white leading-tight">
                A big zoom forward.
              </h2>
              
              <p className="text-sm text-[#86868b] leading-relaxed font-medium">
                Cyber-noir Blender environment featuring advanced lighting, emission maps, baked shadow layers, and custom rotational camera pathing.
              </p>

              {/* Specs parameters */}
              <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-6 mt-2">
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-white block">Up to 3x</span>
                  <span className="text-xs text-[#86868b] font-medium mt-1.5 block">draw call reductions</span>
                </div>
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-white block">100%</span>
                  <span className="text-xs text-[#86868b] font-medium mt-1.5 block">procedural shader nodes</span>
                </div>
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-white block">45,120</span>
                  <span className="text-xs text-[#86868b] font-medium mt-1.5 block">vertices optimized</span>
                </div>
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-white block">Cycles</span>
                  <span className="text-xs text-[#86868b] font-medium mt-1.5 block">raytrace rendering pass</span>
                </div>
              </div>

              <div className="mt-4">
                <RouterLink to="/projects/stylized-isometric-environment" className="btn-apple-blue">
                  Verify Specs
                </RouterLink>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. REACT WEB OS SECTION (Core Engine internal processor styling) */}
      <section className="relative py-32 border-t border-white/5 bg-[#050505]">
        <div className="mx-auto max-w-7xl px-6 text-center">
          
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <span className="text-xs font-bold tracking-widest text-[#f5a972] uppercase font-mono">
              FULL STACK SYSTEM
            </span>
            <h2 className="text-3xl sm:text-6xl font-extrabold tracking-tighter text-white mt-4 leading-tight">
              Secure IPC. built for browser performance.
            </h2>
            <p className="text-sm sm:text-base text-[#86868b] mt-6 max-w-xl leading-relaxed font-medium">
              A browser-based operating system desktop simulation. Engineered secure inter-process communication (IPC) protocols, real-time message streaming over WebSockets, and modular app window frames.
            </p>
            
            <div className="mt-8">
              <RouterLink to="/projects/react-web-os" className="btn-apple-blue">
                Review OS Architecture
              </RouterLink>
            </div>
          </div>

          {/* Full Screen display */}
          <div className="mt-16 max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black aspect-[16/9]">
            <img
              src="/about-illustration.png"
              alt="React Web OS System Architecture"
              className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
              loading="lazy"
            />
          </div>

        </div>
      </section>

      {/* 5. TECH SPECS TIMELINE SECTION (Apple Technical Specifications catalog) */}
      <section className="relative py-32 border-t border-white/5 bg-black">
        <div className="mx-auto max-w-4xl px-6 text-left">
          
          <span className="text-xs font-bold tracking-widest text-[#f5a972] uppercase font-mono block mb-1">
            CATALOG SPECIFICATIONS
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-12">
            Technical Specifications
          </h2>

          <div className="flex flex-col border-t border-white/10">
            
            {/* Experience Block */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-8 border-b border-white/10 items-start gap-4">
              <div className="md:col-span-3 text-xs font-bold tracking-widest text-[#86868b] uppercase font-mono">
                EXPERIENCE
              </div>
              <div className="md:col-span-9 flex flex-col gap-2">
                <h3 className="text-lg font-bold text-white leading-tight">Software Engineering Intern</h3>
                <span className="text-sm text-[#f5a972] font-semibold">Cipher Schools</span>
                <span className="text-xs text-[#86868b] font-mono">JUNE 2025 – AUG 2025 &bull; SECUNDERABAD, INDIA</span>
                <p className="text-xs text-[#86868b] leading-relaxed mt-2 max-w-xl">
                  Implemented scalable production-grade algorithm trees and audited team code review processes using standard Git/GitHub collaborative workflows.
                </p>
              </div>
            </div>

            {/* Leadership & Volunteer Block */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-8 border-b border-white/10 items-start gap-4">
              <div className="md:col-span-3 text-xs font-bold tracking-widest text-[#86868b] uppercase font-mono">
                LEADERSHIP &amp; VOLUNTEER
              </div>
              <div className="md:col-span-9 flex flex-col gap-2">
                <h3 className="text-lg font-bold text-white leading-tight">Volunteer Chemistry Instructor (11th &amp; 12th Grade)</h3>
                <span className="text-sm text-[#f5a972] font-semibold">Local Community Support Center</span>
                <span className="text-xs text-[#86868b] font-mono">JUNE 2024 – JULY 2024</span>
                <ul className="text-xs text-[#86868b] leading-relaxed mt-2 max-w-xl list-disc pl-4 flex flex-col gap-1.5">
                  <li>Developed and delivered targeted Chemistry lessons to senior high school students at a local orphanage, breaking down complex foundational concepts and equations.</li>
                  <li>Designed custom learning frameworks to spark scientific curiosity, improve retention rates, and build academic confidence in an underprivileged demographic.</li>
                </ul>
              </div>
            </div>

            {/* Education Block */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-8 border-b border-white/10 items-start gap-4">
              <div className="md:col-span-3 text-xs font-bold tracking-widest text-[#86868b] uppercase font-mono">
                EDUCATION
              </div>
              <div className="md:col-span-9 flex flex-col gap-2">
                <h3 className="text-lg font-bold text-white leading-tight">Bachelor of Technology in Computer Science and Engineering</h3>
                <span className="text-sm text-[#f5a972] font-semibold">Lovely Professional University</span>
                <span className="text-xs text-[#86868b] font-mono">AUG 2023 – PRESENT</span>
                <p className="text-xs text-[#86868b] leading-relaxed mt-2 max-w-xl">
                  Core Coursework: Data Structures &amp; Algorithms, Database Management Systems, Advanced Systems Engineering.
                </p>
              </div>
            </div>

            {/* Core Focus Block */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-8 border-b border-white/10 items-start gap-4">
              <div className="md:col-span-3 text-xs font-bold tracking-widest text-[#86868b] uppercase font-mono">
                CORE FOCUS
              </div>
              <div className="md:col-span-9">
                <div className="flex flex-wrap gap-2">
                  {['Game Loops & Rendering', 'Memory Management', 'Vector Math & DSA', '3D Environment Design', 'WebSockets & Live APIs', 'Figma Prototyping'].map((item) => (
                    <span key={item} className="inline-flex items-center gap-1 text-xs text-white bg-[#111] px-3.5 py-1.5 rounded-full border border-white/5">
                      <Check className="h-3 w-3 text-[#f5a972]" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};
