import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';

// Layout & Common Components
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { LoadingScreen } from './components/common/LoadingScreen';

// Page Components
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Certifications } from './pages/Certifications';
import { Contact } from './pages/Contact';

// Case Studies Pages
import { HollowLoop } from './pages/case-studies/HollowLoop';
import { IsometricEnvironment } from './pages/case-studies/IsometricEnvironment';
import { CppPathfinding } from './pages/case-studies/CppPathfinding';

// Scroll to Top on route change helper
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Page transition wrapper component
interface PageWrapperProps {
  children: React.ReactNode;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex-1"
    >
      {children}
    </motion.div>
  );
};

const AppRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24"> {/* Offset for sticky navbar */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
            <Route path="/projects/hollow-loop" element={<PageWrapper><HollowLoop /></PageWrapper>} />
            <Route path="/projects/stylized-isometric-environment" element={<PageWrapper><IsometricEnvironment /></PageWrapper>} />
            <Route path="/projects/cpp-pathfinding" element={<PageWrapper><CppPathfinding /></PageWrapper>} />
            <Route path="/certifications" element={<PageWrapper><Certifications /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize Lenis scroll behavior
  useEffect(() => {
    if (isLoading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing for ultra-smooth momentum scroll
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Bind Lenis scroll to update trigger for Framer Motion or scroll reveals
    lenis.on('scroll', () => {
      // Keep scroll events and animations synced
    });

    return () => {
      lenis.destroy();
    };
  }, [isLoading]);

  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <AppRoutes />
          </motion.div>
        )}
      </AnimatePresence>
    </Router>
  );
}
