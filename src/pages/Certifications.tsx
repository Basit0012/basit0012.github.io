import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '../components/ui/GlassCard';
import { ShieldCheck, X, Award } from 'lucide-react';

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
      pdfUrl: '/Basit_OCI_AI_Foundations.pdf',
      color: '#F80000'
    },
    {
      id: 'oracle-data',
      title: 'Oracle Data Platform 2025 Certified Foundations Associate',
      issuer: 'Oracle',
      date: 'February 2025',
      credentialId: 'ODP-F-2025-881240',
      verifyUrl: 'https://education.oracle.com/',
      pdfUrl: '/Basit_Oracle_Data_Platform.pdf',
      color: '#F80000'
    },
    {
      id: 'iit-ux',
      title: 'User Experience (UX) Design Principles Certification',
      issuer: 'IIT Roorkee',
      date: 'April 2025',
      credentialId: 'IITR-UX-2025-77A12',
      verifyUrl: 'https://www.linkedin.com/in/md-abdul-basit18/overlay/Certifications/1965308968/treasury/?profileId=ACoAAFoQofEB-WWyogYG4r3rlmZOYqR6-C-htaU',
      color: '#0071e3'
    },
    {
      id: 'dsa-eng',
      title: 'Data Structures & Algorithms Engineering Certification',
      issuer: 'Cipher Schools / LPU',
      date: 'August 2025',
      credentialId: 'CS-DSA-2025-0012',
      pdfUrl: '/Cipher_Certificate.pdf',
      color: '#f5a972'
    }
  ];

  return (
    <div className="mx-auto max-w-5xl px-6 py-12 font-sans text-white bg-black">
      
      {/* Header */}
      <div className="text-left mb-16">
        <span className="text-xs font-bold tracking-widest text-[#f5a972] uppercase font-mono">03. CREDENTIALS</span>
        <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tighter mt-4 leading-none">Certifications</h1>
        <p className="text-sm text-[#86868b] mt-4 max-w-lg leading-relaxed font-medium">
          Verified academic and professional credentials across AI, cloud systems, algorithm engineering, and UX parameters.
        </p>
      </div>

      {/* Grid of Certs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        {certs.map((cert, idx) => (
          <GlassCard 
            key={cert.id} 
            delay={idx * 0.05} 
            onClick={() => setActiveCert(cert)}
            className="flex flex-col justify-between p-8 border border-white/10 bg-[#050505] rounded-3xl h-64 cursor-pointer"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#86868b] uppercase font-mono">
                <Award className="h-4.5 w-4.5" style={{ color: cert.color }} />
                <span>{cert.issuer}</span>
              </div>

              <h2 className="text-xl font-bold tracking-tight text-white mt-4 leading-snug">
                {cert.title}
              </h2>
            </div>

            <div className="flex items-center justify-between mt-auto">
              <span className="text-xs text-[#86868b] font-mono">{cert.date}</span>
              <a
                href={cert.pdfUrl || cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-4 py-2 text-xs font-bold text-white transition-all duration-300"
              >
                {cert.pdfUrl ? 'View PDF' : 'Verify'}
                <ShieldCheck className="h-3.5 w-3.5 text-[#0071e3]" />
              </a>
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
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="glassmorphism relative w-full max-w-md rounded-3xl p-8 border border-white/10 bg-black shadow-2xl z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveCert(null)}
                className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 hover:text-white transition-all duration-300"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="text-left flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Award className="h-5.5 w-5.5" style={{ color: activeCert.color }} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#86868b] tracking-wider uppercase block">VERIFIED CREDENTIAL</span>
                    <span className="text-sm font-bold text-white">{activeCert.issuer}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-white leading-snug">
                  {activeCert.title}
                </h3>

                <div className="grid grid-cols-2 gap-4 border-t border-b border-white/10 py-5 font-mono text-xs text-[#86868b]">
                  <div>
                    <span className="block text-[10px]">ISSUE DATE</span>
                    <span className="text-white font-bold mt-1 block">{activeCert.date}</span>
                  </div>
                  <div>
                    <span className="block text-[10px]">CREDENTIAL ID</span>
                    <span className="text-white font-bold mt-1 block">{activeCert.credentialId}</span>
                  </div>
                </div>

                <div className="flex gap-4 mt-2">
                  {activeCert.pdfUrl ? (
                    <a
                      href={activeCert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-apple-blue"
                    >
                      View PDF
                    </a>
                  ) : (
                    <a
                      href={activeCert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-apple-blue"
                    >
                      Verify
                    </a>
                  )}
                  <button
                    onClick={() => setActiveCert(null)}
                    className="btn-apple-secondary px-5"
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
