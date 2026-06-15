import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const floatAnimation = {
    animate: {
      y: [0, -12, 0],
      rotate: [0, 0.5, 0, -0.5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-hero-gradient overflow-hidden rounded-b-[3rem] shadow-sm">
      {/* Background massive letters overlay */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center opacity-25 select-none pointer-events-none mix-blend-overlay"
      >
        <h1 className="text-[15vw] font-extrabold text-white leading-none whitespace-nowrap tracking-tighter">
          ZACCHAEUS
        </h1>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between"
      >
        {/* Left column */}
        <motion.div 
          variants={itemVariants}
          className="md:w-1/3 mb-10 md:mb-0 z-20 pl-4 md:pl-12"
        >
          <div className="flex items-center space-x-2 text-sm font-semibold text-slate-600 mb-4 uppercase tracking-widest">
            <span className="w-8 h-px bg-slate-400"></span>
            <span>AI/ML</span>
            <span className="text-primary">• Engineer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-dark leading-tight mb-4">
            machine <span className="text-primary italic">learning</span>
          </h2>
          <p className="text-slate-500 font-medium tracking-wide">intelligence developer</p>
        </motion.div>

        {/* Center column (Portrait) */}
        <motion.div 
          variants={itemVariants}
          className="md:w-1/3 flex justify-center relative z-20"
        >
          <motion.div
            variants={floatAnimation}
            animate="animate"
            whileHover={{ scale: 1.05, rotate: 1.5, transition: { duration: 0.3 } }}
            className="relative cursor-pointer"
          >
            {/* Glow backing */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-accent rounded-2xl blur-md opacity-20 hover:opacity-45 transition duration-500"></div>
            <img 
              alt="Olabode Zacchaeus Portrait" 
              className="relative w-64 md:w-80 h-auto object-cover rounded-2xl shadow-2xl drop-shadow-xl" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZi6zAPYm0JzuCvpI_jEryJrr0kti1RU8AjC6m0rc7FvV6UD14Wun_vYqXEo25CYKC4vsSHGmb0SA6chFyzy1iw42z1ujVoJdaV3qCEoo9GYFKYdfPbAaojD9jchbfbogiGT2GaHCde6PT16gE2kQc1xewOHiZUsZ67iOCY2Nl5Kk__15-O32e9_Zt32vHDzVv5Z6hwrxQ8M_j-CjhTaJiuxREWnowL_aCV45-lV6xo7HJkbKUOTrh3Y-bzdmID09q8ZundBzX-70g"
            />
          </motion.div>
        </motion.div>

        {/* Right spacing column */}
        <div className="md:w-1/3 hidden md:block"></div>
      </motion.div>

      {/* Bottom text outline */}
      <motion.div 
        initial={{ y: "80%", opacity: 0 }}
        animate={{ y: "50%", opacity: 0.8 }}
        transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
        className="absolute bottom-0 w-full flex justify-center z-30"
      >
        <h1 className="text-6xl md:text-[8rem] font-black text-white text-outline tracking-tighter mix-blend-overlay select-none">
          ZACCHAEUS
        </h1>
      </motion.div>
    </section>
  );
}
