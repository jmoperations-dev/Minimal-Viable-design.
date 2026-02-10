
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <p className="text-white/30 text-sm">© 2025 Platform — All rights reserved</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-white/50">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>

        <div className="flex items-center gap-2 text-white/20 text-xs font-bold uppercase tracking-widest">
          Build for the future
        </div>
      </div>
    </footer>
  );
};

export default Footer;
