import { Hero } from './components/Hero';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Experience } from './components/Experience';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      <Hero />
      <About />
      <Menu />
      <WhyChooseUs />
      <Experience />
      <Testimonials />
      <Footer />
    </div>
  );
}