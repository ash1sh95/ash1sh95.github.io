import { useState, useEffect, useLayoutEffect } from 'react';
import { MotionConfig, motion, useScroll, useReducedMotion } from 'framer-motion';
import { Navbar } from './components/UI/Navbar';
import { Hero, About, Experience, Projects, Skills, Contact, Education, Elsewhere } from './sections';
import { TechStackCarousel } from './components/animations/TechStackCarousel';
import { LoadingScreen } from './components/LoadingScreen';

/* Scroll choreography — a 2px burgundy hairline tracking reading progress
   at the very top of the viewport. Scroll-linked transform only; hidden
   entirely for reduced-motion users. */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return null;
  return (
    <motion.div
      aria-hidden
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-burgundy-500 origin-left z-[60]"
    />
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  // Splash gate: start the clock in a layout effect so it runs before the
  // splash's first paint, not after it. 1.1s of gate + the screen's own
  // sub-second entrance keeps total visible splash ≈1.2–1.5s after mount.
  useLayoutEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  // Console signature — one quiet line for whoever opens devtools.
  useEffect(() => {
    console.log(
      '%cAshish Arun %c Technical Principal — Data & AI · Production agents on Databricks — build, govern, observe, evaluate.\n%cYou found the audit trail. I eval the gate, not the answers.\n%chttps://github.com/ash1sh95',
      'color:#E8EBF0;background:#050505;font-weight:600;padding:2px 6px;border-radius:3px',
      'color:#C7CCD6',
      'color:#93303F;font-family:monospace',
      'color:#8E97A5;font-family:monospace'
    );
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-background min-h-screen text-text selection:bg-burgundy-500 selection:text-white overflow-x-hidden transition-colors duration-300">
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <About />
          <TechStackCarousel />
          <Experience />
          <Education />
          <Elsewhere />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </MotionConfig>
  );
}

export default App;
