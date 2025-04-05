import React from 'react';
import ccna from '../../assets/ccna.png';
import lewagon from '../../assets/lewagon.png';
import googlecert from '../../assets/googlecert.png';
import comptiasec from '../../assets/comptiasec.png';
import './CertificationsSection.css';

const certifications = [
  { image: ccna, link: 'https://example.com/certification1' },
  { image: comptiasec, link: 'https://example.com/certification4' },
  { image: googlecert, link: 'https://example.com/certification3' },
  { image: lewagon, link: 'https://example.com/certification2' },
];

const CertificationsSection = () => {
  return (
    <section className="certifications-section">
      {certifications.map((cert, index) => (
        <a
          key={index}
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={cert.image}
            alt={`Certification ${index + 1}`}
            className="certification"
          />
        </a>
      ))}
    </section>
  );
};

export default CertificationsSection;
