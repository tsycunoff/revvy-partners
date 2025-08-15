
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Partners from './components/Partners';
import Benefits from './components/Benefits';
import Calculator from './components/Calculator';
import WhoIsItFor from './components/WhoIsItFor';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Partners />
        <Calculator />
        <Benefits />
        <WhoIsItFor />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;
