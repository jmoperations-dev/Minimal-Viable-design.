
import React from 'react';

const reviews = [
  {
    name: "Will Patterson",
    handle: "@Will_Paterson10",
    text: "This is a game changer for testing and improving your creative workflow. Without it, it would be a guessing game!",
    avatar: "https://picsum.photos/seed/user1/100/100"
  },
  {
    name: "Mostafa Hasan",
    handle: "@MostafaVisuals",
    text: "As someone who's been in the niche for the past 2 years, this is hands down the best workspace I've used.",
    avatar: "https://picsum.photos/seed/user2/100/100"
  },
  {
    name: "PetRat Productions",
    handle: "@D1a1v1e11",
    text: "I really like the peace of mind this tool brings to my daily routine. It's unmatched by any other alternative.",
    avatar: "https://picsum.photos/seed/user3/100/100"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="proof" className="py-32 px-6 bg-black relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-500/10 blur-[100px] pointer-events-none"></div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 relative z-10">People love the experience.</h2>
          <p className="text-white/50 text-xl font-light">Trusted by thousands of professional artists and developers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="glass-card p-8 rounded-[32px] border-gradient-shadow hover:border-white/20 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full ring-2 ring-white/10" />
                <div>
                  <h4 className="font-bold text-base">{review.name}</h4>
                  <p className="text-primary-400 text-sm font-semibold">{review.handle}</p>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed italic mb-6">"{review.text}"</p>
              <div className="flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
