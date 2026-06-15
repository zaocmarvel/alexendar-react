export default function Wisdom({ onOpenBooking }) {
  return (
    <section id="speaking" className="py-24 px-4 md:px-12 max-w-7xl mx-auto -mt-16 relative z-10">
      <div className="bg-wisdom-gradient rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden relative">
        {/* Background Graphic */}
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PHBhdGggZD0iTTIwMCAwbDIwMCA0MDBIMHoiIGZpbGw9IiMzQjgyRjYiLz48L3N2Zz4=')] bg-no-repeat bg-right-top bg-cover pointer-events-none"></div>
        
        <div className="flex flex-col md:flex-row p-8 md:p-16 relative z-10 items-center gap-8">
          {/* Left Column */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-black text-dark leading-tight mb-8">
              DISRUPTIVE<br/>WISDOM
            </h2>
            
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-lg border border-white flex flex-col sm:flex-row items-center sm:items-start gap-6 transform hover:scale-[1.01] transition-transform duration-300">
              <img 
                alt="Speaking Event" 
                className="w-24 h-24 rounded-2xl object-cover shadow-sm shrink-0" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD68AWi9K3dpC5Ne5BrjKyA0nmWOi5bnrUBj_GyHM8U1dFb_JkbuQw7N-MNBNmFJe39xnhNkHj44RWA7tmjXoTfiz3tqD6fBBrXrU6UhizC3zW9L-5W1U_bQVNpDeiDWvEdTfpQa6bYiWsVO3SEayqXXvrkTXAnvRuexRzngpzI1CNZNWxIO-dY52t8qm_tIAQACVKBmXRvMpYczydm-RXVFLrXTVMRjC1unRV3nHYGwkbB5Ry6XKmqAjGpMn31fu1QSdZmkxserlqW"
              />
              <div>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  <span className="w-8 h-px bg-slate-400 inline-block align-middle mr-2"></span>
                  <span className="font-bold text-dark">In lectures and trainings combined, Steven has helped over a million</span> people harness flow to increase performance. He is the trusted authority by individuals and organizations interested in tapping into their highest potential, <span className="text-slate-500">and followed and endorsed by such giants as Elon Musk</span>
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    • in lectures and trainings combined
                  </span>
                  <button 
                    onClick={onOpenBooking}
                    className="bg-primary text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-blue-800 transition-all shadow-md whitespace-nowrap ml-auto active:scale-95"
                  >
                    BOOK STEVEN TO SPEAK 
                    <svg className="w-3 h-3 inline ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img 
              alt="Steven Kotler Portrait" 
              className="w-full max-w-md h-auto rounded-3xl object-cover shadow-2xl drop-shadow-xl border-4 border-white transform hover:-translate-y-2 transition-transform duration-500" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBapw4-dyx9gApLwNvSnTA6p4pIyA2m0TWWRLz_QoA_sxEma8pXnaBAj7Np4itCk2VXxLjIUohXtUtXsD-f59FAjiUYUheVtibUCjb-P6MHWe7OdkiazJYbJKc1bfrgWCeYhhtzTqkAEgHNHv3YP6_d6t0FuEEPF7xa3Iq77TCREcHs6nT3ZCx3LEa-Wi8og4BEJRlJyEcs5C44JkxSJk2Dxo0LoBXxfVoDx2el5K0sqZehIZ00sPJy1bd1C-gWuszQZKj3XQ9xVuVC"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
