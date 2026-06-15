import { useEffect, useRef } from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  const glowRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div className="App">
      <div className="cursor-glow" ref={glowRef} />
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <footer className="footer">
        <p>
          Designed & Built by <span>Oshan Wijewardena</span> · {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default App;