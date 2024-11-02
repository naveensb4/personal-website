// src/pages/index.tsx
import { Header } from '@/components/Header';
import { About } from '@/components/About';
import { Academics } from '@/components/Academics';
import { Hobbies } from '@/components/Hobbies';
import Contact from '@/components/Contact';

const Home = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <section id="about" className="section">
        <About />
      </section>
      <section id="academics" className="section">
        <Academics />
      </section>
      <section id="hobbies" className="section">
        <Hobbies />
      </section>
      <section id="contact" className="section">
        <Contact />
      </section>
    </main>
  );
};

export default Home;
