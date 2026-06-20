import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Palette } from 'lucide-react';

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
  videoUrl?: string;
  githubUrl?: string;
}

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Game Development' | 'Technical Art' | 'Full Stack'>('All');

  const projectsData: ProjectItem[] = [
    {
      id: 'hollow-loop',
      title: 'Hollow Loop',
      category: 'Game Development',
      role: 'Lead Gameplay Systems Programmer',
      desc: 'Engineered a fully playable 3D psychological horror game utilizing event-driven gameplay scripts and dynamic environment state trackers. Architected highly reusable, modular object sub-systems managing structural player mechanics, absolute checkpoint saving, item inventories, and smooth scene progression.',
      img: '/unity-game.png',
      tech: ['C#', 'Unity Engine', 'OOP Architecture', '3D Vector Math', 'Memory Management', 'DSA'],
      path: '/projects/hollow-loop',
      icon: <Cpu className="h-4 w-4 text-[#f5a972]" />,
      githubUrl: 'https://github.com/Basit0012/HollowLoop'
    },
    {
      id: 'stylized-isometric-environment',
      title: 'Stylized Isometric Environment Animation',
      category: 'Technical Art',
      role: '3D Environment & Light Pipeline Artist',
      desc: 'Drafted, modeled, and animated an atmospheric cyber-noir isometric environment utilizing complex lighting nodes and emissive material property tables. Implemented rigid low-poly meshes, explicit keyframe animations, and camera sequences satisfying an "O Grade" technical execution standard.',
      img: '/blender-work.png',
      tech: ['Blender', 'Advanced rendering', 'Light Baking', 'Emissive Shaders', 'Animation', 'Viewport Optimization'],
      path: '/projects/stylized-isometric-environment',
      icon: <Palette className="h-4 w-4 text-[#f5a972]" />,
      videoUrl: 'https://www.youtube.com/watch?v=4lvplNIqsPE'
    },
    {
      id: 'cpp-pathfinding',
      title: 'C++ Navigation & Pathfinding Engine Simulation',
      category: 'Game Development',
      role: 'Core Systems Programmer',
      desc: 'Developed a lightweight, standalone 2D navigation grid simulation utilizing native C++ to demonstrate algorithmic pathfinding efficiency and game-loop execution constraints. Implemented specialized data structures to manage spatial node parsing, preventing heap fragmentation and reducing overhead via runtime pointer recycling.',
      img: '/web-os-illustration.jpg',
      tech: ['C++', 'Pathfinding Algorithms', 'Memory Pooling', 'Spatial Node Parsing', 'Game Loops', 'Optimizations'],
      path: '/projects/cpp-pathfinding',
      icon: <Cpu className="h-4 w-4 text-[#f5a972]" />,
      githubUrl: 'https://github.com/Basit0012/Cpp-Navigation-Pathfinding-Engine-Simulation'
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
    <div className="mx-auto max-w-5xl px-6 py-12 font-sans text-white bg-black">
      
      {/* Header */}
      <div className="text-left mb-16">
        <span className="text-xs font-bold tracking-widest text-[#f5a972] uppercase font-mono">02. WORKCASE</span>
        <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tighter mt-4 leading-none">Projects</h1>
        <p className="text-sm text-[#86868b] mt-4 max-w-lg leading-relaxed font-medium">
          Detailed case studies demonstrating gameplay engineering, shader modeling, and full-stack software development.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2.5 mb-16 pb-4 border-b border-white/10 justify-start">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`relative px-4 py-2 text-xs sm:text-sm font-semibold tracking-wide rounded-full transition-colors duration-300 ${
              filter === cat ? 'text-[#f5a972]' : 'text-[#86868b] hover:text-white'
            }`}
          >
            {filter === cat && (
              <motion.span
                layoutId="activeFilterPill"
                className="absolute inset-0 bg-white/5 border border-white/10 rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{cat}</span>
          </button>
        ))}
      </div>

      {/* Grid of Projects (Vertical specs layout) */}
      <div className="flex flex-col gap-20">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border-b border-white/10 pb-16"
            >
              {/* Visual Left */}
              <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black aspect-[16/10]">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
              </div>

              {/* Specs Right */}
              <div className="lg:col-span-6 text-left flex flex-col gap-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#f5a972] uppercase font-mono">
                  {project.icon}
                  <span>{project.category}</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  {project.title}
                </h3>
                
                <span className="text-xs font-bold text-[#86868b] tracking-widest font-mono uppercase">
                  ROLE: {project.role}
                </span>

                <p className="text-sm text-[#86868b] leading-relaxed font-medium mt-1">
                  {project.desc}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="text-[11px] text-white bg-[#0f0f0f] border border-white/5 rounded-full px-3.5 py-1.5 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <RouterLink to={project.path} className="btn-apple-blue">
                    Read Case Study
                  </RouterLink>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-apple-secondary"
                    >
                      GitHub Repository
                    </a>
                  )}
                  {project.videoUrl && (
                    <a
                      href={project.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2997ff] hover:underline"
                    >
                      Watch Animation <span className="text-xs">→</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

    </div>
  );
};
