import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverGlow?: boolean;
  onClick?: () => void;
  delay?: number;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  hoverGlow = true,
  onClick,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={hoverGlow ? { 
        y: -6, 
        borderColor: 'rgba(79, 140, 255, 0.3)',
        boxShadow: '0 12px 40px -10px rgba(79, 140, 255, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.1)' 
      } : {}}
      onClick={onClick}
      className={cn(
        "glassmorphism glassmorphism-glow relative overflow-hidden rounded-2xl p-6 transition-colors duration-500",
        onClick && "cursor-pointer",
        className
      )}
    >
      {/* Light sweep element */}
      {hoverGlow && (
        <div className="pointer-events-none absolute -inset-px bg-radial-[circle_at_50%_0%] from-white/10 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100" />
      )}
      {children}
    </motion.div>
  );
};
