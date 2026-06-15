import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Partners from './components/Partners';
import Books from './components/Books';
import Wisdom from './components/Wisdom';
import Training from './components/Training';
import Videos from './components/Videos';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  const handleScrollToBooks = (e) => {
    if (e) e.preventDefault();
    const element = document.getElementById('books');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="font-sans antialiased overflow-x-hidden bg-slate-50 min-h-screen">
      {/* Navigation Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About onOpenBooking={handleOpenBooking} onScrollToBooks={handleScrollToBooks} />

      {/* Trusted Partners */}
      <Partners />

      {/* Best Selling Books */}
      <Books />

      {/* Disruptive Wisdom speaking promo */}
      <Wisdom onOpenBooking={handleOpenBooking} />

      {/* Flow Training section */}
      <div id="training">
        <Training onOpenBooking={handleOpenBooking} />
      </div>

      {/* Recent Videos player */}
      <div id="videos">
        <Videos />
      </div>

      {/* Testimonials */}
      <Testimonials />

      {/* Footer & CTA block */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Contact/Booking Modal Popup */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </div>
  );
}

export default App;
