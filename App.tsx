
import React, { useEffect, useState } from 'react';
import AlcoveHero from './components/AlcoveHero';
import ValueProps from './components/ValueProps';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import StarBackground from './components/StarBackground';

const App: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ 
        x: (e.clientX / window.innerWidth - 0.5) * 2, 
        y: (e.clientY / window.innerHeight - 0.5) * 2 
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative selection:bg-primary-400/30">
      {/* Interactive Mouse Glow - Soft Luminescence */}
      <div 
        className="fixed pointer-events-none z-10 transition-all duration-1000 ease-out opacity-15"
        style={{
          width: '1000px',
          height: '1000px',
          left: (mousePos.x + 1) * 50 + '%',
          top: (mousePos.y + 1) * 50 + '%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(102, 64, 255, 0.2) 0%, rgba(20, 184, 166, 0.1) 40%, transparent 70%)',
          filter: 'blur(120px)',
        }}
      />

      <StarBackground mouseX={mousePos.x} mouseY={mousePos.y} scrollY={scrollY} />
      
      <main className="relative z-20">
        <AlcoveHero />
        <ValueProps />
        <Testimonials />
        <ContactForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
