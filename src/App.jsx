import FuturisticBg from './components/FuturisticBg';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AiChat from './components/AiChat';

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg text-ink">
      <FuturisticBg />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Publications />
        <Contact />
      </main>
      <Footer />
      <AiChat />
    </div>
  );
}
