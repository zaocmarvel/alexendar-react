import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Videos() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const videos = [
    {
      title: "Introduction to Large Language Models | Olabode Zacchaeus",
      youtubeId: "zjkBMFhNj_g",
    },
    {
      title: "Deep Reinforcement Learning & PPO Path Planning | Robotics",
      youtubeId: "ySEx_BqXRMc",
    },
    {
      title: "Visual Grounding & Spatial Multi-Modal Models | Computer Vision",
      youtubeId: "jGwO_thLDj0",
    },
    {
      title: "Optimizing Transformer Architectures with CUDA & TensorRT",
      youtubeId: "aircAruvnKk",
    },
    {
      title: "Praxis AI: Fine-Tuning Small Language Models for Enterprise",
      youtubeId: "h6sV9U0cO24",
    }
  ];

  const handleThumbnailClick = (index) => {
    setActiveVideoIndex(index);
    setIsPlaying(false);
  };

  const handleNext = () => {
    setActiveVideoIndex((prev) => (prev + 1) % videos.length);
    setIsPlaying(false);
  };

  const handlePrev = () => {
    setActiveVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
    setIsPlaying(false);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-12 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-dark leading-none mb-2">RECENT VIDEOS</h2>
            <p className="text-sm text-slate-500 font-medium">{videos[activeVideoIndex].title}</p>
          </div>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm font-semibold text-slate-500 hover:text-primary transition-colors flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100" 
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            VIEW MORE VIDEOS 
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Video Player Window */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="relative bg-dark rounded-3xl overflow-hidden aspect-video shadow-2xl mb-8 group border-8 border-white"
        >
          <AnimatePresence mode="wait">
            {isPlaying ? (
              <motion.iframe 
                key="player"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                width="100%" 
                height="100%" 
                src={`https://www.youtube.com/embed/${videos[activeVideoIndex].youtubeId}?autoplay=1`}
                title={videos[activeVideoIndex].title}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            ) : (
              <motion.div 
                key="thumbnail"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 w-full h-full"
              >
                <img 
                  alt="Video Thumbnail" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
                  src={`https://img.youtube.com/vi/${videos[activeVideoIndex].youtubeId}/hqdefault.jpg`}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button 
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsPlaying(true)}
                    className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white active:scale-95"
                    aria-label="Play video"
                  >
                    <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Video Thumbnails Selection Carousel */}
        <div className="relative px-12 -mt-16 z-10">
          <div className="flex gap-4 overflow-x-auto hide-scrollbar snap-x items-center justify-center py-2">
            {videos.map((vid, index) => {
              const isActive = index === activeVideoIndex;
              return (
                <motion.img 
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  alt={`Video ${index + 1} Thumbnail`} 
                  className={`snap-start shrink-0 w-32 h-20 object-cover rounded-xl shadow-sm cursor-pointer transition-all p-1 bg-white border-2 ${
                    isActive 
                      ? 'border-primary scale-105 opacity-100' 
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`} 
                  src={`https://img.youtube.com/vi/${vid.youtubeId}/hqdefault.jpg`}
                />
              );
            })}
          </div>

          {/* Controls */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-400 shadow-md hover:text-primary transition-all border border-slate-100 hover:bg-slate-50 active:scale-95"
            aria-label="Previous video"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-md hover:bg-blue-800 transition-all active:scale-95"
            aria-label="Next video"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
