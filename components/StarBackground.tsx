
import React from 'react';

interface StarBackgroundProps {
  mouseX: number;
  mouseY: number;
  scrollY: number;
}

const StarBackground: React.FC<StarBackgroundProps> = ({ mouseX, mouseY, scrollY }) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-alcove-black">
      
      {/* Deep Space Dust & Nebulae */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] opacity-20 blur-[120px] transition-transform duration-[5000ms] ease-out"
          style={{ 
            background: 'radial-gradient(circle at center, rgba(102, 64, 255, 0.15) 0%, transparent 80%)',
            transform: `translate(${mouseX * 20}px, ${mouseY * 20}px)`
          }}
        />
      </div>

      {/* Layer 1: Background Stars (Deepest) */}
      <div 
        className="absolute inset-[-10%] w-[120%] h-[120%] transition-transform duration-[2500ms] ease-out"
        style={{ transform: `translate(${mouseX * -8}px, ${mouseY * -8 - scrollY * 0.05}px)` }}
      >
        <div className="absolute inset-0 animate-celestial-drift flex">
           <div className="star-canvas w-full h-full opacity-10" style={{ backgroundSize: '200px 200px' }}></div>
           <div className="star-canvas w-full h-full opacity-10" style={{ backgroundSize: '200px 200px' }}></div>
        </div>
      </div>

      {/* Layer 2: Mid Stars */}
      <div 
        className="absolute inset-[-15%] w-[130%] h-[130%] transition-transform duration-[1500ms] ease-out"
        style={{ transform: `translate(${mouseX * -20}px, ${mouseY * -20 - scrollY * 0.1}px)` }}
      >
        <div className="absolute inset-0 animate-celestial-drift-fast flex rotate-[-5deg]">
           <div className="star-canvas w-full h-full opacity-20" style={{ backgroundSize: '400px 400px' }}></div>
           <div className="star-canvas w-full h-full opacity-20" style={{ backgroundSize: '400px 400px' }}></div>
        </div>
      </div>

      {/* Layer 3: Foreground Twinkle */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{ transform: `translateY(${scrollY * -0.15}px)` }}
      >
         <div className="star-canvas absolute inset-0 scale-[4] opacity-5"></div>
      </div>

      {/* THE PLANET / ATMOSPHERIC RING */}
      <div className="absolute bottom-0 left-0 right-0 h-[600px] pointer-events-none select-none">
        
        {/* Planet Surface Limb */}
        <div 
          className="absolute bottom-[-450px] left-1/2 -translate-x-1/2 w-[250%] aspect-[2/1] bg-[#000] rounded-[100%] border-t border-white/[0.05] shadow-[0_-30px_100px_rgba(255,255,255,0.03)]"
          style={{ transform: `translateX(calc(-50% + ${mouseX * -10}px))` }}
        >
          {/* Atmospheric Glow Layer */}
          <div className="absolute inset-0 planet-ring-glow opacity-80 rounded-[100%]"></div>
          
          {/* The Sharp "Horizon Line" Bleed */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent blur-[2px]"></div>
        </div>

        {/* Planet Reflection / Light Wash into Space */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[400px] opacity-40 animate-planet-breathing"
          style={{ 
            background: 'radial-gradient(ellipse at bottom, rgba(102, 64, 255, 0.2) 0%, rgba(20, 184, 166, 0.05) 40%, transparent 80%)',
          }}
        />
      </div>

      {/* Finishing Vignettes for Void Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
    </div>
  );
};

export default StarBackground;
