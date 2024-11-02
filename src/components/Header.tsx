// src/components/Header.tsx
import { motion } from 'framer-motion';
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link href="/" className="text-2xl font-bold">Naveen Siva</Link>
          </motion.div>
          <nav className="flex gap-8">
            {['About', 'Academics', 'Hobbies', 'Contact'].map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-gray-900 transition-colors">
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
