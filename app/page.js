import ClientsSection from '@/components/ClientsSection';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Copyright from '@/components/Copyright';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Services from '@/components/Services';

export default function Home() {
  return (
    <section className="">
      <Header />
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <ClientsSection />
      <Contact />
      <Footer />
      <Copyright />
    </section>
  );
}
