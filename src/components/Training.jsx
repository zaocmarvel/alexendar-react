import { motion } from 'framer-motion';

export default function Training({ onOpenBooking }) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: 0.4,
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section className="py-24 bg-section-gradient -mt-16 pt-32">
      <div className="container mx-auto px-4 md:px-12 max-w-6xl">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row items-center gap-16"
        >
          {/* Left Column */}
          <motion.div 
            variants={leftVariants}
            className="md:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-black text-dark leading-none mb-8">
              AI / ML<br/>CONSULTING
            </h2>
            <div className="flex items-start gap-4 mb-8">
              <div className="w-16 h-px bg-slate-300 mt-2 shrink-0"></div>
              <p className="text-slate-500 leading-relaxed text-sm">
                Zacchaeus's engineering work centers on model optimization and fine-tuning — specifically how to maximize model throughput and decrease compute latency on domain-specific datasets, with a core focus on production-grade Small Language Models.
              </p>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-blue-800 transition-all shadow-md active:scale-95"
            >
              GET IN TOUCH 
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            variants={rightVariants}
            className="md:w-1/2 relative"
          >
            <motion.img 
              whileHover={{ scale: 1.015 }}
              alt="AI Server Telemetry" 
              className="w-full h-[400px] object-cover rounded-3xl shadow-xl transition-transform duration-300" 
              src="/ai_server_telemetry.jpg"
            />
            
            {/* Overlay Card */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                boxShadow: "0 25px 40px -15px rgba(0, 0, 0, 0.2)"
              }}
              className="absolute -bottom-8 -left-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex flex-col gap-4 w-64 cursor-pointer"
            >
              <div className="flex gap-4 items-center">
                <img 
                  alt="Praxis AI logo" 
                  className="w-12 h-12 rounded-full object-cover shadow-sm" 
                  src="/llama_finetune.jpg"
                />
                <p className="text-xs font-bold text-dark leading-tight">
                  Scale your business with optimized Small Language Models.
                </p>
              </div>
              <div className="flex items-center text-xs font-medium text-slate-500 border-t border-slate-100 pt-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2"></span>
                Praxis AI Co-Founder
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
