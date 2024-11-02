// src/components/About.tsx
import { motion } from 'framer-motion';
import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <div className="flex items-center">
          <Image
            src="/images/profile.jpg"
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full mr-8"
          />
          <p className="text-lg text-gray-700">
            {/* Your bio goes here */}
            Hello! I'm Naveen Siva, a software developer with a passion for creating dynamic and user-friendly web applications. With a background in computer science and experience in various programming languages, I enjoy solving complex problems and continuously learning new technologies.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
