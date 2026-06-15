import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Header({ onOpenBooking, onViewHome, onViewPortfolio }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('HOME');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['HOME', 'PORTFOLIO', 'SPEAKING', 'WRITING', 'ABOUT ME'];

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setActiveTab(item);
    setMobileMenuOpen(false);
    
    if (item === 'PORTFOLIO') {
      if (onViewPortfolio) onViewPortfolio();
      return;
    }
    
    if (onViewHome) onViewHome();
    
    // Smooth scroll mapping
    let targetId = '';
    if (item === 'HOME') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (item === 'ABOUT ME') targetId = 'about';
    else if (item === 'WRITING') targetId = 'books';
    else if (item === 'SPEAKING') targetId = 'speaking';
    
    if (targetId) {
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-40 px-6 md:px-12 py-4 flex justify-between items-center transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-md shadow-md' 
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <div className="text-2xl font-bold text-dark tracking-tighter cursor-pointer" onClick={() => {
          if (onViewHome) onViewHome();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
          Zacchaeus
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-1 items-center text-sm font-semibold tracking-wider text-slate-700 bg-slate-100/60 p-1 rounded-full border border-slate-200/50 backdrop-blur-sm">
          {navItems.map((item) => {
            const isActive = activeTab === item;
            return (
              <a
                key={item}
                href="#"
                onClick={(e) => handleNavClick(e, item)}
                className={`relative px-4 py-1.5 transition-colors duration-300 text-xs rounded-full ${
                  isActive ? 'text-white' : 'text-slate-600 hover:text-dark'
                }`}
              >
                {isActive && (
                  <motion.span 
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-primary rounded-full -z-10 shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item}
              </a>
            );
          })}
        </div>

        {/* Booking & Hamburger */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={onOpenBooking}
            className="bg-primary text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-blue-800 transition-colors flex items-center shadow-md active:scale-95"
          >
            BOOK NOW 
            <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Mobile hamburger toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-white text-slate-600 shadow-sm border border-slate-100 hover:text-primary transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer/Menu */}
      <div 
        className={`fixed inset-0 z-30 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div 
        className={`fixed top-0 right-0 bottom-0 w-64 bg-white z-40 shadow-2xl border-l border-slate-100 p-8 flex flex-col space-y-6 transition-transform duration-300 ease-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center pb-4 border-b border-slate-100">
          <span className="text-xl font-bold text-dark tracking-tighter">Menu</span>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="p-1 rounded-full bg-slate-50 text-slate-500 hover:text-dark"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col space-y-4 text-sm font-semibold tracking-wider">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              onClick={(e) => handleNavClick(e, item)}
              className={`py-2 transition-colors border-l-2 pl-3 ${
                activeTab === item 
                  ? 'text-primary border-primary bg-indigo-50/50' 
                  : 'text-slate-600 border-transparent hover:text-primary hover:border-slate-300'
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="pt-6 border-t border-slate-100 flex flex-col gap-4">
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full bg-primary text-white py-3 rounded-full text-xs font-bold hover:bg-blue-800 transition-colors shadow-md flex items-center justify-center gap-2"
          >
            BOOK NOW
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
