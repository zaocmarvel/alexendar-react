export default function Training({ onOpenBooking }) {
  return (
    <section className="py-24 bg-section-gradient -mt-16 pt-32">
      <div className="container mx-auto px-4 md:px-12 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Left Column */}
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black text-dark leading-none mb-8">
              FLOW<br/>TRAINING
            </h2>
            <div className="flex items-start gap-4 mb-8">
              <div className="w-16 h-px bg-slate-300 mt-2 shrink-0"></div>
              <p className="text-slate-500 leading-relaxed text-sm">
                Steven's research centers on the neurobiology of peak performance — essentially what happens in the brain and body when humans are performing at their very best — with particular attention paid to the state of consciousness known as flow.
              </p>
            </div>
            <button 
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-blue-800 transition-all shadow-md active:scale-95"
            >
              TRAIN FLOW 
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 relative">
            <img 
              alt="Audience at Training" 
              className="w-full h-[400px] object-cover rounded-3xl shadow-xl transform hover:scale-[1.01] transition-transform duration-300" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeFLYuLs49rdsIyVJdZTiDeDKIK71XMgdedUkBZ5rQW9r1LR9CMAn4zBxD-NBBo6vC-miMVT6RzOjl0bweb7H6DTWG9b7i2i-1IxF9frRPK3aIMUH7h8eQbAoqBMAu-3TwWQrkB3U2txrkIdQ2kYj_jompvBkbd03uz2kgdf0gcArqAp6S1ZDcMcqwIbr5Iad8VfYaqxout0ocitc0ARtzCxo95CY7qowPiad0_D6JbQvGf1jMx_4CZVrOgyLuqpU-N4SwFIs3gQWr"
            />
            
            {/* Overlay Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex flex-col gap-4 w-64">
              <div className="flex gap-4 items-center">
                <img 
                  alt="Small Portrait" 
                  className="w-12 h-12 rounded-full object-cover shadow-sm" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcyTNWpAXoB5LO4mE1osDZ6Mv21aFRShhjUrgx97XGzZMUaZoykSfQTfhF_nyphDxBKFb8mwCoketl04XDuZ2fbvQKiieGGxAYYx8fe61JIR4oOEwJVZ9X3dAIb_D4MOJgHOjAOfDx70ggnECnBe85DR9GGRRMjcWRQL_6l3R7e8RvuvDUjndKzd6aaspjmRFkYmxGJ9Y-S3q0a3eL_7pMxqAl73X6Deg2dNH1QG-itza0d5VJ2BHy7yJzpAUorpCuXvk4Wh4kEC1x"
                />
                <p className="text-xs font-bold text-dark leading-tight">
                  Steven's research centers on the neurobiology of peak performance
                </p>
              </div>
              <div className="flex items-center text-xs font-medium text-slate-500 border-t border-slate-100 pt-2">
                <span className="w-2 h-2 rounded-full bg-blue-400 mr-2"></span>
                4.8 Rating
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
