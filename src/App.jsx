import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AiChat from './components/AiChat';
import Divider from './components/Divider';

export default function App() {
  return (
    <div className="relative min-h-screen bg-surface-dark text-text-primary">
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <Skills />
        <Divider />
        <Contact />
      </main>
      <Footer />
      <AiChat />
    </div>
  );
}
