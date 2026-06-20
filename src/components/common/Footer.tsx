import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';

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

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const companyLogos = [
    { name: 'EA', text: 'Electronic Arts' },
    { name: 'Ubisoft', text: 'Ubisoft' },
    { name: 'Riot Games', text: 'Riot' },
    { name: 'Rockstar Games', text: 'Rockstar' },
    { name: 'Epic Games', text: 'Epic' },
    { name: 'Activision Blizzard', text: 'Activision' },
    { name: 'Microsoft', text: 'Microsoft' },
    { name: 'Google', text: 'Google' },
  ];

  return (
    <footer className="border-t border-white/5 bg-[#0B0B0B] font-sans relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-radial-[circle_at_50%_100%] from-[#4F8CFF]/5 to-transparent opacity-50" />
      
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          
          {/* Brand Column */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2 group self-start">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 font-mono text-sm font-bold text-white transition-all duration-300 group-hover:border-[#4F8CFF] group-hover:bg-[#4F8CFF]/10">
                MB
              </span>
              <span className="text-base font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#4F8CFF]">
                MD Abdul Basit
              </span>
            </Link>
            <p className="text-sm text-white/50 max-w-sm leading-relaxed">
              B.Tech Computer Science & Engineering student specializing in creating high-performance gameplay systems, detailed 3D technical art, and responsive full-stack applications.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://github.com/Basit0012"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 hover:text-[#4F8CFF] hover:border-[#4F8CFF]/30 transition-all duration-300"
                aria-label="GitHub"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/in/md-abdul-basit18"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 hover:text-[#4F8CFF] hover:border-[#4F8CFF]/30 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href="mailto:mdabdbasit@gmail.com"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 hover:text-[#4F8CFF] hover:border-[#4F8CFF]/30 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold tracking-widest text-[#4F8CFF] uppercase">
              Navigation
            </span>
            <ul className="flex flex-col gap-2.5 text-sm font-medium text-white/50">
              <li>
                <Link to="/" className="hover:text-white transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors duration-300">About</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition-colors duration-300">Projects</Link>
              </li>
              <li>
                <Link to="/certifications" className="hover:text-white transition-colors duration-300">Certifications</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Recruiter / Info Column */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold tracking-widest text-[#4F8CFF] uppercase">
              Location & Details
            </span>
            <div className="flex flex-col gap-3 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-white/40 shrink-0" />
                <span>Secunderabad, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-white/40 shrink-0" />
                <a href="mailto:mdabdbasit@gmail.com" className="hover:text-white transition-colors duration-300">
                  mdabdbasit@gmail.com
                </a>
              </div>
              <a 
                href="/cv.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-[#4F8CFF] hover:underline"
              >
                Open Resume PDF
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* AAA Target Recruiters Spotlight */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <span className="text-[10px] font-bold tracking-widest text-white/30 uppercase block mb-4">
            Tailored for Opportunities at
          </span>
          <div className="flex flex-wrap gap-x-8 gap-y-4 items-center justify-start opacity-30 grayscale contrast-125">
            {companyLogos.map((logo) => (
              <span 
                key={logo.name} 
                className="font-mono text-sm font-semibold tracking-widest text-white select-none hover:text-[#4F8CFF] transition-colors duration-300"
              >
                {logo.name.toUpperCase()}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <span>&copy; {currentYear} MD ABDUL BASIT. ALL RIGHTS RESERVED.</span>
          <span className="flex items-center gap-1">
            BUILT WITH REACT 19 &bull; TS &bull; TAILWIND v4
          </span>
        </div>
      </div>
    </footer>
  );
};
