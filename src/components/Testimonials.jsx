import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "It's difficult to think of a writer more invigorating and tuned-in than Zacchaeus. Tomorrowland is like taking a shot of caffeine.",
      author: "Saharvardi Khis",
      role: "founder of SpaceX",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuA05wkmnUu6CUlPwDCIofkm486jITMv_OUCJ1R_JmTVn72u31b4xOS09YhKD_-q1ceS_FnLWwIKsSEzTkUuADicnYTZfIctEJt0BFU-Genyrsd_55NL2s7q1pj4GWoavtIIvNkwM4b_8X0km7vW7JB1fMRKII_DpKFIs3KQ28KDKav4q9CTgKO_sJXycjRdhgjgDdW2AnIPHiJI6iBEOhRzvkU1oVYZR0CYomxRwi0yUK8O95DYQiwHZO3myPZ7A4ZVeFZ1aZAxjH71",
    },
    {
      id: 2,
      quote: "The Rise of Superman is a tour de force. An inspiring, research-driven look into the edge of human limits and potential.",
      author: "Ray Kurzweil",
      role: "director of engineering at Google",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3UtczvH9tNbeWKHqFO8JQeVoMlye3-quAFCWvHJJvhLCDfQqrzzqzvkKBV8snHhE28iO3gvW39n7Mk9dLSlczf6_S7SEKo0jwyzKDuRdcsWv7Z6Uh3XZKHDafzI3NMIc314QQEN3aup-qMFfmVUa3lewy15iRzbnncIkUxZwpxwXb-KMjeUsJxBbkgVVa60YI-8giT2k1H0u3Eg4SY4K82Rhha5Ah2J0hKLNl8alf-tJqZMPIKq4wtcNLi4XvJv5R-ATqBsbW24_l",
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-blue-50">
      <div className="container mx-auto px-4 md:px-12 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left Block */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/3"
          >
            <h2 className="text-4xl md:text-5xl font-black text-dark leading-none mb-6">
              WHAT<br/>OTHERS SAY
            </h2>
            <p className="text-sm text-slate-500 mb-8 leading-relaxed">
              Zacchaeus's research centers on the neurobiology of peak performance — essentially what happens in the brain and body when humans are performing at their absolute best.
            </p>
            <div className="flex space-x-2">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-primary shadow-sm border border-slate-100 transition-all hover:bg-slate-50 active:scale-95"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-md hover:bg-blue-800 transition-all active:scale-95"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Right Block (Testimonials listing) */}
          <div className="md:w-2/3 flex flex-col gap-8">
            {testimonials.map((t, idx) => {
              const isActive = idx === activeIndex;
              return (
                <motion.div 
                  layout
                  key={t.id}
                  onClick={() => setActiveIndex(idx)}
                  whileHover={{ x: isActive ? 4 : 2 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className={`p-8 rounded-3xl relative cursor-pointer ${
                    isActive 
                      ? 'bg-blue-100/50 opacity-100 shadow-sm border border-blue-200/40' 
                      : 'bg-transparent opacity-50 hover:opacity-75'
                  }`}
                >
                  <span className="absolute top-8 left-8 text-xs font-bold text-slate-400">
                    /0{t.id}
                  </span>
                  
                  {/* Quote Icon */}
                  <svg className={`absolute top-6 right-8 w-10 h-10 opacity-50 transition-colors ${
                    isActive ? 'text-blue-200' : 'text-slate-200'
                  }`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  
                  <p className={`text-lg font-semibold mb-6 relative z-10 leading-relaxed mt-6 transition-all duration-300 ${
                    isActive ? 'text-dark font-semibold' : 'text-slate-500 font-normal'
                  }`}>
                    "{t.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <img 
                      alt={t.author} 
                      className={`w-10 h-10 rounded-full object-cover shadow-sm transition-all duration-500 ${
                        isActive ? 'grayscale-0 scale-100' : 'grayscale opacity-60 scale-95'
                      }`}
                      src={t.avatar}
                    />
                    <div>
                      <h4 className={`font-bold text-xs transition-colors ${
                        isActive ? 'text-dark' : 'text-slate-500'
                      }`}>
                        {t.author}
                      </h4>
                      <p className={`text-[10px] uppercase tracking-wider transition-colors ${
                        isActive ? 'text-slate-500' : 'text-slate-400'
                      }`}>
                        {t.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
