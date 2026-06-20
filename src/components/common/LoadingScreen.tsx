import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [progress, setProgress] = useState(0);

  const roles = [
    "Game Developer",
    "Technical Artist",
    "Full-Stack Engineer"
  ];

  // Simulating loading progress
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1.5;
      });
    }, 20);
    return () => clearInterval(timer);
  }, []);

  // Typewriter effect for roles
  useEffect(() => {
    let timer: number;
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentRole.substring(0, text.length - 1));
      }, 35);
    } else {
      timer = setTimeout(() => {
        setText(currentRole.substring(0, text.length + 1));
      }, 70);
    }

    if (!isDeleting && text === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  // Complete loading when progress is 100 and typewriter has finished at least a cycle or 3 seconds have passed
  useEffect(() => {
    if (progress >= 100) {
      const finishTimer = setTimeout(() => {
        onComplete();
      }, 600);
      return () => clearTimeout(finishTimer);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0A0A0A] font-sans"
    >
      <div className="relative flex flex-col items-center max-w-md px-6 text-center">
        {/* Glow behind logo */}
        <div className="absolute top-1/2 left-1/2 -z-10 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4F8CFF]/10 blur-3xl" />
        
        {/* Profile Logo Card */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 font-mono text-xl font-bold tracking-wider text-white shadow-2xl"
        >
          MB
        </motion.div>

        {/* Name Title */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-2xl font-bold tracking-tight text-white sm:text-3xl"
        >
          MD Abdul Basit
        </motion.h1>

        {/* Typewriter Roles */}
        <div className="mt-2 h-6 text-sm font-semibold tracking-widest text-[#4F8CFF] uppercase sm:text-base">
          <span>{text}</span>
          <span className="animate-ping ml-1">|</span>
        </div>

        {/* Progress Bar Container */}
        <div className="mt-12 h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
          <motion.div 
            className="h-full bg-gradient-to-r from-[#4F8CFF] to-white"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>
        
        {/* Loading percentage */}
        <span className="mt-2 text-xs font-mono text-white/40">
          {Math.min(Math.round(progress), 100)}% LOADED
        </span>
      </div>
    </motion.div>
  );
};
