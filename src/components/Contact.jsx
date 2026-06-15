import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact({ onBack }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
        onBack();
      }, 3000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

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
          className="mb-16 text-center md:text-left"
        >
          <h1 className="text-5xl font-black text-dark mb-4 tracking-tight">GET IN TOUCH</h1>
          <p className="text-slate-500 text-lg max-w-xl">
            Let's collaborate on production-grade AI models, robotics control systems, or consulting opportunities.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Column: Contact info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:w-1/3 flex flex-col justify-between"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Direct Contact</h3>
                <p className="text-lg font-bold text-dark mb-1">zacchaeus@praxisai.com</p>
                <p className="text-sm text-slate-500">For business inquiries and consulting</p>
              </div>

              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Location</h3>
                <p className="text-lg font-bold text-dark mb-1">Lagos, Nigeria</p>
                <p className="text-sm text-slate-500">Available for remote contracts globally</p>
              </div>

              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Praxis AI</h3>
                <p className="text-lg font-bold text-dark mb-1">praxisai.com</p>
                <p className="text-sm text-slate-500">Enterprise Small Language Model fine-tuning</p>
              </div>
            </div>

            <div className="mt-12 md:mt-0">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Connect</h3>
              <div className="flex gap-4">
                <a className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-600 hover:text-primary shadow-sm border border-slate-200/60 font-bold transition-all" href="#" onClick={(e) => e.preventDefault()}>in</a>
                <a className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-600 hover:text-primary shadow-sm border border-slate-200/60 font-bold transition-all" href="#" onClick={(e) => e.preventDefault()}>gh</a>
                <a className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-600 hover:text-primary shadow-sm border border-slate-200/60 font-bold transition-all" href="#" onClick={(e) => e.preventDefault()}>x</a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="md:w-2/3"
          >
            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 p-8 md:p-12 relative">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6 text-emerald-600">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-black text-slate-800 mb-2">Message Sent!</h3>
                  <p className="text-slate-500 text-sm max-w-sm">
                    Thank you for reaching out. Zacchaeus will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Your Name *</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Olabode Zacchaeus"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Your Email *</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@address.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Subject</label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project collaboration, consulting request..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message *</label>
                    <textarea 
                      name="message"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your project, timeline, or consultation needs..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none transition-all"
                    />
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    className="w-full bg-primary text-white py-4 rounded-full text-sm font-bold hover:bg-blue-800 transition-colors shadow-lg flex items-center justify-center gap-2 mt-4"
                  >
                    SEND MESSAGE
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
