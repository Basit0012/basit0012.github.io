import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowLeft, FileCode, CheckCircle2 } from 'lucide-react';
import { GlassCard } from '../../components/ui/GlassCard';

export const ReactWebOS: React.FC = () => {
  const codeSnippet = `import { EventEmitter } from 'events';

export interface IPCMessage {
  id: string;
  source: string;
  target: string;
  payload: any;
  signature: string;
}

export class SecureIPCChannel extends EventEmitter {
  private allowedOrigins: Set<string>;
  
  constructor() {
    super();
    this.allowedOrigins = new Set(['system:core', 'app:terminal', 'app:browser']);
  }

  public sendMessage(msg: IPCMessage): boolean {
    if (!this.validateMessage(msg)) {
      console.warn(\`[IPC Blocked] Unauthorized message from \${msg.source} to \${msg.target}\`);
      return false;
    }

    // Process and emit
    this.emit(\`channel:\${msg.target}\`, msg);
    return true;
  }

  private validateMessage(msg: IPCMessage): boolean {
    // 1. Source Origin Check
    if (!this.allowedOrigins.has(msg.source)) return false;

    // 2. Encryption Signature validation
    const expectedSignature = this.generateLocalSignature(msg);
    return msg.signature === expectedSignature;
  }

  private generateLocalSignature(msg: IPCMessage): string {
    // Mock signature hash validation
    return btoa(\`\${msg.source}-\${msg.target}-\${JSON.stringify(msg.payload)}\`);
  }
}`;

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
      <div className="text-left mb-16">
        <span className="text-xs font-bold tracking-widest text-[#f5a972] uppercase font-mono">
          SYSTEM ARCHITECTURE SPEC SHEET
        </span>
        <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tighter mt-4 leading-none">
          React Web OS
        </h1>
        <h2 className="mt-4 text-lg sm:text-xl font-medium text-[#86868b]">
          Full-Stack Engineering Intern &bull; Browser Operating System &amp; Secure IPC
        </h2>
      </div>

      {/* Main Image Block */}
      <div className="rounded-3xl overflow-hidden border border-white/10 bg-black aspect-[16/9] mb-16 shadow-2xl">
        <img
          src="/about-illustration.png"
          alt="React Web OS screenshot"
          className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
        />
      </div>

      {/* Specifications Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20 text-left">
        
        {/* Left Column: Details */}
        <div className="lg:col-span-8 flex flex-col gap-12">
          
          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-4">Project Overview</h3>
            <p className="text-sm sm:text-base text-[#86868b] leading-relaxed font-medium">
              React Web OS is a browser-based operating system desktop simulation. Engineered secure inter-process communication (IPC) protocols, real-time message streaming over WebSockets, and modular app window frames.
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-6">IPC Flow Design</h3>
            <div className="flex flex-col border-t border-white/10">
              
              <div className="py-6 border-b border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <span className="text-xs font-bold text-[#86868b] font-mono uppercase">INTERACTIVE DESKTOP</span>
                <span className="sm:col-span-2 text-xs sm:text-sm text-white/80 leading-relaxed font-medium">
                  Engineered an interactive browser-simulated environment using React.js, Tailwind CSS, and Vite to execute fluid UI scaling and granular client-side state adjustments.
                </span>
              </div>

              <div className="py-6 border-b border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <span className="text-xs font-bold text-[#86868b] font-mono uppercase">COMMUNICATIONS LINK</span>
                <span className="sm:col-span-2 text-xs sm:text-sm text-white/80 leading-relaxed font-medium">
                  Created a bidirectional communications infrastructure featuring Node.js and WebSockets handling high-frequency packet transmission and server synchronization.
                </span>
              </div>

              <div className="py-6 border-b border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <span className="text-xs font-bold text-[#86868b] font-mono uppercase">STRESS TESTING</span>
                <span className="sm:col-span-2 text-xs sm:text-sm text-white/80 leading-relaxed font-medium">
                  Debugged micro-latency events, concurrency blockers, and real-time state mutations during production cycle stress testing.
                </span>
              </div>

            </div>
          </div>

          {/* SVG Visual Flow Chart */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-4">Architecture &amp; Channel Flows</h3>
            <div className="flex justify-center w-full">
              <svg viewBox="0 0 800 350" className="w-full max-w-2xl h-auto border border-white/10 bg-black/40 rounded-2xl p-6">
                <style>{`
                  .box { fill: #111111; stroke: rgba(255,255,255,0.1); stroke-width: 1.5px; rx: 12px; }
                  .accent-box { fill: rgba(0,113,227,0.05); stroke: #0071e3; stroke-width: 1.5px; rx: 12px; }
                  .label { fill: #FFFFFF; font-family: monospace; font-size: 11px; font-weight: bold; text-anchor: middle; }
                  .muted-label { fill: #86868b; font-family: monospace; font-size: 9px; text-anchor: middle; }
                  .arrow { stroke: rgba(255,255,255,0.2); stroke-width: 1.5px; fill: none; stroke-dasharray: 4; }
                  .line { stroke: #0071e3; stroke-width: 2px; }
                `}</style>
                
                <rect x="50" y="50" width="160" height="70" className="box" />
                <text x="130" y="85" className="label">APP WINDOWS</text>
                <text x="130" y="102" className="muted-label">(Terminal, Editor)</text>

                <rect x="50" y="180" width="160" height="70" className="box" />
                <text x="130" y="215" className="label">CORE DESKTOP</text>
                <text x="130" y="232" className="muted-label">(System State)</text>

                <rect x="310" y="115" width="180" height="80" className="accent-box" />
                <text x="400" y="152" className="label">SECURE IPC CORE</text>
                <text x="400" y="170" className="muted-label">(Auth Signatures)</text>

                <rect x="590" y="115" width="160" height="80" className="box" />
                <text x="670" y="152" className="label">NODE.JS BACKEND</text>
                <text x="670" y="170" className="muted-label">(WS Socket Server)</text>

                <path d="M 210 85 L 260 85 L 260 140 L 310 140" className="arrow" />
                <path d="M 210 215 L 260 215 L 260 170 L 310 170" className="arrow" />
                <path d="M 490 155 L 590 155" className="line" />
                
                <text x="260" y="125" className="muted-label">IPC Event</text>
                <text x="540" y="145" className="muted-label">Stream Port</text>
              </svg>
            </div>
          </div>

          {/* Code Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <FileCode className="h-5 w-5 text-[#f5a972]" />
                TypeScript Message Broker Snippet
              </h3>
              <span className="text-[10px] font-mono text-[#86868b]">TYPESCRIPT</span>
            </div>
            
            <div className="rounded-2xl border border-white/10 bg-[#050505] p-6 font-mono text-xs overflow-x-auto leading-relaxed max-h-[380px]">
              <pre className="text-left text-white/70">
                <code>{codeSnippet}</code>
              </pre>
            </div>
          </div>

        </div>

        {/* Right Column: Spec Metrics */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          
          <GlassCard className="p-6 text-left border border-white/10 bg-[#050505] rounded-2xl">
            <h3 className="text-xs font-bold tracking-widest text-[#86868b] uppercase font-mono border-b border-white/10 pb-3">
              TECHNICAL SPECIFICATIONS
            </h3>
            <div className="flex flex-col gap-4 mt-6 text-xs font-mono">
              <div className="flex items-center justify-between">
                <span className="text-white/40">CLIENT ENGINE</span>
                <span className="text-white font-bold">React 19 / Vite</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/40">LANGUAGE</span>
                <span className="text-white font-bold">TypeScript 5</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/40">SERVER</span>
                <span className="text-white font-bold">Node.js (Express)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/40">SOCKET LINK</span>
                <span className="text-white font-bold">WebSocket (WS)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/40">CSS ENVELOPE</span>
                <span className="text-white font-bold">Tailwind CSS v4</span>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6 text-left border border-white/10 bg-[#050505] rounded-2xl">
            <h3 className="text-xs font-bold tracking-widest text-[#86868b] uppercase font-mono border-b border-white/10 pb-3">
              SYSTEM OPTIMIZATIONS
            </h3>
            <div className="flex flex-col gap-5 mt-6">
              <div className="flex gap-2.5 items-start text-xs">
                <CheckCircle2 className="h-4.5 w-4.5 text-[#f5a972] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-white">Listener cleanups</span>
                  <span className="text-[#86868b] font-medium leading-relaxed">Eliminated leaks on window deletion by cleaning sub-listeners.</span>
                </div>
              </div>

              <div className="flex gap-2.5 items-start text-xs">
                <CheckCircle2 className="h-4.5 w-4.5 text-[#f5a972] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-white">Batched Coordinates</span>
                  <span className="text-[#86868b] font-medium leading-relaxed">Debounced positioning signals, avoiding UI stuttering.</span>
                </div>
              </div>
            </div>
          </GlassCard>

        </div>

      </div>

    </div>
  );
};
