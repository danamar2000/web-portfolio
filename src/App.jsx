import React from 'react';
import Hero from './components/Hero/Hero.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import Competencies from './components/Competencies/Competencies.jsx';
import CertificationsSection from './components/CertificationsSection/CertificationsSection.jsx';

function App() {

  return (
    <div className="App">
      <Hero />
      <AboutMe />
      <CertificationsSection/>
      <Competencies />
    </div>
  );
}

export default App;
