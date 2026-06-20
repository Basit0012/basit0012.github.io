import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/ui/GlassCard';
import { 
  Gamepad2, 
  Paintbrush, 
  Code2, 
  Database, 
  Wrench, 
  Layers, 
  BrainCircuit, 
  CheckCircle2 
} from 'lucide-react';

export const About: React.FC = () => {
  // Categories & Skills definition
  const skillCategories = [
    {
      title: 'Game Development',
      icon: <Gamepad2 className="h-5 w-5 text-[#4F8CFF]" />,
      skills: ['Unity', 'C#', 'C++', 'OOP', 'Gameplay Systems', 'Performance Optimization'],
    },
    {
      title: 'Technical Art',
      icon: <Paintbrush className="h-5 w-5 text-[#4F8CFF]" />,
      skills: ['Blender', 'Environment Design', 'Lighting', 'Animation', 'Rendering'],
    },
    {
      title: 'Full Stack',
      icon: <Code2 className="h-5 w-5 text-[#4F8CFF]" />,
      skills: ['React', 'Node.js', 'Express', 'JavaScript', 'TypeScript', 'REST APIs'],
    },
    {
      title: 'Databases',
      icon: <Database className="h-5 w-5 text-[#4F8CFF]" />,
      skills: ['MongoDB', 'PostgreSQL'],
    },
    {
      title: 'UI/UX Design',
      icon: <Layers className="h-5 w-5 text-[#4F8CFF]" />,
      skills: ['Figma', 'Wireframing', 'User Experience'],
    },
    {
      title: 'Tools & Protocols',
      icon: <Wrench className="h-5 w-5 text-[#4F8CFF]" />,
      skills: ['Git', 'GitHub', 'VS Code', 'WebSockets'],
    },
  ];

  const interests = [
    'Gameplay Programming',
    'Unity Development',
    'Technical Art (Shaders & Modeling)',
    'Real-Time System Architectures',
    'Modern Web Applications',
    'Clean Software Engineering'
  ];

  const companies = ['Ubisoft', 'Epic Games', 'Riot Games', 'EA', 'Rockstar Games', 'Activision Blizzard', 'Microsoft', 'Google', 'Amazon'];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 font-sans text-white">
      
      {/* Page Header */}
      <div className="text-left mb-12">
        <motion.span 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xs font-bold tracking-widest text-[#4F8CFF] uppercase"
        >
          01. PROFILE
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-extrabold tracking-tight sm:text-5xl mt-2"
        >
          About MD Abdul Basit
        </motion.h1>
      </div>

      {/* Biography & Interests Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
        
        {/* Left Bio Card */}
        <div className="lg:col-span-7">
          <GlassCard className="flex flex-col gap-6 text-left p-8">
            <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <BrainCircuit className="h-5.5 w-5.5 text-[#4F8CFF]" />
              Interactive Experience Engineer
            </h2>
            <div className="flex flex-col gap-4 text-sm sm:text-base text-white/70 leading-relaxed font-normal">
              <p>
                I am a B.Tech Computer Science & Engineering student at Lovely Professional University. My passion lies in blending the logical complexity of Gameplay Programming with the visual aesthetics of Technical Art.
              </p>
              <p>
                Whether it is engineering event-driven components for a modular psychological horror game in Unity, custom crafting assets and shader emissions in Blender, or scripting real-time IPC messaging channels in a browser-based OS, I thrive on writing high-performance, maintainable systems.
              </p>
              <p>
                My ultimate goal is to contribute to production environments at AAA game studios or technology leaders, engineering tools, gameplay mechanics, or web platforms that delight millions of players worldwide.
              </p>
            </div>
          </GlassCard>
        </div>

        {/* Right Interests Card */}
        <div className="lg:col-span-5">
          <GlassCard className="flex flex-col gap-6 text-left p-8 h-full justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white">Focus Fields</h2>
              <p className="text-xs text-white/40 mt-1.5 font-mono uppercase">Key Fields of Application & Study</p>
              
              <div className="flex flex-col gap-3 mt-6">
                {interests.map((interest, idx) => (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 + 0.2 }}
                    key={interest}
                    className="flex items-center gap-3 text-sm text-white/80"
                  >
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#4F8CFF] shrink-0" />
                    <span>{interest}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-white/40 font-mono">
              <span>SPECIALTY: GAME & WEB</span>
              <span>LPU B.TECH CSE</span>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Skills Matrix Section */}
      <div className="mb-20">
        <div className="text-left mb-10">
          <span className="text-xs font-bold tracking-widest text-[#4F8CFF] uppercase">02. TECHNICAL MATRIX</span>
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl mt-1">Core Competency Grid</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <GlassCard key={category.title} delay={idx * 0.05} className="flex flex-col gap-5 text-left p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 flex items-center justify-center shrink-0">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold tracking-tight text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 hover:border-[#4F8CFF]/30 hover:bg-[#4F8CFF]/5 text-white/75 transition-all duration-300 select-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Target Studios Section */}
      <div>
        <GlassCard className="p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-radial-[circle_at_50%_50%] from-[#4F8CFF]/5 to-transparent opacity-50" />
          
          <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">Target Recruiting Ecosystem</h2>
          <p className="text-sm text-white/50 mt-2 max-w-lg mx-auto leading-relaxed">
            I actively structure my case studies, architectural quality, and technical art parameters to conform to the high standards of top game developers and tech firms.
          </p>

          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mt-8 opacity-40 grayscale hover:opacity-85 hover:grayscale-0 transition-all duration-500">
            {companies.map((company) => (
              <span 
                key={company}
                className="font-mono text-sm sm:text-base font-bold tracking-widest text-white transition-colors duration-300 hover:text-[#4F8CFF] select-none"
              >
                {company.toUpperCase()}
              </span>
            ))}
          </div>
        </GlassCard>
      </div>

    </div>
  );
};
