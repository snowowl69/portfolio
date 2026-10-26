import { useState, useCallback } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Patents from './components/Patents';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from './components/About';
import Education from './components/Education';
import Connect from './components/Connect';
import Footer from './components/Footer';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  const handleLoadComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <LoadingScreen onComplete={handleLoadComplete} />
      <Cursor />
      {loaded && (
        <>
          <Navbar />
          <main>
            <Hero />
            <Patents />
            <Achievements />
            <Projects />
            <Experience />
            <About />
            <Education />
            <Connect />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
