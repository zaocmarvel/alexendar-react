import { motion } from 'framer-motion';

export default function About({ onOpenBooking, onScrollToBooks }) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const textVariants = {
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

  const cardVariants = {
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

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Graphic overlay */}
      <div 
        className="absolute inset-0 opacity-10 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuCIDt9DsW1Evz7puLS9GpDzOl0pnY76KHb9rKS_X5OSbZXV2_KgyrXzPISKELsGpybpijeJFh6-u-Co0D4otIM4qLOvm1udL9ohsIzjOrLiPrIc9IRfcBpojKo62yBp9F1pGSCYWAHijoYqEQEpV5m9X3s3q860p5FDthYxNdgV7HlWbQDPN4uxzOf25NR14p36zivN3czyDbjq06tLU5GAhhkqh27FGwHQdBhq2geqs58MoDMZPauOEmFIeRch1uWjuXPRlZCJlSoK')] bg-cover bg-center mix-blend-multiply"
      />
      
      <div className="container mx-auto px-4 md:px-12 max-w-6xl relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          {/* Left Side */}
          <motion.div 
            variants={textVariants}
            className="md:w-1/2"
          >
            <div className="flex items-center space-x-4 mb-6">
              <span className="w-12 h-px bg-primary"></span>
              <span className="text-sm font-bold text-slate-500 tracking-widest uppercase">About Me</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-dark leading-tight mb-6">
              Olabode Zacchaeus is a New York Times bestselling author <span className="text-slate-400 font-light">and award winning journalist</span>
            </h2>
            <button 
              onClick={onScrollToBooks}
              className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-blue-800 transition-colors shadow-md mt-4 active:scale-95"
            >
              BUY ZACCHAEUS LATEST BOOKS 
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>

          {/* Right Side */}
          <motion.div 
            variants={cardVariants}
            className="md:w-1/2 relative mt-12 md:mt-0"
          >
            {/* Animated Blobs (simulated via CSS or subtle layouts) */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-indigo-50 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
            
            <motion.div 
              whileHover={{ 
                scale: 1.02, 
                rotateY: 2, 
                rotateX: -2,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-xl border border-slate-100 flex flex-col gap-6"
            >
              <img 
                alt="Speaking Event" 
                className="w-full h-48 rounded-2xl object-cover shadow-sm" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD68AWi9K3dpC5Ne5BrjKyA0nmWOi5bnrUBj_GyHM8U1dFb_JkbuQw7N-MNBNmFJe39xnhNkHj44RWA7tmjXoTfiz3tqD6fBBrXrU6UhizC3zW9L-5W1U_bQVNpDeiDWvEdTfpQa6bYiWsVO3SEayqXXvrkTXAnvRuexRzngpzI1CNZNWxIO-dY52t8qm_tIAQACVKBmXRvMpYczydm-RXVFLrXTVMRjC1unRV3nHYGwkbB5Ry6XKmqAjGpMn31fu1QSdZmkxserlqW"
              />
              <div>
                <p className="text-slate-600 leading-relaxed text-sm">
                  <span className="w-8 h-px bg-primary inline-block align-middle mr-2"></span>
                  <span className="font-bold text-dark">And the cofounder and executive director</span> of the <span className="font-semibold">flow research collective</span>, he is one of the world leading expert on human performance.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
