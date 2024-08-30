import ContactDetails from '@/components/ContactDetails';
import Copyright from '@/components/Copyright';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Image from 'next/image';

export default function Home() {
  return (
    <section className="">
      <ContactDetails />
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Footer />
      <Copyright />
    </section>
  );
}
