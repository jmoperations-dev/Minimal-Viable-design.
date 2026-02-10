
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-black relative">
      <div className="max-w-4xl mx-auto glass-card rounded-[40px] p-12 overflow-hidden relative">
        {/* Glow effect inside form */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary-400/10 blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary-400/5 blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Ready to get started?</h2>
            <p className="text-white/50 text-lg leading-relaxed">
              Join the elite creators who have already switched to our platform. 
              Fill out the form and we'll get back to you within 24 hours.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 text-sm text-white/70">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">✓</div>
                <span>Unparalleled performance</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-white/70">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">✓</div>
                <span>Peaceful collaboration</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-white/70">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">✓</div>
                <span>24/7 Priority support</span>
              </div>
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-white/40 mb-2">FULL NAME</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary-400 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white/40 mb-2">EMAIL ADDRESS</label>
              <input 
                type="email" 
                placeholder="john@example.com" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary-400 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white/40 mb-2">MESSAGE</label>
              <textarea 
                rows={4} 
                placeholder="How can we help?" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary-400 transition-colors resize-none"
              ></textarea>
            </div>
            <button className="w-full bg-primary-400 text-white font-bold py-4 rounded-2xl shadow-xl shadow-primary-400/20 hover:scale-[1.02] active:scale-95 transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
