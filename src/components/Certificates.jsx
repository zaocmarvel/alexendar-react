import { motion } from 'framer-motion';

export default function Certificates({ onBack }) {
  const credentials = [
    {
      title: "AWS Certified Machine Learning – Specialty",
      issuer: "Amazon Web Services (AWS)",
      date: "Dec 2025",
      id: "AWS-ML-1903",
      category: "Cloud / ML Architecture",
      icon: (
        <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Professional Google Cloud Machine Learning Engineer",
      issuer: "Google Cloud Platform (GCP)",
      date: "Oct 2025",
      id: "GCP-MLE-8890",
      category: "ML Ops / Platform Engineering",
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "NVIDIA Deep Learning Institute – CUDA Specialist",
      issuer: "NVIDIA",
      date: "Aug 2025",
      id: "NV-CUDA-5512",
      category: "Parallel Programming / CUDA",
      icon: (
        <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Deep Learning Specialization",
      issuer: "Coursera / DeepLearning.AI",
      date: "May 2025",
      id: "DL-SPECIAL-9921",
      category: "Deep Learning Fundamentals",
      icon: (
        <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Stanford University Graduate Certificate in AI",
      issuer: "Stanford Center for Professional Development",
      date: "Mar 2025",
      id: "STAN-AI-7741",
      category: "Graduate Studies / Academic Research",
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      )
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-12 max-w-5xl relative z-10">
        {/* Navigation back button */}
        <motion.button 
          whileHover={{ x: -4 }}
          onClick={onBack}
          className="inline-flex items-center text-slate-500 hover:text-primary transition-colors text-sm font-semibold mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </motion.button>

        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl font-black text-dark mb-4 tracking-tight">CERTIFICATES & BADGES</h1>
          <p className="text-slate-500 text-lg max-w-xl">
            Verified academic credentials, cloud certifications, and technical badges earned by Zacchaeus.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {credentials.map((cred, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              whileHover={{ y: -5, boxShadow: "0 25px 40px -15px rgba(0, 0, 0, 0.1)" }}
              className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-lg flex items-start gap-6 cursor-pointer"
            >
              <div className="p-4 bg-slate-50 rounded-2xl shrink-0">
                {cred.icon}
              </div>
              <div className="flex-grow">
                <span className="text-[10px] font-bold text-primary bg-indigo-50 px-2 py-0.5 rounded-full tracking-wider uppercase">
                  {cred.category}
                </span>
                <h3 className="text-lg font-bold text-dark mt-2 mb-1 leading-snug">{cred.title}</h3>
                <p className="text-xs font-semibold text-slate-600 mb-4">{cred.issuer}</p>
                <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 border-t border-slate-50 pt-3">
                  <span>DATE: {cred.date}</span>
                  <span>ID: {cred.id}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
