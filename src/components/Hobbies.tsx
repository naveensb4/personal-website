// src/components/Hobbies.tsx
import { motion } from 'framer-motion';
import Image from 'next/image';

export function Hobbies() {
  const hobbies = [
    { name: 'Photography', image: '/images/hobby1.jpg' },
    { name: 'Traveling', image: '/images/hobby2.jpg' },
    // Add more hobbies as needed
  ];

  return (
    <section id="hobbies" className="pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <h2 className="text-4xl font-bold mb-8">Hobbies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {hobbies.map((hobby) => (
            <div key={hobby.name} className="text-center">
              <Image
                src={hobby.image}
                alt={hobby.name}
                width={300}
                height={200}
                className="rounded-lg mb-4"
              />
              <p className="text-lg text-gray-700">{hobby.name}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
