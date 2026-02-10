
import React from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-6 ${
        isScrolled ? 'pt-2' : 'pt-6'
      }`}
    >
      <nav 
        className={`mx-auto max-w-5xl flex justify-between items-center px-6 py-3 rounded-full transition-all duration-300 border border-white/5 ${
          isScrolled ? 'bg-black/60 backdrop-blur-xl shadow-lg border-white/10 scale-[0.98]' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary-400 rounded-lg flex items-center justify-center font-bold text-black rotate-12">L</div>
          <span className="font-bold text-xl tracking-tight hidden sm:inline-block">Lumina</span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-white/70">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#proof" className="hover:text-white transition-colors">Testimonials</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-sm font-semibold opacity-70 hover:opacity-100 transition-opacity">Login</button>
          <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform active:scale-95 shadow-lg">
            Join the waitlist
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
