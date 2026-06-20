import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '../components/ui/GlassCard';
import { ShieldCheck, Calendar, X, Award, ExternalLink } from 'lucide-react';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verifyUrl?: string;
  pdfUrl?: string;
  color: string;
}

export const Certifications: React.FC = () => {
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  const certs: Certification[] = [
    {
      id: 'oracle-ai',
      title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
      issuer: 'Oracle',
      date: 'January 2025',
      credentialId: 'OCI-AI-2025-991204',
      verifyUrl: 'https://education.oracle.com/',
      color: '#F80000'
    },
    {
      id: 'oracle-data',
      title: 'Oracle Data Platform 2025 Certified Foundations Associate',
      issuer: 'Oracle',
      date: 'February 2025',
      credentialId: 'ODP-F-2025-881240',
      verifyUrl: 'https://education.oracle.com/',
      color: '#F80000'
    },
    {
      id: 'iit-ux',
      title: 'UX Design Principles Certification',
      issuer: 'IIT Roorkee',
      date: 'April 2025',
      credentialId: 'IITR-UX-2025-77A12',
      verifyUrl: 'https://iitr.ac.in/',
      color: '#4F8CFF'
    },
    {
      id: 'dsa-eng',
      title: 'Data Structures & Algorithms Engineering Certification',
      issuer: 'Cipher Schools / LPU',
      date: 'August 2025',
      credentialId: 'CS-DSA-2025-0012',
      pdfUrl: '/Cipher_Certificate.pdf',
      color: '#4F8CFF'
    }
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 font-sans text-white">
      
      {/* Header */}
      <div className="text-left mb-12">
        <span className="text-xs font-bold tracking-widest text-[#4F8CFF] uppercase font-mono">03. CREDENTIALS</span>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl mt-2">Certifications</h1>
        <p className="text-sm text-white/50 mt-3 max-w-lg leading-relaxed">
          Industry-recognized certifications validating skill sets across Artificial Intelligence, Data Platforms, User Experience, and Core Algorithmic Engineering.
        </p>
      </div>

      {/* Grid of Certs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certs.map((cert, idx) => (
          <GlassCard key={cert.id} delay={idx * 0.05} className="flex flex-col justify-between text-left p-8 h-full">
            <div>
              <div className="flex items-center gap-3">
                <div 
                  className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0"
                  style={{ textShadow: `0 0 10px ${cert.color}` }}
                >
                  <Award className="h-5.5 w-5.5" style={{ color: cert.color }} />
                </div>
                <span className="text-sm font-semibold tracking-tight text-white/60">{cert.issuer}</span>
              </div>

              <h2 className="text-xl font-bold tracking-tight text-white mt-5 leading-snug">
                {cert.title}
              </h2>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-1.5 text-xs text-white/40 font-mono">
                <Calendar className="h-3.5 w-3.5" />
                <span>{cert.date}</span>
              </div>

              <button
                onClick={() => setActiveCert(cert)}
                className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 px-4 py-2 text-xs font-bold text-white transition-all duration-300"
              >
                Verify Credential
                <ShieldCheck className="h-3.5 w-3.5 text-[#4F8CFF]" />
              </button>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Interactive Modal Drawer */}
      <AnimatePresence>
        {activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCert(null)}
              className="absolute inset-0 bg-[#0A0A0A]/80 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="glassmorphism glassmorphism-glow relative w-full max-w-lg rounded-2xl p-8 border border-white/10 bg-black/60 shadow-2xl z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveCert(null)}
                className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white/60 hover:text-white transition-all duration-300"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="text-left flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 flex items-center justify-center shrink-0">
                    <Award className="h-5.5 w-5.5 text-[#4F8CFF]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white/40 block font-mono">VERIFIED CREDENTIAL</span>
                    <span className="text-sm font-bold text-white">{activeCert.issuer}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-white leading-tight">
                  {activeCert.title}
                </h3>

                <div className="grid grid-cols-2 gap-4 border-t border-b border-white/5 py-5 font-mono text-xs">
                  <div>
                    <span className="text-white/40 block">ISSUE DATE</span>
                    <span className="text-white font-bold mt-1 block">{activeCert.date}</span>
                  </div>
                  <div>
                    <span className="text-white/40 block">CREDENTIAL ID</span>
                    <span className="text-white font-bold mt-1 block">{activeCert.credentialId}</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  {activeCert.pdfUrl ? (
                    <a
                      href={activeCert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-white text-black hover:bg-[#4F8CFF] hover:text-white py-3.5 text-sm font-bold shadow-xl transition-all duration-300"
                    >
                      View Certificate PDF
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : (
                    <a
                      href={activeCert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#4F8CFF] text-white hover:bg-[#4F8CFF]/85 py-3.5 text-sm font-bold shadow-xl transition-all duration-300"
                    >
                      Verify on {activeCert.issuer} Website
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  <button
                    onClick={() => setActiveCert(null)}
                    className="rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-5 py-3.5 text-sm font-bold transition-all duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
