import React, { useEffect } from 'react';
import Navbar from '../Navbar/ Navbar.jsx';
import './Hero.css';

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const heroWrapper = document.querySelector('.hero-wrapper');
      if (!heroWrapper) return;

      // Get the fixed navbar height.
      const navbar = document.querySelector('.navbar');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;

      // Calculate scroll progress within the hero-wrapper.
      const start = heroWrapper.offsetTop - navbarHeight;
      const effectScrollDistance = heroWrapper.offsetHeight - window.innerHeight;
      const scrollY = window.scrollY;
      const scrollProgress = Math.min(1, Math.max(0, (scrollY - start) / effectScrollDistance));

      // Reveal each letter individually based on its threshold.
      const letters = document.querySelectorAll('.hero h1 span');
      letters.forEach((letter, index) => {
        const threshold = (index + 1) / letters.length;
        if (scrollProgress >= threshold) {
          letter.classList.add('visible');
        } else {
          letter.classList.remove('visible');
        }
      });

      const paragraph = document.querySelector('.hero p');
      if (scrollProgress >= 0.95) {
        paragraph.classList.add('visible');
      } else {
        paragraph.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const text = "Dan.";
  return (
    <>
      <div className="hero-wrapper">
        <Navbar/>
        <section className="hero">
          <div className="hero-content">
            <h1>
              {text.split('').map((letter, index) => (
                <span key={index} className="letter">{letter}</span>
              ))}
            </h1>
            <p>CyberSecurity Analyst</p>
          </div>
        </section>
      </div>
    </>
  );

};

export default Hero;
