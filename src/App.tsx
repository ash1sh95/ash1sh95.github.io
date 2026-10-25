import { useState, useEffect } from 'react';
import { Navbar } from './components/UI/Navbar';
import { Hero, About, Experience, Projects, Skills, Contact, Updates, Education } from './sections';
import { TechStackCarousel } from './components/animations/TechStackCarousel';
import { LoadingScreen } from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="bg-background min-h-screen text-text selection:bg-burgundy-500 selection:text-white overflow-x-hidden transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStackCarousel />
        <Experience />
        <Education />
        <Updates />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
