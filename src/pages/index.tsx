import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';
import Courses from '@/components/Courses';
import CallToAction from '@/components/CallToAction';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Courses />
      <Testimonials />
      <CallToAction />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;