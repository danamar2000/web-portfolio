import React from "react";
import "./Competencies.css";
import Challenge from "../Challenge/Challenge.jsx";
import Contact from "../Contact/Contact.jsx";

const Competencies = () => {
  return (
    <div className="large-container">
      <div className="competencies">
        <div className="category-container">
          <div className="category-title">Cyber Security</div>
          <div className="category-skills">
            Vulnerability Assessment, Threat Analysis, Incident Response, SIEM
            Tools, Network Security, Firewall Implementation
          </div>
        </div>
        <div className="category-container">
          <div className="category-title">Web Design</div>
          <div className="category-skills">
            Front-end Development, Back-end Development, Responsive Design &
            Agile Methodologies, UX/UI, Adobe XD, Shopify
          </div>
        </div>
        <div className="category-container">
          <div className="category-title">Programming & Automation</div>
          <div className="category-skills">
            Python, JavaScript, Shell Scripting, CI/CD, Debugging, Automation
            Tools
          </div>
        </div>
        <div className="category-container">
          <div className="category-title">Networking</div>
          <div className="category-skills">
            Routing & Switching, TCP/IP, VPN, Wireless, Network Monitoring,
            Configuration
          </div>
        </div>
      </div>
      <Challenge />
      <Contact />
    </div>
  );
};

export default Competencies;
