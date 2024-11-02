// src/components/Academics.tsx
import { motion } from 'framer-motion';

export function Academics() {
  return (
    <section id="academics" className="pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <h2 className="text-4xl font-bold mb-8">Academics</h2>
        <p className="text-lg text-gray-700">
          {/* Your academic background goes here */}
          I hold a Bachelor's degree in Computer Science from XYZ University, where I specialized in software engineering and data analysis. During my studies, I participated in various projects that honed my skills in full-stack development and machine learning.
        </p>
      </motion.div>
    </section>
  );
}
