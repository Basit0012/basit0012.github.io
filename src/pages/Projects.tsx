import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '../components/ui/GlassCard';
import { Star, Cpu, Palette, Code2 } from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  category: 'Game Development' | 'Technical Art' | 'Full Stack';
  role: string;
  desc: string;
  img: string;
  tech: string[];
  path: string;
  icon: React.ReactNode;
}

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Game Development' | 'Technical Art' | 'Full Stack'>('All');

  const projectsData: ProjectItem[] = [
    {
      id: 'hollow-loop',
      title: 'Hollow Loop',
      category: 'Game Development',
      role: 'Lead Gameplay Systems Programmer',
      desc: 'A 3D psychological horror game designed with a highly modular architecture in Unity. Built custom inventory utilities, robust checkpoint/save databases, dynamic scene loading pipelines, and event-driven gameplay scripts.',
      img: '/unity-game.png',
      tech: ['Unity', 'C#', 'Blender', 'OOP', 'Gameplay systems', 'Serialization'],
      path: '/projects/hollow-loop',
      icon: <Cpu className="h-4 w-4 text-[#4F8CFF]" />
    },
    {
      id: 'stylized-isometric-environment',
      title: 'Stylized Isometric Environment Animation',
      category: 'Technical Art',
      role: 'Technical Artist',
      desc: 'A futuristic cyber-noir environment built in Blender. Leveraged custom vertex colors, emissive shaders, baking techniques, ambient occlusion nodes, and custom animation cycles to produce detailed cinematic renders.',
      img: '/blender-work.png',
      tech: ['Blender', 'Environment Design', 'Lighting', 'Animation', 'Shader Emission', 'Rendering'],
      path: '/projects/stylized-isometric-environment',
      icon: <Palette className="h-4 w-4 text-[#4F8CFF]" />
    },
    {
      id: 'react-web-os',
      title: 'React Web OS & Secure IPC System',
      category: 'Full Stack',
      role: 'Full Stack Engineer',
      desc: 'A browser-based operating system desktop simulation. Engineered secure inter-process communication (IPC) protocols, real-time message streaming over WebSockets, modular app window frames, and backend endpoints.',
      img: '/about-illustration.png',
      tech: ['React', 'Node.js', 'WebSockets', 'Tailwind CSS', 'IPC Protocols', 'Express'],
      path: '/projects/react-web-os',
      icon: <Code2 className="h-4 w-4 text-[#4F8CFF]" />
    }
  ];

  const categories: Array<'All' | 'Game Development' | 'Technical Art' | 'Full Stack'> = [
    'All',
    'Game Development',
    'Technical Art',
    'Full Stack'
  ];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 font-sans text-white">
      
      {/* Header */}
      <div className="text-left mb-12">
        <span className="text-xs font-bold tracking-widest text-[#4F8CFF] uppercase">02. WORKCASE</span>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl mt-2">Projects Showcase</h1>
        <p className="text-sm text-white/50 mt-3 max-w-lg leading-relaxed">
          Explore case studies covering gameplay systems engineering, custom shader modeling, and full-stack software development.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2.5 mb-12 pb-4 border-b border-white/5 justify-start">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`relative px-4 py-2 text-xs sm:text-sm font-semibold tracking-wide rounded-xl transition-colors duration-300 ${
              filter === cat ? 'text-[#4F8CFF]' : 'text-white/60 hover:text-white'
            }`}
          >
            {/* Background pill shape on selection */}
            {filter === cat && (
              <motion.span
                layoutId="activeFilterPill"
                className="absolute inset-0 bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 rounded-xl"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{cat}</span>
          </button>
        ))}
      </div>

      {/* Grid of Projects */}
      <motion.div 
        layout 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              key={project.id}
              className="h-full"
            >
              <GlassCard hoverGlow delay={idx * 0.05} className="flex flex-col h-full !p-0">
                {/* Visual Banner */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/5 bg-[#111]">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Category overlay label */}
                  <div className="absolute top-3 left-3 glassmorphism rounded-lg px-2.5 py-1 text-[10px] font-bold text-[#4F8CFF] uppercase border border-white/10 flex items-center gap-1.5">
                    {project.icon}
                    {project.category}
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 flex flex-col justify-between flex-1 text-left">
                  <div>
                    <span className="text-[10px] font-mono text-white/40 tracking-wider uppercase block mb-1">
                      ROLE: {project.role}
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/50 mt-3 leading-relaxed">
                      {project.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/5">
                    {/* Tech Stacks */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t) => (
                        <span 
                          key={t} 
                          className="text-[10px] font-mono text-white/40 border border-white/5 bg-white/2 px-2 py-0.5 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={project.path}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#4F8CFF] transition-all duration-300 group"
                    >
                      Read Case Study
                      <Star className="h-3.5 w-3.5 text-[#4F8CFF]/50 group-hover:text-[#4F8CFF] transition-colors" />
                    </Link>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

    </div>
  );
};
