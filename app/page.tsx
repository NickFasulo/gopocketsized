import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Stack from './components/Stack';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen text-black antialiased font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
