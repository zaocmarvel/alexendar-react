export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-hero-gradient overflow-hidden rounded-b-[3rem] shadow-sm">
      {/* Background massive letters overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 select-none pointer-events-none mix-blend-overlay">
        <h1 className="text-[15vw] font-extrabold text-white leading-none whitespace-nowrap tracking-tighter">
          ALEXENDAR
        </h1>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between">
        {/* Left column */}
        <div className="md:w-1/3 mb-10 md:mb-0 z-20 pl-4 md:pl-12">
          <div className="flex items-center space-x-2 text-sm font-semibold text-slate-600 mb-4 uppercase tracking-widest">
            <span className="w-8 h-px bg-slate-400"></span>
            <span>Author</span>
            <span className="text-primary">• Speaker</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-dark leading-tight mb-4">
            flow <span className="text-primary italic">researcher</span>
          </h2>
          <p className="text-slate-500 font-medium tracking-wide">gravity lover</p>
        </div>

        {/* Center column (Portrait) */}
        <div className="md:w-1/3 flex justify-center relative z-20">
          <img 
            alt="Alexendar Portrait" 
            className="w-64 md:w-80 h-auto object-cover rounded-2xl shadow-2xl drop-shadow-xl transform -translate-y-4 hover:scale-[1.02] transition-transform duration-300" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZi6zAPYm0JzuCvpI_jEryJrr0kti1RU8AjC6m0rc7FvV6UD14Wun_vYqXEo25CYKC4vsSHGmb0SA6chFyzy1iw42z1ujVoJdaV3qCEoo9GYFKYdfPbAaojD9jchbfbogiGT2GaHCde6PT16gE2kQc1xewOHiZUsZ67iOCY2Nl5Kk__15-O32e9_Zt32vHDzVv5Z6hwrxQ8M_j-CjhTaJiuxREWnowL_aCV45-lV6xo7HJkbKUOTrh3Y-bzdmID09q8ZundBzX-70g"
          />
        </div>

        {/* Right spacing column */}
        <div className="md:w-1/3 hidden md:block"></div>
      </div>

      {/* Bottom text outline */}
      <div className="absolute bottom-0 w-full flex justify-center translate-y-1/2 z-30">
        <h1 className="text-6xl md:text-[8rem] font-black text-white text-outline tracking-tighter mix-blend-overlay opacity-80 select-none">
          ALEXENDAR
        </h1>
      </div>
    </section>
  );
}
