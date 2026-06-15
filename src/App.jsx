import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Partners from './components/Partners';
import Books from './components/Books';
import Wisdom from './components/Wisdom';
import Training from './components/Training';
import CertificatesTeaser from './components/CertificatesTeaser';
import Videos from './components/Videos';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import Portfolio from './components/Portfolio';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  const [view, setView] = useState('home'); // 'home', 'portfolio', 'certificates', or 'contact'
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  return (
    <div className="font-sans antialiased overflow-x-hidden bg-slate-50 min-h-screen">
      {/* Navigation Header */}
      <Header 
        onOpenBooking={handleOpenBooking} 
        onViewHome={() => setView('home')} 
        onViewPortfolio={() => setView('portfolio')} 
        onViewCertificates={() => setView('certificates')}
        onViewContact={() => setView('contact')}
      />

      <AnimatePresence mode="wait">
        {view === 'portfolio' ? (
          <Portfolio key="portfolio" onBack={() => setView('home')} />
        ) : view === 'certificates' ? (
          <Certificates key="certificates" onBack={() => setView('home')} />
        ) : view === 'contact' ? (
          <Contact key="contact" onBack={() => setView('home')} />
        ) : (
          <div key="home">
            {/* Hero Section */}
            <Hero />

            {/* About Section */}
            <About 
              onOpenBooking={handleOpenBooking} 
              onViewPortfolio={() => setView('portfolio')} 
            />

            {/* Trusted Partners */}
            <Partners />

            {/* Best Selling Books */}
            <Books onViewPortfolio={() => setView('portfolio')} />

            {/* Disruptive Wisdom speaking promo */}
            <Wisdom onOpenBooking={handleOpenBooking} />

            {/* Flow Training section */}
            <div id="training">
              <Training onOpenBooking={handleOpenBooking} />
            </div>

            {/* Certificates Teaser Section */}
            <CertificatesTeaser onViewCertificates={() => setView('certificates')} />

            {/* Recent Videos player */}
            <div id="videos">
              <Videos />
            </div>

            {/* Testimonials */}
            <Testimonials />

            {/* Footer & CTA block */}
            <Footer 
              onOpenBooking={handleOpenBooking} 
              onViewCertificates={() => setView('certificates')}
              onViewContact={() => setView('contact')}
            />
          </div>
        )}
      </AnimatePresence>

      {/* Contact/Booking Modal Popup */}
      <AnimatePresence>
        {isBookingOpen && <BookingModal onClose={handleCloseBooking} />}
      </AnimatePresence>
    </div>
  );
}

export default App;
