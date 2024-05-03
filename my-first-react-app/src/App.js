import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import HadithContent from './components/HadithContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Header />
      <Navigation />
      <HadithContent />
      <Footer />
    </div>
  );
}

export default App;


