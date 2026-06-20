import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Network, ShieldAlert, FileCode, CheckCircle2 } from 'lucide-react';
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
            FULL-STACK ARCHITECTURE CASE STUDY
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl mt-2 leading-tight">
            React Web OS &amp; Secure IPC
          </h1>
          <h2 className="mt-3 text-lg sm:text-xl font-medium text-white/60">
            Real-Time Browser Desktop Environment &bull; Core Communication Architecture
          </h2>
          
          <div className="flex flex-wrap gap-2 mt-6">
            {['React 19', 'TypeScript', 'Node.js', 'WebSockets', 'IPC Security', 'Tailwind CSS'].map((tech) => (
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
            <span className="text-xl font-bold text-white block mt-1">Full Stack Engineer</span>
            <span className="text-xs text-white/50 mt-3 block leading-relaxed">
              Designed the system architecture, structured the state management for desktop window systems, and built secure WebSocket streams.
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
              React Web OS is a fully interactive simulation of a desktop operating system running directly inside the browser. It features floating window management, app lifecycles (Terminal, File Manager, Browser, Text Editor), and a mock background daemon system. The primary engineering challenge was constructing a secure message broker (Secure IPC) that isolated applications while allowing real-time message streaming.
            </p>
          </GlassCard>

          {/* Flow Architecture Diagram */}
          <GlassCard className="p-8">
            <h3 className="text-xl font-bold text-white tracking-tight border-b border-white/5 pb-3 flex items-center gap-2">
              <Network className="h-5 w-5 text-[#4F8CFF]" />
              System Architecture &amp; Message Flow
            </h3>
            
            {/* SVG Visual Flow Chart */}
            <div className="mt-8 flex justify-center w-full">
              <svg viewBox="0 0 800 350" className="w-full max-w-2xl h-auto border border-white/5 bg-black/40 rounded-2xl p-6">
                {/* Node Styles */}
                <style>{`
                  .box { fill: #111111; stroke: rgba(255,255,255,0.1); stroke-width: 1.5px; rx: 12px; }
                  .accent-box { fill: rgba(79,140,255,0.05); stroke: #4F8CFF; stroke-width: 1.5px; rx: 12px; }
                  .label { fill: #FFFFFF; font-family: monospace; font-size: 11px; font-weight: bold; text-anchor: middle; }
                  .muted-label { fill: #B3B3B3; font-family: monospace; font-size: 9px; text-anchor: middle; }
                  .arrow { stroke: rgba(255,255,255,0.2); stroke-width: 1.5px; fill: none; stroke-dasharray: 4; }
                  .line { stroke: #4F8CFF; stroke-width: 2px; }
                `}</style>
                
                {/* Columns layout */}
                
                {/* Column 1: Front-end UI Apps */}
                <rect x="50" y="50" width="160" height="70" className="box" />
                <text x="130" y="85" className="label">APP WINDOWS</text>
                <text x="130" y="102" className="muted-label">(Terminal, TextEditor)</text>

                <rect x="50" y="180" width="160" height="70" className="box" />
                <text x="130" y="215" className="label">CORE DESKTOP</text>
                <text x="130" y="232" className="muted-label">(State Coordinator)</text>

                {/* Column 2: IPC Security broker */}
                <rect x="310" y="115" width="180" height="80" className="accent-box" />
                <text x="400" y="152" className="label">SECURE IPC SYSTEM</text>
                <text x="400" y="170" className="muted-label">(Auth Signatures, Validate)</text>

                {/* Column 3: WebSocket daemon / backend */}
                <rect x="590" y="115" width="160" height="80" className="box" />
                <text x="670" y="152" className="label">NODE.JS SERVER</text>
                <text x="670" y="170" className="muted-label">(WebSocket Broker)</text>

                {/* Connecting lines */}
                {/* App -> IPC */}
                <path d="M 210 85 L 260 85 L 260 140 L 310 140" className="arrow" />
                {/* Desktop -> IPC */}
                <path d="M 210 215 L 260 215 L 260 170 L 310 170" className="arrow" />
                {/* IPC -> WebSocket Server */}
                <path d="M 490 155 L 590 155" className="line" />
                
                {/* Flow Direction Text overlay */}
                <text x="260" y="125" className="muted-label">IPC Event</text>
                <text x="540" y="145" className="muted-label">Sync Port</text>
              </svg>
            </div>
          </GlassCard>

          {/* IPC Implementation Detail */}
          <GlassCard className="p-8">
            <h3 className="text-xl font-bold text-white tracking-tight border-b border-white/5 pb-3">Features &amp; Implementation</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="h-4.5 w-4.5 text-[#4F8CFF]" />
                  <h4 className="text-base font-bold text-white">Origin Verification</h4>
                </div>
                <p className="text-xs text-white/50 leading-relaxed pl-6">
                  Prevents unauthorized widgets or external iframe wrappers from firing desktop events by enforcing strict origin validations.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Network className="h-4.5 w-4.5 text-[#4F8CFF]" />
                  <h4 className="text-base font-bold text-white">Real-Time Streams</h4>
                </div>
                <p className="text-xs text-white/50 leading-relaxed pl-6">
                  WebSocket protocols push system logs, connection updates, and file-system saves immediately to the UI thread.
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Code Section */}
          <GlassCard className="p-8">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <FileCode className="h-5 w-5 text-[#4F8CFF]" />
                TypeScript Message Broker Snippet
              </h3>
              <span className="text-[10px] font-mono text-white/40">TYPESCRIPT</span>
            </div>
            
            {/* Code Block Container */}
            <div className="mt-6 rounded-xl border border-white/5 bg-black/60 p-4 font-mono text-xs overflow-x-auto leading-relaxed max-h-[400px]">
              <pre className="text-left text-white/80">
                <code>{codeSnippet}</code>
              </pre>
            </div>
          </GlassCard>

        </div>

        {/* Right Column: Spec Grid & Optimization */}
        <div className="lg:col-span-4 flex flex-col gap-8 text-left">
          
          {/* Tech Specs */}
          <GlassCard className="p-6">
            <h3 className="text-lg font-bold text-white tracking-tight border-b border-white/5 pb-2">Technical specs</h3>
            
            <div className="flex flex-col gap-4 mt-4 text-xs font-mono">
              <div className="flex items-center justify-between">
                <span className="text-white/40">CORE CLIENT</span>
                <span className="text-white">React 19 / Vite</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/40">TYPING SYSTEM</span>
                <span className="text-white">TypeScript 5</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/40">BACKEND RUNTIME</span>
                <span className="text-white">Node.js / Express</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/40">SOCKET PROTOCOL</span>
                <span className="text-white">WebSockets / WS</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/40">STYLING COMPILER</span>
                <span className="text-white">Tailwind CSS v4</span>
              </div>
            </div>
          </GlassCard>

          {/* Performance Optimization Breakdown */}
          <GlassCard className="p-6">
            <h3 className="text-lg font-bold text-white tracking-tight border-b border-white/5 pb-2">System Optimization</h3>
            
            <div className="flex flex-col gap-4 mt-6">
              <div className="flex gap-2.5 items-start">
                <CheckCircle2 className="h-4.5 w-4.5 text-[#4F8CFF] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white">WebSocket Connection Pools</span>
                  <span className="text-[11px] text-white/40 mt-1">Configured socket connection parameters to bundle updates rather than spawning a socket per app component.</span>
                </div>
              </div>

              <div className="flex gap-2.5 items-start">
                <CheckCircle2 className="h-4.5 w-4.5 text-[#4F8CFF] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white">Subscription Management</span>
                  <span className="text-[11px] text-white/40 mt-1">Wrapped listener subscriptions in React `useEffect` cleanups, eliminating leaks when windows are closed.</span>
                </div>
              </div>

              <div className="flex gap-2.5 items-start">
                <CheckCircle2 className="h-4.5 w-4.5 text-[#4F8CFF] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white">Payload Batching</span>
                  <span className="text-[11px] text-white/40 mt-1">Compacted JSON serialization templates to stream binary metadata arrays over Socket channels.</span>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>

      </div>

    </div>
  );
};
