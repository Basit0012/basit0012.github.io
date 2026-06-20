import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/ui/GlassCard';
import { Gamepad2, Paintbrush, Code2 } from 'lucide-react';

export const About: React.FC = () => {
  const skillCategories = [
    {
      title: 'Game Development & Core Engineering',
      icon: <Gamepad2 className="h-5 w-5 text-[#f5a972]" />,
      skills: ['C++', 'C#', 'Unity Engine', 'Object-Oriented Programming (OOP)', '3D Vector Math', 'Game Loop Optimization', 'Memory Management', 'Data Structures & Algorithms (DSA)'],
    },
    {
      title: 'Technical Art & Design UI/UX',
      icon: <Paintbrush className="h-5 w-5 text-[#f5a972]" />,
      skills: ['Blender (Advanced - O Grade Performance)', 'Figma (Interactive Gameplay Interface Wireframing & State Flows)'],
    },
    {
      title: 'Full-Stack Systems & Cloud Infrastructure',
      icon: <Code2 className="h-5 w-5 text-[#f5a972]" />,
      skills: ['Node.js', 'React.js', 'Express.js', 'WebSockets', 'HTML5', 'CSS3', 'Tailwind CSS', 'RESTful APIs', 'PostgreSQL', 'MongoDB', 'Git/GitHub'],
    },
  ];

  const companies = [
    'Ubisoft', 'Epic Games', 'Riot Games', 'EA', 'Rockstar Games', 
    'Activision Blizzard', 'Microsoft', 'Google', 'Amazon'
  ];

  return (
    <div className="mx-auto max-w-5xl px-6 py-12 font-sans text-white bg-black">
      
      {/* Header */}
      <div className="text-left mb-20">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs font-bold tracking-widest text-[#f5a972] uppercase font-mono"
        >
          01. PROFILE
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-6xl font-extrabold tracking-tighter mt-4 leading-none"
        >
          MD Abdul Basit
        </motion.h1>
      </div>

      {/* Main Bio Paragraph */}
      <section className="mb-24">
        <GlassCard className="p-10 border border-white/10 text-left bg-[#050505] rounded-3xl">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-6">
            Gameplay Programming &bull; Technical Art &bull; Full-Stack Engineering
          </h2>
          <div className="flex flex-col gap-6 text-sm sm:text-base text-[#86868b] leading-relaxed font-medium">
            <p>
              I am a Computer Science &amp; Engineering student at Lovely Professional University, specializing in creating high-performance interactive experiences.
            </p>
            <p>
              My expertise merges standard gameplay architecture (C# events, slots management, serialization) with technical artistic parameters (Blender 3D mesh modeling, procedural lighting, emissive shaders). I also extend this expertise to real-time full-stack web platforms using React and Node.js.
            </p>
            <p>
              I design components, systems, and shaders with optimization in mind, ensuring codebases remain decoupled, modular, and easy to scale.
            </p>
          </div>
        </GlassCard>
      </section>

      {/* Competencies Structured List */}
      <section className="mb-24">
        <span className="text-xs font-bold tracking-widest text-[#f5a972] uppercase font-mono block mb-1">
          TECHNICAL MATRIX
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-12">
          Competency Specifications
        </h2>

        <div className="flex flex-col border-t border-white/10">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="grid grid-cols-1 md:grid-cols-12 py-8 border-b border-white/10 items-start gap-4 text-left">
              <div className="md:col-span-4 flex items-center gap-2.5 text-xs font-bold tracking-widest text-[#86868b] uppercase font-mono">
                {cat.icon}
                <span>{cat.title}</span>
              </div>
              <div className="md:col-span-8">
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="text-xs text-white bg-[#0a0a0a] border border-white/5 rounded-full px-4 py-2 hover:border-[#f5a972]/30 transition-all duration-300 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recruiting Targets Grid */}
      <section className="py-12 border-t border-white/10">
        <span className="text-[10px] font-bold tracking-widest text-[#86868b] uppercase block text-center mb-8 font-mono">
          TAILORED FOR RECRUITING ECOSYSTEMS AT
        </span>
        <div className="grid grid-cols-3 md:grid-cols-9 gap-6 items-center justify-center opacity-30 grayscale hover:opacity-75 transition-all duration-500">
          {companies.map((company) => (
            <span 
              key={company}
              className="font-mono text-xs sm:text-sm font-bold tracking-widest text-white hover:text-[#f5a972] transition-colors duration-300 select-none text-center"
            >
              {company.toUpperCase()}
            </span>
          ))}
        </div>
      </section>

    </div>
  );
};
