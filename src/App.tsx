import React from 'react';
import bgImage from './assets/Background.png';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { CounterProvider } from './context/CounterProvider';

function App() {
  return (
    <CounterProvider>
      <div 
        className="min-h-screen overflow-x-hidden bg-cover bg-center bg-fixed bg-no-repeat relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <Preloader />
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Projects />
          <About />
          <Process />
          <Contact />
        </main>
        <Footer />
      </div>
    </CounterProvider>
  );
}

export default App;
