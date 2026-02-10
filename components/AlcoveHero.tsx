
import React from 'react';

const AlcoveHero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-10">
      
      <div className="relative z-20 space-y-12 max-w-4xl">
        {/* The Alcove Icon with breathing luminescence */}
        <div className="flex justify-center mb-4">
          <div className="w-24 h-24 bg-gradient-to-b from-[#2a2a2d] to-[#141416] rounded-[32px] p-0.5 shadow-2xl ring-1 ring-white/10 relative transition-transform duration-700 hover:scale-110">
            <div className="w-full h-full bg-[#0a0a0c] rounded-[30px] flex items-center justify-center overflow-hidden relative border border-white/5">
              <div className="absolute bottom-0 w-[90%] h-[80%] bg-gradient-to-t from-[#ff9933]/30 via-[#ffcc33]/10 to-transparent rounded-t-[50px] blur-xl"></div>
              <div className="w-14 h-16 bg-gradient-to-t from-[#ff9933] via-[#ffcc33] to-[#ffee66] rounded-t-full relative z-10 opacity-90 shadow-[0_0_40px_rgba(255,153,51,0.4)]"></div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl font-medium tracking-tighter leading-[0.95] text-white/95">
            A quiet place to <br />
            <span className="instrument-serif italic font-light tracking-tight text-white/90">see what&apos;s new.</span>
          </h1>

          <p className="text-base md:text-lg text-white/40 max-w-lg mx-auto font-normal leading-relaxed tracking-tight">
            Alcove is the best way to keep up with your favourite <br />
            websites, newsletters, and subscriptions, without the noise.
          </p>
        </div>

        <div className="pt-10 flex flex-col items-center">
          <div className="w-full max-w-md p-1 bg-white rounded-2xl flex items-center shadow-[0_0_80px_rgba(255,255,255,0.08)] group hover:shadow-[0_0_100px_rgba(255,255,255,0.12)] transition-all duration-700">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-transparent border-none flex-1 px-6 py-3.5 text-black font-semibold outline-none placeholder:text-gray-400"
            />
            <button className="bg-black text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-zinc-900 transition-colors shadow-lg active:scale-95">
              Subscribe
            </button>
          </div>
          <p className="mt-10 text-[10px] text-white/20 font-black uppercase tracking-[0.3em] opacity-60">
            Early Access • Ad Free • Privacy First
          </p>
        </div>
      </div>

      {/* Atmospheric Blend Fog */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none z-10"></div>
    </section>
  );
};

export default AlcoveHero;
