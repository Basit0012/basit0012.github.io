import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '../components/ui/GlassCard';
import { Mail, MapPin, Send, CheckCircle2, X } from 'lucide-react';

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const contactDetails = [
    {
      icon: <Mail className="h-5 w-5 text-[#4F8CFF]" />,
      label: 'Email Address',
      value: 'mdabdbasit@gmail.com',
      href: 'mailto:mdabdbasit@gmail.com',
    },
    {
      icon: <MapPin className="h-5 w-5 text-[#4F8CFF]" />,
      label: 'Location',
      value: 'Secunderabad, India',
    },
    {
      icon: <GithubIcon className="h-5 w-5 text-[#4F8CFF]" />,
      label: 'GitHub Profile',
      value: 'github.com/Basit0012',
      href: 'https://github.com/Basit0012',
    },
    {
      icon: <LinkedinIcon className="h-5 w-5 text-[#4F8CFF]" />,
      label: 'LinkedIn Profile',
      value: 'linkedin.com/in/md-abdul-basit18',
      href: 'https://linkedin.com/in/md-abdul-basit18',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email';
    }
    
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API request send
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 font-sans text-white relative">
      <div className="absolute top-1/3 left-1/4 -z-10 h-96 w-96 rounded-full bg-[#4F8CFF]/3 blur-[120px]" />
      
      {/* Header */}
      <div className="text-left mb-12">
        <span className="text-xs font-bold tracking-widest text-[#4F8CFF] uppercase font-mono">04. INQUIRY</span>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl mt-2">Get in Touch</h1>
        <p className="text-sm text-white/50 mt-3 max-w-lg leading-relaxed">
          I am open to game development internships, full-stack software roles, or collaborative technical art projects.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Details */}
        <div className="lg:col-span-5 flex flex-col gap-6 text-left">
          {contactDetails.map((detail, idx) => (
            <GlassCard key={detail.label} delay={idx * 0.05} className="flex gap-4 items-center p-6 border border-white/5">
              <div className="h-10 w-10 rounded-xl bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 flex items-center justify-center shrink-0">
                {detail.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-white/40 tracking-wider uppercase">{detail.label}</span>
                {detail.href ? (
                  <a
                    href={detail.href}
                    target={detail.href.startsWith('http') ? '_blank' : undefined}
                    rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm sm:text-base font-bold text-white hover:text-[#4F8CFF] transition-colors duration-300 mt-0.5 break-all"
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

        {/* Right Column: Form */}
        <div className="lg:col-span-7">
          <GlassCard className="p-8 text-left border border-white/5">
            <h2 className="text-xl font-bold tracking-tight text-white mb-6">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              {/* Row: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-bold text-white/60 uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`rounded-xl border bg-white/5 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#4F8CFF]/60 transition-colors ${
                      errors.name ? 'border-red-500/50' : 'border-white/10'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="text-[10px] font-mono text-red-500 mt-1">{errors.name}</span>}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-white/60 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`rounded-xl border bg-white/5 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#4F8CFF]/60 transition-colors ${
                      errors.email ? 'border-red-500/50' : 'border-white/10'
                    }`}
                    placeholder="johndoe@email.com"
                  />
                  {errors.email && <span className="text-[10px] font-mono text-red-500 mt-1">{errors.email}</span>}
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-xs font-bold text-white/60 uppercase tracking-wider">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`rounded-xl border bg-white/5 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#4F8CFF]/60 transition-colors ${
                    errors.subject ? 'border-red-500/50' : 'border-white/10'
                  }`}
                  placeholder="Internship opportunities / Collaboration"
                />
                {errors.subject && <span className="text-[10px] font-mono text-red-500 mt-1">{errors.subject}</span>}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-bold text-white/60 uppercase tracking-wider">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`rounded-xl border bg-white/5 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#4F8CFF]/60 transition-colors resize-none ${
                    errors.message ? 'border-red-500/50' : 'border-white/10'
                  }`}
                  placeholder="Describe your project goals or inquiries..."
                />
                {errors.message && <span className="text-[10px] font-mono text-red-500 mt-1">{errors.message}</span>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-white text-black hover:bg-[#4F8CFF] hover:text-white py-3.5 text-sm font-bold shadow-xl transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    <span>Processing Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>

            </form>
          </GlassCard>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSuccessModal(false)}
              className="absolute inset-0 bg-[#0A0A0A]/80 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="glassmorphism glassmorphism-glow relative w-full max-w-sm rounded-2xl p-8 border border-white/10 bg-black/60 shadow-2xl z-10 text-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white/60 hover:text-white transition-all duration-300"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex flex-col items-center gap-4 text-center">
                <div className="h-12 w-12 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white mt-2">Message Sent!</h3>
                <p className="text-xs text-white/50 leading-relaxed max-w-xs">
                  Thank you for reaching out, MD Abdul Basit has received your inquiry and will reply shortly.
                </p>
                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="mt-2 w-full rounded-xl bg-white text-black hover:bg-[#4F8CFF] hover:text-white py-3 text-xs font-bold transition-all duration-300"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
