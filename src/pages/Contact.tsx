import React from 'react';
import { GlassCard } from '../components/ui/GlassCard';
import { Mail, MapPin, Phone } from 'lucide-react';

const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Contact: React.FC = () => {
  const contactDetails = [
    {
      icon: <Mail className="h-5 w-5 text-[#f5a972]" />,
      label: 'Email Address',
      value: 'mdabdbasit@gmail.com',
      href: 'mailto:mdabdbasit@gmail.com',
    },
    {
      icon: <Phone className="h-5 w-5 text-[#f5a972]" />,
      label: 'Phone Number',
      value: '+91 99087 17850',
      href: 'tel:+919908717850',
    },
    {
      icon: <MapPin className="h-5 w-5 text-[#f5a972]" />,
      label: 'Location',
      value: 'Secunderabad, India',
    },
    {
      icon: <GithubIcon className="h-5 w-5 text-[#f5a972]" />,
      label: 'GitHub Profile',
      value: 'github.com/Basit0012',
      href: 'https://github.com/Basit0012',
    },
    {
      icon: <LinkedinIcon className="h-5 w-5 text-[#f5a972]" />,
      label: 'LinkedIn Profile',
      value: 'linkedin.com/in/md-abdul-basit18',
      href: 'https://linkedin.com/in/md-abdul-basit18',
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-6 py-12 font-sans text-white bg-black">
      
      {/* Header */}
      <div className="text-center mb-16 max-w-lg mx-auto">
        <span className="text-xs font-bold tracking-widest text-[#f5a972] uppercase font-mono">04. INQUIRY</span>
        <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tighter mt-4 leading-none">Contact</h1>
        <p className="text-sm text-[#86868b] mt-4 leading-relaxed font-medium">
          Open to gameplay engineering positions, full-stack web roles, or technical art collaborations.
        </p>
      </div>

      <div className="max-w-xl mx-auto flex flex-col gap-5 text-left">
        {contactDetails.map((detail, idx) => (
          <GlassCard key={detail.label} delay={idx * 0.05} className="flex gap-4 items-center p-6 border border-white/10 bg-[#050505] rounded-2xl">
            <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              {detail.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-[#86868b] tracking-wider uppercase">{detail.label}</span>
              {detail.href ? (
                <a
                  href={detail.href}
                  target={detail.href.startsWith('http') ? '_blank' : undefined}
                  rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-sm sm:text-base font-bold text-white hover:text-[#0071e3] transition-colors duration-300 mt-0.5 break-all"
                >
                  {detail.value}
                </a>
              ) : (
                <span className="text-sm sm:text-base font-bold text-white mt-0.5 break-all">
                  {detail.value}
                </span>
              )}
            </div>
          </GlassCard>
        ))}
      </div>

    </div>
  );
};
