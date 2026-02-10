
import React from 'react';

const props = [
  {
    title: "AI Insights into quality",
    description: "Discover potential flaws and strengths in your content before you hit publish.",
    tag: "Intelligence",
    gradient: "from-primary-400 to-primary-800",
    image: "https://picsum.photos/seed/prop1/800/600"
  },
  {
    title: "Team Collaboration",
    description: "Invite your editors and stakeholders to review projects in one unified workspace.",
    tag: "Productivity",
    gradient: "from-yellow-400 to-yellow-600",
    image: "https://picsum.photos/seed/prop2/800/600"
  },
  {
    title: "Proven Success Library",
    description: "Access thousands of top-performing templates and inspiration from the best.",
    tag: "Resources",
    gradient: "from-pink-400 to-pink-600",
    image: "https://picsum.photos/seed/prop3/800/600"
  }
];

const ValueProps: React.FC = () => {
  return (
    <section id="features" className="py-32 px-6 bg-black relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-400/10 text-primary-400 text-xs font-bold uppercase tracking-widest mb-4">Features</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Built for elite creators.</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">Everything you need to streamline your workflow and ensure your next launch is a massive success.</p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {props.map((prop, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center group`}>
              <div className="flex-1 space-y-6">
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/5 border border-white/10`}>
                  {prop.tag}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold">{prop.title}</h3>
                <p className="text-white/60 text-lg leading-relaxed">{prop.description}</p>
                <button className="flex items-center gap-2 font-semibold text-primary-300 hover:text-white transition-colors">
                  Learn more <span className="text-xl">→</span>
                </button>
              </div>
              
              <div className="flex-1 w-full">
                <div className={`relative overflow-hidden rounded-3xl border border-white/10 aspect-[4/3] bg-gradient-to-br ${prop.gradient} p-4`}>
                  <img 
                    src={prop.image} 
                    alt={prop.title}
                    className="w-full h-full object-cover rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
