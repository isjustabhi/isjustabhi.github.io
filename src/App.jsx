import ParticleBackground from './components/ParticleBackground';
import CursorGlow from './components/CursorGlow';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import StatsStrip from './components/StatsStrip';
import About from './components/About';
import Experience from './components/Experience';
import ProjectSpotlight from './components/ProjectSpotlight';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AiChat from './components/AiChat';
import Divider from './components/Divider';

export default function App() {
  return (
    <div className="relative min-h-screen bg-surface-dark text-text-primary noise-overlay">
      <ParticleBackground />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <TechMarquee />
        <StatsStrip />
        <Divider />
        <About />
        <Divider />
        <Experience />
        <Divider />
        <ProjectSpotlight />
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
