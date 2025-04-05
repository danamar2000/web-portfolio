import React, { useState } from 'react';
import './Projects.css';

const projectsData = [
  {
    title: "Intrusion Detection System",
    description: "Monitors network traffic for suspicious activities.",
    gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHRuaTltcTdocnliNGM0NWI2ZTB6N2g0NDVtdzNsNXRsaDUwcjNzNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L08MwsmqXmgZMnEGlK/giphy.gif"
  },
  {
    title: "Phishing Email Analyzer",
    description: "Analyzes email content to detect phishing attempts.",
    gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXd3cmNwNGp3cm9vM3M4MXVhNTkyZnF5Nml1b2c1bzdiZDNocGkxdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6gaX6yUMJTxC9Uc0/giphy.gif"
  },
  {
    title: "Vulnerability Scanner",
    description: "Scans networks for potential vulnerabilities.",
    gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDJjMm96ejZhYWR6NmduemQ2d2d2b2N5Zjg3cDdwNXQwMXpsMmhxOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oywAAgve575b0CQvmK/giphy.gif"
  },
  {
    title: "Malware Analysis Sandbox",
    description: "Isolates and analyzes suspicious files safely.",
    gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmVjcHQ0cGRpanI5Mjg2ZTN6cmg1engxNGQ4OWIxMW9ucTNjbmFvOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/j9YYHiYjVx8FFbN4D3/giphy.gif"
  },
  {
    title: "Security Incident Dashboard",
    description: "Real-time visualization of security events.",
    gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzJuMmowOHhwc3A0N3QwN2t1bXNweGVlMGs0NHV0eXRmb3pxdjA4dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l1J9M9PGxWSIVCWju/giphy.gif"
  },
  {
    title: "Encryption Tool",
    description: "Encrypts data using industry-standard algorithms.",
    gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjVwdGc2eTVrZzBtOGNtY3hzNHFqbGl5MWo2NnNoaHl1ajN3a3AzciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BT7Xkd41FAtJIGLL3R/giphy.gif"
  },
  {
    title: "SIEM Integration",
    description: "Aggregates and analyzes logs from various sources.",
    gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNW5ucHh5azFmcXNkMmhzYTMxc2dtcnljZTA0czk1aG5vNzllZjJrOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QpVUMRUJGokfqXyfa1/giphy.gif"
  },
  {
    title: "Penetration Testing Framework",
    description: "Automated toolkit for assessing system vulnerabilities.",
    gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmh4Y2huMjdrcXE4b2owdXBjOGdlZnhtMGw5azZ1bDZ2eDZqeTV1YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JIX9t2j0ZTN9S/giphy.gif"
  },
  {
    title: "Firewall Configuration Manager",
    description: "Manages and optimizes firewall rules.",
    gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWFmanJkOW8wbWoyb2xnamIxcjBsdHpiZ2YxenY4ejk4dG40d3g5bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/V4NSR1NG2p0KeJJyr5/giphy.gif"
  }
];

const Projects = () => {
  const visibleProjects = 3;
  const maxIndex = Math.max(projectsData.length - visibleProjects, 0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <div className="carousel-container">
        <button
          className="arrow left-arrow"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          &#8249;
        </button>
        <div className="carousel-wrapper">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${(100 / visibleProjects) * currentIndex}%)`
            }}
          >
            {projectsData.map((project, index) => (
              <div key={index} className="project-item">
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <img src={project.gif} alt={`${project.title} gif`} />
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="arrow right-arrow"
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Projects;
