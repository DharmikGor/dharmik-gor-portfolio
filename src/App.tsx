import About from './components/About';
import Blog from './components/Blog';
import Certifications from './components/Certifications';
import ComplexCommerce from './components/ComplexCommerce';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Navbar from './components/Navbar';
import Process from './components/Process';
import Projects from './components/Projects';
import Services from './components/Services';
import ShopifyExpertise from './components/ShopifyExpertise';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Timeline from './components/Timeline';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-paper">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-paper"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <ShopifyExpertise />
        <Services />
        <ComplexCommerce />
        <Highlights />
        <Process />
        <Projects />
        <Testimonials />
        <Certifications />
        <Blog />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
