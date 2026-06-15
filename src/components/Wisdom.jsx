import { motion } from 'framer-motion';

export default function Wisdom({ onOpenBooking }) {
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
    hidden: { opacity: 0, scale: 0.9, rotate: -2 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  const floatAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="speaking" className="py-24 px-4 md:px-12 max-w-7xl mx-auto -mt-16 relative z-10">
      <div className="bg-wisdom-gradient rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden relative">
        {/* Background Graphic */}
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PHBhdGggZD0iTTIwMCAwbDIwMCA0MDBIMHoiIGZpbGw9IiMzQjgyRjYiLz48L3N2Zz4=')] bg-no-repeat bg-right-top bg-cover pointer-events-none"></div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row p-8 md:p-16 relative z-10 items-center gap-8"
        >
          {/* Left Column */}
          <motion.div 
            variants={leftVariants}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <h2 className="text-4xl md:text-5xl font-black text-dark leading-tight mb-8">
              APPLIED DEEP<br/>LEARNING
            </h2>
            
            <motion.div 
              whileHover={{ 
                scale: 1.02, 
                rotateY: 2.5,
                boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.15)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-lg border border-white flex flex-col sm:flex-row items-center sm:items-start gap-6"
            >
              <img 
                alt="LLM Fine-Tuning" 
                className="w-24 h-24 rounded-2xl object-cover shadow-sm shrink-0" 
                src="/llama_finetune.jpg"
              />
              <div>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  <span className="w-8 h-px bg-slate-400 inline-block align-middle mr-2"></span>
                  <span className="font-bold text-dark">In production pipelines and research combined, Zacchaeus builds deep learning</span> systems designed to scale. He is a trusted authority for organizations interested in training and fine-tuning custom models, delivering highly optimized results for modern enterprise use cases.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    • custom modeling &amp; training
                  </span>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onOpenBooking}
                    className="bg-primary text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-blue-800 transition-all shadow-md whitespace-nowrap ml-auto active:scale-95"
                  >
                    DISCUSS YOUR AI NEEDS 
                    <svg className="w-3 h-3 inline ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            variants={rightVariants}
            className="md:w-1/2 flex justify-center md:justify-end"
          >
            <motion.img 
              variants={floatAnimation}
              animate="animate"
              whileHover={{ scale: 1.03, rotate: 1, transition: { duration: 0.3 } }}
              alt="Deep Learning Neural Network Architecture" 
              className="w-full max-w-md h-auto rounded-3xl object-cover shadow-2xl drop-shadow-xl border-4 border-white cursor-pointer" 
              src="/deep_learning_nodes.jpg"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
