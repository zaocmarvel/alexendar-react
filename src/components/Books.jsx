import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function Books() {
  const sliderRef = useRef(null);
  const [activeBookId, setActiveBookId] = useState(2); // Featured book (id: 2 - The Devil's Dictionary)

  const books = [
    {
      id: 1,
      title: "Gem country",
      rating: "4.8 Rating",
      description: "Olabode Zacchaeus is a New York Times bestselling author and award winning journalist.",
      cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0x3in0W5SWt3Go1ACp5oHcqwy77ZK8RId1Y-sDu0rbitmXIFvWrtLFkhSXHVjcW8GydaQbQgdEyem9lthhwFERFgPtfrSL17ZYU_2c7tSPJqqV6s6EzQLKdA4TetCnQqvGJLex5q2Sfh8hJKWEUKNaZQJQ9Qwx7Z-CpezcsvvJ5_YOSDqLF93wwIf-1gqk_ygS-fMm50ik5PYqK0VgVfxqyTWujIXBI_YQYRIUrdrU7o6VuovT6iHrUBz8GAMa2h34Me7wek0cgU7",
    },
    {
      id: 2,
      title: "The devil's dictionary",
      rating: "4.8 Rating",
      description: "Olabode Zacchaeus is a New York Times bestselling author and award winning journalist.",
      cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOVev2tK2ztcFrxOXni3qDlmTUCXCrOSmIHUrXX4yRVzChNmrotEKIhtz67OkGZq8ZuWwREVKWI5UA6ijWQTAh7hvYLGBzTy7g1eoHoyKMY7QA9bYdhQ1hBpGL03jAAlvwGXqIeBXYRGlonlItPzXLaRFJhJ5bbQDVs3vMhLuTbsg1gGmk4Y1tbMYk2i9l_bP6pP_9DcbpGDPhoAbrKBbwu6YG013zo6lUHMAjPD7i6Wt59_l3ig86yyiyLN2dkAk4nj2Qf5bUkkzO",
      featured: true
    },
    {
      id: 3,
      title: "The art of impossible",
      rating: "4.8 Rating",
      description: "Olabode Zacchaeus is a New York Times bestselling author and award winning journalist.",
      cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdI69rHVZex0FKVdLHaOIrJn1kksznLBaLhuXWtGJ5nUDGBbguFRjvSlOdOuRAghoUo14fCLbQzwCmvNvnfrsKwwl4CiFD7V5I4IJ_-N_9n9S-V4aWesdclSrSy73xfN1MKdRd7QfUCCgIftVj690cyqSKydYoNJmzvhCvMLGzuiSAd2LPWRcQjPNcxCPXDxmPN1fEQXX9IsEUDp3mIT9f2cggWnaEF5Ob8M4pdbgtjUp1ftB_y-MSnaM2XgYj0IseavIQdHeQ7150",
    }
  ];

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollAmount = clientWidth * 0.5; // Scroll about half the container width
      sliderRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }

    // Cycle the active/featured book status for visual feedback
    if (direction === 'left') {
      setActiveBookId((prev) => (prev > 1 ? prev - 1 : 3));
    } else {
      setActiveBookId((prev) => (prev < 3 ? prev + 1 : 1));
    }
  };

  return (
    <section id="books" className="py-24 bg-section-gradient overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 mb-12 flex justify-between items-end">
        <h2 className="text-4xl md:text-5xl font-bold text-dark leading-none">
          BEST SELLING<br/>BOOKS
        </h2>
        
        {/* Navigation Arrows */}
        <div className="flex space-x-2">
          <button 
            onClick={() => handleScroll('left')}
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-primary shadow-sm border border-slate-100 transition-all hover:bg-slate-50 active:scale-95"
            aria-label="Previous book"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => handleScroll('right')}
            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-md hover:bg-blue-800 transition-all active:scale-95"
            aria-label="Next book"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Books Container */}
      <div 
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto pb-12 px-4 md:px-12 hide-scrollbar snap-x snap-mandatory items-center"
      >
        {books.map((book) => {
          const isFeatured = activeBookId === book.id;
          return (
            <motion.div 
              layout
              key={book.id}
              onClick={() => setActiveBookId(book.id)}
              whileHover={{ 
                y: -8, 
                boxShadow: isFeatured ? "0 35px 60px -15px rgba(29, 26, 143, 0.2)" : "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                borderColor: isFeatured ? "rgba(29, 26, 143, 0.3)" : "rgba(0, 0, 0, 0.1)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className={`snap-center shrink-0 cursor-pointer ${
                isFeatured 
                  ? 'w-80 md:w-96 bg-white rounded-3xl p-6 shadow-2xl border border-blue-100 z-10' 
                  : 'w-72 md:w-80 bg-white rounded-3xl p-6 shadow-lg border border-slate-100 flex flex-col opacity-80 hover:opacity-100'
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-blue-400 mr-2"></span>
                  {book.rating}
                </span>
              </div>
              <motion.img 
                layout
                alt={`${book.title} Book Cover`} 
                className={`w-full h-auto rounded-xl mb-6 object-cover aspect-[3/4] shadow-md`}
                src={book.cover}
              />
              <h3 className={`font-bold text-dark mb-2 transition-all ${
                isFeatured ? 'text-2xl' : 'text-xl'
              }`}>
                {book.title}
              </h3>
              <p className="text-sm text-slate-500 line-clamp-3">
                {book.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      <div className="text-center mt-8 relative z-20">
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center bg-primary text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-blue-800 transition-colors shadow-md active:scale-95" 
          href="#"
          onClick={(e) => e.preventDefault()}
        >
          VIEW ALL 
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </motion.a>
      </div>
    </section>
  );
}
