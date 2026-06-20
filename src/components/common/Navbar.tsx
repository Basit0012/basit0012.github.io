import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '../../utils/cn';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  // Scroll logic for navbar styling and progress indicator
  useEffect(() => {
    const handleScroll = () => {
      // Background styling toggle
      setScrolled(window.scrollY > 20);

      // Scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
          scrolled 
            ? "bg-[#0A0A0A]/80 border-b border-white/5 backdrop-blur-md py-4" 
            : "bg-transparent border-b border-transparent py-6"
        )}
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 font-mono text-base font-bold text-white transition-all duration-500 group-hover:border-[#4F8CFF] group-hover:bg-[#4F8CFF]/10">
                MB
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#4F8CFF]">
                  MD Abdul Basit
                </span>
                <span className="text-[10px] font-medium tracking-wider text-white/50 uppercase">
                  Game Dev • Tech Artist • Full Stack
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) => cn(
                    "relative text-sm font-semibold tracking-wide transition-colors duration-300",
                    isActive ? "text-[#4F8CFF]" : "text-white/60 hover:text-white"
                  )}
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <motion.span
                          layoutId="activeNavTab"
                          className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-[#4F8CFF]"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
              
              {/* Recruiter quick CTA */}
              <a 
                href="/cv.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-full bg-white/5 hover:bg-[#4F8CFF]/15 border border-white/10 hover:border-[#4F8CFF]/30 px-4 py-2 text-xs font-bold text-white transition-all duration-300"
              >
                Resume
                <ArrowUpRight className="h-3 w-3 text-white/50" />
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-white/10 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5">
          <div 
            className="h-full bg-gradient-to-r from-[#4F8CFF] to-white/50 transition-all duration-100"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 flex flex-col bg-[#0A0A0A]/95 backdrop-blur-xl md:hidden pt-28 px-8 pb-10"
          >
            {/* Background grids inside mobile nav */}
            <div className="absolute inset-0 -z-10 bg-dot-grid opacity-50" />
            <div className="absolute top-1/4 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#4F8CFF]/5 blur-3xl" />

            <div className="flex flex-col gap-6 text-left">
              <span className="text-xs font-bold tracking-widest text-[#4F8CFF] uppercase border-b border-white/5 pb-2">
                Navigation
              </span>
              
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                  key={link.name}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => cn(
                      "text-2xl font-bold tracking-tight block py-1",
                      isActive ? "text-[#4F8CFF]" : "text-white/60 hover:text-white"
                    )}
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.5 }}
                className="mt-6 pt-6 border-t border-white/5 flex flex-col gap-4"
              >
                <a 
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#4F8CFF]/10 hover:border-[#4F8CFF]/30"
                >
                  <span>Download Resume (CV)</span>
                  <ArrowUpRight className="h-4 w-4 text-[#4F8CFF]" />
                </a>
                
                <div className="flex flex-col gap-1 text-xs text-white/40 font-mono mt-4">
                  <span>EMAIL: mdabdbasit@gmail.com</span>
                  <span>LOCATION: Punjab, India</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
