import { motion } from 'framer-motion';

export default function CertificatesTeaser({ onViewCertificates }) {
  const previewCerts = [
    {
      title: "AWS Certified ML Specialist",
      issuer: "Amazon Web Services",
      color: "border-amber-400 text-amber-500",
      iconPath: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    },
    {
      title: "Professional GCP ML Engineer",
      issuer: "Google Cloud",
      color: "border-blue-400 text-blue-500",
      iconPath: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    },
    {
      title: "NVIDIA CUDA Specialist",
      issuer: "NVIDIA DLI",
      color: "border-emerald-400 text-emerald-500",
      iconPath: "M13 10V3L4 14h7v7l9-11h-7z"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Graphic elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-slate-50 rounded-full opacity-50 blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-12 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Block */}
          <div className="lg:w-1/2">
            <span className="text-xs font-bold text-primary bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-wider">
              Credentials & Competencies
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-dark leading-none mt-6 mb-8">
              VERIFIED AI / ML<br/>CERTIFICATIONS
            </h2>
            <p className="text-slate-500 leading-relaxed text-sm mb-8">
              Professional credentials spanning major cloud AI platforms, accelerated CUDA systems development, and advanced Deep Learning foundations. These certifications validate industry-grade competence in design, training, and deployment of intelligent solutions.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onViewCertificates}
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-blue-800 transition-all shadow-md active:scale-95"
            >
              VIEW ALL CREDENTIALS
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* Right Block - Miniature badging layout */}
          <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            {previewCerts.map((cert, index) => (
              <motion.div 
                key={index}
                whileHover={{ x: 6, scale: 1.01 }}
                className="bg-slate-50 p-5 rounded-[1.8rem] border border-slate-100/80 shadow-sm flex items-center gap-5 cursor-pointer"
                onClick={onViewCertificates}
              >
                <div className={`p-3.5 bg-white rounded-xl shrink-0 border ${cert.color}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={cert.iconPath} />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-dark mb-0.5 leading-snug">{cert.title}</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
