import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Sun, Eye, Film, CheckCircle2 } from 'lucide-react';
import { GlassCard } from '../../components/ui/GlassCard';

export const IsometricEnvironment: React.FC = () => {
  const galleryItems = [
    { title: 'Beauty Render (Cycles)', type: 'Final color grading and volumetrics', size: '1920x1080' },
    { title: 'Ambient Occlusion Pass', type: 'Detail contact shadow mapping', size: '1920x1080' },
    { title: 'Emissive Material Glow', type: 'Shaders bloom mapping', size: '1920x1080' },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 font-sans text-white">
      
      {/* Back to Projects */}
      <div className="mb-8">
        <Link 
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-bold text-white/50 hover:text-white transition-colors duration-300"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>
      </div>

      {/* Hero Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        
        {/* Left header */}
        <div className="lg:col-span-8 text-left">
          <span className="text-xs font-bold tracking-widest text-[#4F8CFF] uppercase font-mono">
            TECHNICAL ART CASE STUDY
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl mt-2 leading-tight">
            Stylized Isometric Environment
          </h1>
          <h2 className="mt-3 text-lg sm:text-xl font-medium text-white/60">
            Cyber-Noir Environment Design &amp; Camera Animation &bull; Built in Blender
          </h2>
          
          <div className="flex flex-wrap gap-2 mt-6">
            {['Blender 3D', 'Cycles & Eevee', 'Procedural Shading', 'Emissive Lights', 'Light Baking', 'Camera Pathing'].map((tech) => (
              <span key={tech} className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 text-white/70">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right role summary */}
        <div className="lg:col-span-4 w-full">
          <GlassCard className="p-6 text-left border border-[#4F8CFF]/20 bg-[#4F8CFF]/5">
            <span className="text-[10px] font-mono text-white/40 tracking-wider uppercase block">DEVELOPMENT ROLE</span>
            <span className="text-xl font-bold text-white block mt-1">Technical Artist</span>
            <span className="text-xs text-white/50 mt-3 block leading-relaxed">
              Designed shaders, baked contact occlusion details, set up the camera rigs, and animated mechanical components.
            </span>
          </GlassCard>
        </div>
      </div>

      {/* Case Study Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Details */}
        <div className="lg:col-span-8 flex flex-col gap-10 text-left">
          
          {/* Overview */}
          <GlassCard className="p-8">
            <h3 className="text-xl font-bold text-white tracking-tight border-b border-white/5 pb-3">Project Overview</h3>
            <p className="text-sm sm:text-base text-white/70 mt-4 leading-relaxed font-normal">
              This project involves creating a stylized, cyber-noir isometric building block. The core objective was constructing a highly atmospheric environment optimized for real-time engines. Balancing high-fidelity emissive lights, custom volumetric mist, and low texture memory footprint required implementing lightmaps and procedural shader baking.
            </p>
          </GlassCard>

          {/* Environment Breakdown */}
          <GlassCard className="p-8">
            <h3 className="text-xl font-bold text-white tracking-tight border-b border-white/5 pb-3">Technical Art Breakdown</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Sun className="h-4.5 w-4.5 text-[#4F8CFF]" />
                  <h4 className="text-base font-bold text-white">Atmospheric Lighting</h4>
                </div>
                <p className="text-xs text-white/50 leading-relaxed pl-6">
                  Set up high-contrast area lights simulating cyberpunk neon signs. Combined area light volumes with a subtle scatter volume node to render physical light beams.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4.5 w-4.5 text-[#4F8CFF]" />
                  <h4 className="text-base font-bold text-white">Custom Emissive Shaders</h4>
                </div>
                <p className="text-xs text-white/50 leading-relaxed pl-6">
                  Programmed shader nodes in Blender combining Musgrave texture noises with emissive color ramps, creating flicker frequencies for neon sign grids.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Eye className="h-4.5 w-4.5 text-[#4F8CFF]" />
                  <h4 className="text-base font-bold text-white">Lightmaps & Texture Baking</h4>
                </div>
                <p className="text-xs text-white/50 leading-relaxed pl-6">
                  Baked ambient occlusion passes and diffuse colors directly into unified coordinate UV templates, reducing runtime compute resources for the environment blocks.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Film className="h-4.5 w-4.5 text-[#4F8CFF]" />
                  <h4 className="text-base font-bold text-white">Cinematic Camera Rig</h4>
                </div>
                <p className="text-xs text-white/50 leading-relaxed pl-6">
                  Constrained camera movement to bezier curve paths with follow-targets, ensuring a smooth, fluid rotational flyover matching showcase animations.
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Interactive Rendering Gallery Section */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold text-white tracking-tight border-b border-white/5 pb-3">Rendering Breakdown Passes</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {galleryItems.map((item, idx) => (
                <GlassCard key={item.title} delay={idx * 0.05} className="flex flex-col justify-between text-left p-6 h-48 border border-white/5 hover:border-[#4F8CFF]/30">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-white/40 tracking-wider uppercase">PASS 0{idx + 1}</span>
                    <span className="text-base font-bold text-white mt-1.5 leading-snug">{item.title}</span>
                    <span className="text-xs text-[#4F8CFF] mt-1 font-mono">{item.size}</span>
                  </div>
                  <span className="text-xs text-white/50 font-normal leading-relaxed">{item.type}</span>
                </GlassCard>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Spec Grid & Shader Node Parameters */}
        <div className="lg:col-span-4 flex flex-col gap-8 text-left">
          
          {/* Modeling Specs */}
          <GlassCard className="p-6">
            <h3 className="text-lg font-bold text-white tracking-tight border-b border-white/5 pb-2">Mesh Statistics</h3>
            
            <div className="flex flex-col gap-4 mt-4 text-xs font-mono">
              <div className="flex items-center justify-between">
                <span className="text-white/40">VERTICES</span>
                <span className="text-white">45,120</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/40">EDGES</span>
                <span className="text-white">88,240</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/40">TRIANGLES</span>
                <span className="text-white">78,560</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/40">UV MAP SHEETS</span>
                <span className="text-white">2 Unified Sheets</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/40">RENDER SYSTEM</span>
                <span className="text-white">Cycles Raytracer</span>
              </div>
            </div>
          </GlassCard>

          {/* Shader Parameter Details */}
          <GlassCard className="p-6">
            <h3 className="text-lg font-bold text-white tracking-tight border-b border-white/5 pb-2">Shading Techniques</h3>
            
            <div className="flex flex-col gap-4 mt-6">
              <div className="flex gap-2.5 items-start">
                <CheckCircle2 className="h-4.5 w-4.5 text-[#4F8CFF] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white">Procedural Noise Mixing</span>
                  <span className="text-[11px] text-white/40 mt-1">Constructed modular dirt and rust wear mapping directly using gradient math nodes without image templates.</span>
                </div>
              </div>

              <div className="flex gap-2.5 items-start">
                <CheckCircle2 className="h-4.5 w-4.5 text-[#4F8CFF] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white">Sub-Surface Scattering (SSS)</span>
                  <span className="text-[11px] text-white/40 mt-1">Configured thickness parameters on plastic cables and pipes to scatter light realistically from neon sources.</span>
                </div>
              </div>

              <div className="flex gap-2.5 items-start">
                <CheckCircle2 className="h-4.5 w-4.5 text-[#4F8CFF] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white">Volume Absorption Maps</span>
                  <span className="text-[11px] text-white/40 mt-1">Integrated volume absorption inside glass capsules, simulating glowing liquid tanks.</span>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>

      </div>

    </div>
  );
};
