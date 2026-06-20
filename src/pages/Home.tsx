import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Download, Mail, Star, Code2, Palette, Cpu } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';

const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Particle Canvas Component
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
      speedX: number;
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
      const count = Math.min(Math.floor(window.innerWidth / 15), 80);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.4,
          speedY: (Math.random() - 0.5) * 0.4,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around boundaries
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(79, 140, 255, ${p.opacity})`;
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

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10 pointer-events-none" />;
};

export const Home: React.FC = () => {
  const featuredProjects = [
    {
      id: 'hollow-loop',
      title: 'Hollow Loop',
      role: 'Lead Gameplay Systems Programmer',
      desc: '3D psychological horror game built in Unity featuring inventory, modular save architectures, and scene loading systems.',
      img: '/unity-game.png',
      tech: ['Unity', 'C#', 'Blender', 'OOP'],
      path: '/projects/hollow-loop'
    },
    {
      id: 'isometric-env',
      title: 'Stylized Isometric Environment',
      role: 'Technical Artist',
      desc: 'Cyber-noir Blender environment showcasing stylized asset modeling, baking, advanced shader emissions, and dynamic lighting.',
      img: '/blender-work.png',
      tech: ['Blender', 'Environment Design', 'Lighting', 'Rendering'],
      path: '/projects/stylized-isometric-environment'
    },
    {
      id: 'react-web-os',
      title: 'React Web OS & Secure IPC',
      role: 'Full-Stack Engineer',
      desc: 'Web-based operating system layout featuring secure message-passing channels and multi-window desktop applications.',
      img: '/about-illustration.png',
      tech: ['React', 'Node.js', 'WebSockets', 'Tailwind'],
      path: '/projects/react-web-os'
    }
  ];

  return (
    <div className="relative font-sans text-white pb-24 overflow-hidden">
      {/* Visual background details */}
      <ParticleBackground />
      <div className="absolute top-[-10%] right-[-10%] -z-10 h-[500px] w-[500px] rounded-full bg-[#4F8CFF]/5 blur-[120px]" />
      <div className="absolute bottom-[20%] left-[-10%] -z-10 h-[600px] w-[600px] rounded-full bg-[#4F8CFF]/3 blur-[150px]" />
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-8">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-[#4F8CFF] uppercase self-start"
            >
              <Star className="h-3.5 w-3.5 fill-current" />
              Available for Internships & Full-time Roles
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-tight">
                MD Abdul Basit
              </h1>
              <h2 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight text-gradient-accent">
                Game Developer &bull; Technical Artist &bull; Full-Stack Engineer
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-white/60 max-w-2xl leading-relaxed"
            >
              Computer Science student focused on gameplay engineering, asset shaders, and modern web systems. Crafting immersive interactive applications using Unity, Blender, and React.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4 mt-4"
            >
              <Link
                to="/projects"
                className="flex items-center gap-2 rounded-xl bg-white text-black hover:bg-[#4F8CFF] hover:text-white px-6 py-3.5 text-sm font-bold shadow-xl transition-all duration-300 group"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-6 py-3.5 text-sm font-bold transition-all duration-300"
              >
                <Download className="h-4 w-4 text-white/50" />
                Resume
              </a>

              <Link
                to="/contact"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 hover:border-[#4F8CFF]/40 hover:bg-[#4F8CFF]/5 px-6 py-3.5 text-sm font-bold transition-all duration-300"
              >
                <Mail className="h-4 w-4 text-white/50" />
                Contact
              </Link>
            </motion.div>

            {/* Location & Quick Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-6 pt-6 border-t border-white/5 text-xs text-white/50 font-mono"
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-white/30" />
                <span>Secunderabad, India</span>
              </div>
              <a
                href="https://github.com/Basit0012"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors duration-300"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/md-abdul-basit18"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors duration-300"
              >
                <LinkedinIcon className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </motion.div>
          </div>

          {/* Hero Right: Profile Image Card */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-72 sm:w-80 aspect-[4/5] rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl group overflow-hidden"
              style={{ perspective: 1000 }}
            >
              {/* Inner card layout */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#111] border border-white/5">
                <img
                  src="/profile.jpg"
                  alt="MD Abdul Basit"
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Bottom glass tag */}
                <div className="absolute bottom-4 left-4 right-4 glassmorphism rounded-xl p-3 flex items-center justify-between border border-white/10">
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-bold text-white tracking-wide">MD Abdul Basit</span>
                    <span className="text-[9px] text-white/50 tracking-wider uppercase mt-0.5">Game Dev & Artist</span>
                  </div>
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="mt-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <GlassCard hoverGlow delay={0.1} className="flex gap-4 items-center">
              <div className="h-12 w-12 rounded-xl bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 flex items-center justify-center shrink-0">
                <Cpu className="h-5 w-5 text-[#4F8CFF]" />
              </div>
              <div className="text-left">
                <span className="text-2xl font-bold tracking-tight block">5+ Projects</span>
                <span className="text-xs text-white/50 tracking-wide">Unity, Web & Shaders</span>
              </div>
            </GlassCard>

            <GlassCard hoverGlow delay={0.2} className="flex gap-4 items-center">
              <div className="h-12 w-12 rounded-xl bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 flex items-center justify-center shrink-0">
                <Palette className="h-5 w-5 text-[#4F8CFF]" />
              </div>
              <div className="text-left">
                <span className="text-2xl font-bold tracking-tight block">3D Art</span>
                <span className="text-xs text-white/50 tracking-wide">Blender Stylized Scenes</span>
              </div>
            </GlassCard>

            <GlassCard hoverGlow delay={0.3} className="flex gap-4 items-center">
              <div className="h-12 w-12 rounded-xl bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 flex items-center justify-center shrink-0">
                <Code2 className="h-5 w-5 text-[#4F8CFF]" />
              </div>
              <div className="text-left">
                <span className="text-2xl font-bold tracking-tight block">Full-Stack</span>
                <span className="text-xs text-white/50 tracking-wide">React, Node.js & APIs</span>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS PAGE PREVIEW */}
      <section className="mt-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div className="text-left">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Featured Creations</h2>
              <p className="text-sm text-white/50 mt-2 max-w-md">Detailed case studies demonstrating production engineering standards.</p>
            </div>
            <Link 
              to="/projects" 
              className="flex items-center gap-1 text-[#4F8CFF] font-bold text-sm hover:underline self-start"
            >
              All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <GlassCard key={project.id} delay={idx * 0.1} className="flex flex-col h-full !p-0">
                {/* Hero Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/5 bg-[#111]">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 glassmorphism rounded-lg px-2.5 py-1 text-[10px] font-bold text-[#4F8CFF] uppercase border border-white/10">
                    {project.role}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 justify-between text-left">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">{project.title}</h3>
                    <p className="text-sm text-white/50 mt-2.5 leading-relaxed">{project.desc}</p>
                  </div>
                  
                  <div className="mt-6">
                    {/* Tech tag loops */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[10px] font-mono text-white/40 border border-white/5 px-2 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={project.path}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#4F8CFF] transition-colors duration-300"
                    >
                      Read Case Study
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EXPERIENCE & EDUCATION TIMELINE */}
      <section className="mt-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Experience Timeline */}
          <div className="lg:col-span-6 flex flex-col text-left">
            <h2 className="text-2xl font-bold tracking-tight text-white mb-8 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4F8CFF]" />
              Professional Experience
            </h2>
            
            <div className="relative border-l border-white/10 pl-6 ml-3 flex flex-col gap-8">
              {/* Dot */}
              <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#4F8CFF] ring-4 ring-[#4F8CFF]/15" />
              
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold text-[#4F8CFF] font-mono">JUNE 2025 – AUGUST 2025</span>
                <h3 className="text-lg font-bold text-white leading-tight">Software Engineering Intern</h3>
                <span className="text-sm text-white/60 font-medium">Cipher Schools</span>
                <ul className="mt-3 text-xs text-white/50 flex flex-col gap-2 list-disc pl-4 leading-relaxed">
                  <li>Developed clean algorithmic systems and implemented data workflows.</li>
                  <li>Participated in peer code reviews, refining readability and optimization.</li>
                  <li>Utilized structured Git workflows to maintain repository version controls.</li>
                  <li>Collaborated on applying core software architecture and clean coding practices.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="lg:col-span-6 flex flex-col text-left">
            <h2 className="text-2xl font-bold tracking-tight text-white mb-8 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4F8CFF]" />
              Education History
            </h2>

            <div className="relative border-l border-white/10 pl-6 ml-3 flex flex-col gap-8">
              {/* Dot */}
              <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-white ring-4 ring-white/15" />

              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold text-white/60 font-mono">2023 – PRESENT</span>
                <h3 className="text-lg font-bold text-white leading-tight">Bachelor of Technology</h3>
                <span className="text-sm text-white/60 font-medium">Lovely Professional University</span>
                <span className="text-xs text-white/40 italic">Computer Science & Engineering</span>
                <div className="mt-3">
                  <span className="text-[10px] font-bold text-white/40 tracking-wider uppercase block mb-2">Relevant Coursework</span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Data Structures & Algorithms', 'Database Management', 'Systems Engineering', 'Software Architecture'].map((course) => (
                      <span key={course} className="text-[10px] border border-white/5 bg-white/3 px-2.5 py-1 rounded-md text-white/60">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
