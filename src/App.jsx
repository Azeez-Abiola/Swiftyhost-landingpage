import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import GoogleCloudSection from './components/GoogleCloudSection';
import Features2 from './components/Features2';
import ComparisonTable from './components/ComparisonTable';
import Map from './components/Map';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <GoogleCloudSection />
      <Pricing />
      <Features2 />
      <ComparisonTable/>
      <Testimonials />
      <Map/>
      <Footer />
    </div>
  );
}

export default App;