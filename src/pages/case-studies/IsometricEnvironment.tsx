import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { GlassCard } from '../../components/ui/GlassCard';

export const IsometricEnvironment: React.FC = () => {
  const galleryItems = [
    { title: 'Beauty Render Pass', desc: 'Cycles Raytracing, volumetric light scattering and 32bit color depths.' },
    { title: 'Contact Shadows Pass', desc: 'Ambient Occlusion layer baked directly into unified texture UV grids.' },
    { title: 'Emissive Glow Mapping', desc: 'Custom procedural shader noise mixing for flickering neon signboards.' },
  ];

  return (
    <div className="mx-auto max-w-5xl px-6 py-12 font-sans text-white bg-black">
      
      {/* Back to Projects */}
      <div className="mb-12">
        <RouterLink 
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#86868b] hover:text-white transition-colors duration-300 font-mono"
        >
          <ArrowLeft className="h-4 w-4" />
          BACK TO PROJECTS
        </RouterLink>
      </div>

      {/* Hero Header */}
      <div className="text-left mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <div>
          <span className="text-xs font-bold tracking-widest text-[#f5a972] uppercase font-mono">
            TECHNICAL ART SPEC SHEET
          </span>
          <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tighter mt-4 leading-none">
            Isometric Environment
          </h1>
          <h2 className="mt-4 text-lg sm:text-xl font-medium text-[#86868b]">
            3D Environment &amp; Light Pipeline Artist &bull; Built in Blender
          </h2>
        </div>
        <a
          href="https://www.youtube.com/watch?v=oe8kgXNqLFI"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-apple-blue shrink-0 text-center"
        >
          Watch Animation Video
        </a>
      </div>

      {/* Main Image Block */}
      <div className="rounded-3xl overflow-hidden border border-white/10 bg-black aspect-[16/10] mb-16 shadow-2xl">
        <img
          src="/blender-work.png"
          alt="Blender Isometric Environment render"
          className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
        />
      </div>

      {/* Specifications Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20 text-left">
        
        {/* Left Column: Details */}
        <div className="lg:col-span-8 flex flex-col gap-12">
          
          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-4">Overview</h3>
            <p className="text-sm sm:text-base text-[#86868b] leading-relaxed font-medium">
              A stylized cyberpunk apartment block designed for real-time application pipelines. The project targets optimized mesh densities, light bakes, and procedural shaders, eliminating massive image texture overhead.
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-6">Pipeline &amp; Modeling Methods</h3>
            <div className="flex flex-col border-t border-white/10">
              
              <div className="py-6 border-b border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <span className="text-xs font-bold text-[#86868b] font-mono uppercase">LIGHT &amp; EMISSIVE NODES</span>
                <span className="sm:col-span-2 text-xs sm:text-sm text-white/80 leading-relaxed font-medium">
                  Drafted, modeled, and animated an atmospheric cyber-noir isometric environment utilizing complex lighting nodes and emissive material property tables.
                </span>
              </div>

              <div className="py-6 border-b border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <span className="text-xs font-bold text-[#86868b] font-mono uppercase">KEYFRAME ANIMATIONS</span>
                <span className="sm:col-span-2 text-xs sm:text-sm text-white/80 leading-relaxed font-medium">
                  Implemented rigid low-poly meshes, explicit keyframe animations, and camera sequences satisfying an "O Grade" technical execution standard.
                </span>
              </div>

              <div className="py-6 border-b border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <span className="text-xs font-bold text-[#86868b] font-mono uppercase">ASSET OPTIMIZATION</span>
                <span className="sm:col-span-2 text-xs sm:text-sm text-white/80 leading-relaxed font-medium">
                  Designed clean, layout-optimized 3D assets constructed specifically for unhindered viewport performance when deployed within external engine levels.
                </span>
              </div>

            </div>
          </div>

          {/* Render Passes Grid */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-8">Rendering Passes Specifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {galleryItems.map((item, idx) => (
                <GlassCard key={item.title} className="p-6 text-left border border-white/10 bg-[#050505] rounded-2xl flex flex-col justify-between h-44">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono text-[#f5a972] uppercase font-bold">PASS 0{idx + 1}</span>
                    <span className="text-sm font-bold text-white leading-tight mt-1">{item.title}</span>
                  </div>
                  <p className="text-xs text-[#86868b] leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Spec Metrics */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          
          <GlassCard className="p-6 text-left border border-white/10 bg-[#050505] rounded-2xl">
            <h3 className="text-xs font-bold tracking-widest text-[#86868b] uppercase font-mono border-b border-white/10 pb-3">
              MESH STATISTICS
            </h3>
            <div className="flex flex-col gap-4 mt-6 text-xs font-mono">
              <div className="flex items-center justify-between">
                <span className="text-white/40">VERTICES</span>
                <span className="text-white font-bold">45,120</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/40">EDGES</span>
                <span className="text-white font-bold">88,240</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/40">TRIANGLES</span>
                <span className="text-white font-bold">78,560</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/40">UV SHEETS</span>
                <span className="text-white font-bold">2 Unified Layouts</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/40">RENDERER</span>
                <span className="text-white font-bold">Cycles Path-Tracer</span>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6 text-left border border-white/10 bg-[#050505] rounded-2xl">
            <h3 className="text-xs font-bold tracking-widest text-[#86868b] uppercase font-mono border-b border-white/10 pb-3">
              MATERIAL SPECS
            </h3>
            <div className="flex flex-col gap-5 mt-6">
              <div className="flex gap-2.5 items-start text-xs">
                <CheckCircle2 className="h-4.5 w-4.5 text-[#f5a972] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-white">Sub-Surface Scatter</span>
                  <span className="text-[#86868b] font-medium leading-relaxed">Simulated thickness scatter parameters on polymer pipes.</span>
                </div>
              </div>

              <div className="flex gap-2.5 items-start text-xs">
                <CheckCircle2 className="h-4.5 w-4.5 text-[#f5a972] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-white">Emission Nodes</span>
                  <span className="text-[#86868b] font-medium leading-relaxed">Integrated Bloom and glow multipliers for high contrast cyberpunk vibes.</span>
                </div>
              </div>
            </div>
          </GlassCard>

        </div>

      </div>

    </div>
  );
};
