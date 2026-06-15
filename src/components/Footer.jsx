import { useState } from 'react';

export default function Footer({ onOpenBooking }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="relative bg-footer-gradient pt-32 pb-12 overflow-hidden mt-24">
      {/* CTA Card (Overlapping) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-4 z-20">
        <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PHBhdGggZD0iTTIwMCAwbDIwMCA0MDBIMHoiIGZpbGw9IiMzQjgyRjYiLz48L3N2Zz4=')] bg-cover pointer-events-none"></div>
          
          <div className="md:w-1/3 z-10">
            <img 
              alt="Steven Kotler Close Up" 
              className="w-full h-auto rounded-3xl object-cover shadow-lg border-4 border-white transform scale-110 -translate-y-8 hover:scale-[1.12] transition-transform duration-300" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIDt9DsW1Evz7puLS9GpDzOl0pnY76KHb9rKS_X5OSbZXV2_KgyrXzPISKELsGpybpijeJFh6-u-Co0D4otIM4qLOvm1udL9ohsIzjOrLiPrIc9IRfcBpojKo62yBp9F1pGSCYWAHijoYqEQEpV5m9X3s3q860p5FDthYxNdgV7HlWbQDPN4uxzOf25NR14p36zivN3czyDbjq06tLU5GAhhkqh27FGwHQdBhq2geqs58MoDMZPauOEmFIeRch1uWjuXPRlZCJlSoK"
            />
          </div>
          
          <div className="md:w-2/3 z-10 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black text-dark mb-4 leading-none">
              INSPIRE YOUR<br/>AUDIENCE
            </h2>
            <p className="text-sm text-slate-500 mb-8 max-w-md mx-auto md:mx-0">
              Bring the edge of <span className="font-bold text-dark">human performance to your event. Steven Kotler's talks</span> offer ground breaking perspectives and practical tools for excellence.
            </p>
            <button 
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-blue-800 transition-all shadow-md active:scale-95 animate-bounce-subtle"
            >
              BOOK STEVEN TO SPEAK 
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Background Text */}
      <div className="absolute bottom-1/4 w-full flex justify-center z-0 opacity-30 select-none pointer-events-none">
        <h1 className="text-[15vw] font-extrabold text-blue-100 text-outline leading-none whitespace-nowrap tracking-tighter mix-blend-overlay">
          OLABODE ZACCHAEUS
        </h1>
      </div>

      <div className="container mx-auto px-4 relative z-10 mt-32">
        <div className="max-w-2xl">
          <h3 className="text-xl font-bold text-dark mb-4">
            Subscribe to the flow research<br/>collective's newsletter
          </h3>
          
          {subscribed ? (
            <div className="bg-emerald-50 text-emerald-800 border border-emerald-100 rounded-full px-6 py-4 mb-12 text-sm font-semibold flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Thank you for subscribing! Check your inbox soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="relative flex-grow">
                <input 
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-blue-100/50 border-none rounded-full py-4 pl-6 pr-12 text-sm font-semibold text-dark placeholder-slate-500 focus:ring-2 focus:ring-primary outline-none" 
                  placeholder="ENTER EMAIL ADDRESS" 
                />
                <button 
                  type="submit"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <a 
                  className="w-10 h-10 rounded-full bg-transparent flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary transition-colors border border-slate-300 font-bold" 
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="sr-only">Facebook</span>f
                </a>
                <a 
                  className="w-10 h-10 rounded-full bg-transparent flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary transition-colors border border-slate-300 font-bold" 
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="sr-only">Twitter</span>x
                </a>
                <a 
                  className="w-10 h-10 rounded-full bg-transparent flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary transition-colors border border-slate-300 font-bold" 
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="sr-only">Instagram</span>i
                </a>
                <a 
                  className="w-10 h-10 rounded-full bg-transparent flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary transition-colors border border-slate-300 font-bold" 
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="sr-only">LinkedIn</span>in
                </a>
              </div>
            </form>
          )}
        </div>

        <div className="flex flex-wrap justify-between items-center border-t border-blue-200/50 pt-8 gap-4">
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs font-semibold text-slate-600 uppercase tracking-wider">
            <a className="hover:text-primary transition-colors" href="#" onClick={(e) => scrollToSection(e, 'home')}>ABOUT</a>
            <a className="hover:text-primary transition-colors" href="#" onClick={(e) => scrollToSection(e, 'books')}>WRITING</a>
            <a className="hover:text-primary transition-colors" href="#" onClick={(e) => scrollToSection(e, 'speaking')}>SPEAKING</a>
            <a className="hover:text-primary transition-colors" href="#" onClick={(e) => scrollToSection(e, 'videos')}>VIDEO</a>
            <a className="hover:text-primary transition-colors" href="#" onClick={(e) => scrollToSection(e, 'training')}>TRAIN</a>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8 text-xs text-slate-500">
          <p>© 2026 Olabode Zacchaeus, all rights reserved.</p>
          <p>Site by Olabode Zacchaeus React</p>
        </div>
      </div>
    </footer>
  );
}
