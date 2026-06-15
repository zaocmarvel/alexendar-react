import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Videos() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const videos = [
    {
      title: "How to open the door to peak performance | Steven Kotler",
      youtubeId: "dM_Jivm49gA",
      thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2sVtrsSHt0IPE67C3OJJ5QVEtUPudDGldNVoIWcA9bLvrhu28PE6--MAKh4ZYAexIHZf-dGpuabWXON6aJgNH86ahrAjkCFVDil3R8ZR0x6Ev9uWjlrxSNd5FqCCExSeAg-CROMTwVvw8929ZJZ9vUD9fSGTwD_GglScLIbLJikHV-WEQnby3w8aJ8OpLY9iUGKQAb_TnsdXETEteQqbdAT0q6sAU3I_W0baWYOESn4OFvyiBIgxhpxWOusK7TjQ1WDCIsYE5hqtC",
    },
    {
      title: "The Science of Peak Performance & Flow State",
      youtubeId: "Vz36uF8N5xI",
      thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMO-CXziyzO5XOc1DmitQ021FnzNBaYeszOqysHcKfG4FkOspzT3bvYEUI0NT37NFVK9dHB1It7cDpia8QaOopG0O2mDuAbuYDOuCmwm8YmSOGy9q-3gsCE2nyYoPFa-g9JigzPAJf8iJgMVWA2fSL9-tpsePVwEHcp6y_SrTOPuTQR575gIHsFR0ouL6sbXqmr3vgpEgzFFMj4zgpJfmqub-WryaQ5WN0Uqm7czIRu4cFfyumn6J8sZNJzF9H0vQsbK4WFTNkTm_1",
    },
    {
      title: "Steven Kotler: The Art of Impossible",
      youtubeId: "N8mP7R2-8U8",
      thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuAd_urd9ITB3C7yaRQOWBbD8jUKR55M6T8MZ2VWZc_Mg-3KSS6L5kEQ_eKlFMKxZARdZQgLPjkzxqc9w1yomO7hkHKQRHxYSlgFg1XIGti_R05Jt05XPSNi-G6QRlpUADKADSiW3_Ht6ZI3b7FOJ4bvx3QgS3XbzeF_vqT5w2aYTxuAMb6ENcDEOhTnrmuOLyO_gDBOzTdTkOdgmVx_IOSZu-4Q9H8ADM5b1vmbDw_8fBzoHshcccnEfxHUO773ywroj6tXBc2pMACG",
    },
    {
      title: "Neuroscience of Flow State & Peak Performance",
      youtubeId: "XG_h31Z0WkM",
      thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuCekJh3iLdt9zqSj4hI0OUHVx8eM_9iit8EUbZdgZ4AfuIplpf8acJvF8k3PJZQjeg9v2l22EWfr87W_dzbLj5iPBqMEsRsHgdQxUJhCgIvwqUG8I_DL-qW0LqEK7iuFUa1AkDn4JioxstWAYT7LCsV3ZEEKJ0DOAAI9ms8wfh6Ph5Bw4ymvGsi3a9xVd-5FvvzGZFMygKelzEhB-1-13j7fI3ISvT7su-r18i81oAUWN_DZeYG_61o8WQRPKXg7Y_jIdXuu9wuoIHe",
    },
    {
      title: "Steven Kotler: How to Get into the Flow State",
      youtubeId: "7x3W1z4u3x8",
      thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuDus7WdIAVpKj0NQeu_nib-fJkf0_f70aj-mKHQPSWA_Xffp3SaurNBEg8GD6-fLv7Jegx8BaD5P92XFgGtHlL14C5VaN_g5y1XZA5Mv92Vu2i0Vl8d9Txfx-1N8hIn-xDzAbCGn7vQi5J6wJaHV6DzADYp7yFVfNPw8EcjWKy2RIwmiFfS5O-hVr1nAGZZHUEZ4PMACzHDj-KkizuziqEBOOK0i8UnBuB3aBaXUOVifB35Rcgk2iLe0lCneDvnRSgCFSG5fPmEQ6kB",
    }
  ];

  // Main high-res placeholder image
  const mainPlaceholder = "https://lh3.googleusercontent.com/aida-public/AB6AXuAM3uoiFv4trORA8zsvfoSzid4JEL0BiKjbZ1sRxFqwA9APUJAmtPRyh7oAtFjX9u40zkD09Xe8VFuHaky09RhyzYt-JomwYhvWycSCQ1lBFNeEIB532gZsNThmPHlyPg_9CDUX11_J4-XagOrFaQ3-L1DjCEkD1d3P2PG2MHtVEs5irvmgsa5qcqKfx2L1iMQ0uRvgM5EUfwp-OEybnxlZSq7EujuzzcAEyOoQVDEboYHEMTSb31l5eWjTh8EfCTF5UYfZAGginJKo";

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
                  src={activeVideoIndex === 0 ? mainPlaceholder : videos[activeVideoIndex].thumbnail}
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
                  src={vid.thumbnail}
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
