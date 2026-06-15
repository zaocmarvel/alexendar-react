import { motion } from 'framer-motion';

export default function Portfolio({ onBack }) {
  const projects = [
    {
      title: "LLM Fine-Tuning Dashboard",
      description: "Designed a fine-tuning platform for training and validating small language models, reducing business compute costs by 60%.",
      tags: ["PyTorch", "LLaVA", "Transformers", "NLP"],
      cover: "/llama_finetune.jpg"
    },
    {
      title: "Vision-Language Detection",
      description: "Built a spatial multimodal model that performs visual grounding and real-time bounding box detection across custom classes.",
      tags: ["C++", "CUDA", "TensorRT", "Computer Vision"],
      cover: "/vision_grounding.jpg"
    },
    {
      title: "Robotics PPO Controller",
      description: "Developed a deep reinforcement learning policy utilizing PPO for precise trajectory path planning of robotic systems.",
      tags: ["Python", "OpenAI Gym", "PyBullet", "RL"],
      cover: "/ppo_robotics.jpg"
    }
  ];

  const skills = [
    "PyTorch", "TensorFlow", "JAX", "Python", "C++", "CUDA",
    "LLMs", "Transformers", "RLHF", "TensorRT", "Git", "Docker"
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-12 max-w-5xl">
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
          <h1 className="text-5xl font-black text-dark mb-4 tracking-tight">PORTFOLIO</h1>
          <p className="text-slate-500 text-lg max-w-xl">
            Selected machine learning projects and core engineering competencies by Zacchaeus.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16 bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100"
        >
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Core Competencies</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span 
                whileHover={{ scale: 1.05, backgroundColor: "#1D1A8F", color: "#FFF" }}
                key={index}
                className="px-4 py-2 bg-slate-50 text-slate-700 text-xs font-bold rounded-full border border-slate-100 cursor-default transition-colors duration-200"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx + 0.3 }}
              whileHover={{ y: -6, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
              className="bg-white p-6 rounded-[2rem] shadow-lg border border-slate-100 flex flex-col justify-between overflow-hidden"
            >
              <div>
                <img 
                  alt={project.title} 
                  className="w-full h-48 object-cover rounded-2xl mb-6 shadow-sm border border-slate-50"
                  src={project.cover}
                />
                <h3 className="text-xl font-bold text-dark mb-3">{project.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-2.5 py-1 bg-indigo-50 text-primary text-[10px] font-bold rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
