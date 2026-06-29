import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Stack from './components/Stack';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 antialiased font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
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
