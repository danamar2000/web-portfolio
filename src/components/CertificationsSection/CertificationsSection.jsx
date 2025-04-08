import React from 'react';
import ccna from '../../assets/ccna.png';
import lewagon from '../../assets/lewagon.png';
import googlecert from '../../assets/googlecert.png';
import comptiasec from '../../assets/comptiasec.png';
import './CertificationsSection.css';

const certifications = [
  { image: ccna, link: 'https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html' },
  { image: comptiasec, link: 'https://www.comptia.org/certifications/security' },
  { image: googlecert, link: 'https://grow.google/certificates/en_ca/cybersecurity/?utm_source=google&utm_medium=paidsearch&utm_campaign=ha-sem-bk-cs-exa__geo%E2%80%94CA&utm_term=cyber%20security%20google&gad_source=1&gclid=CjwKCAjwktO_BhBrEiwAV70jXqz-esD2V4MJR7rKiN4rJch2so9HKtLB-eJc8D8OyxjP-1Ee8UktxxoCRfoQAvD_BwE&gclsrc=aw.ds' },
  { image: lewagon, link: 'https://info.lewagon.com/fr-ca/decouvrez-nos-formations?utm_term=montreal&utm_term=le%20wagon&utm_campaign=Le+Wagon+CA+FR+-+Branding&utm_source=adwords&utm_medium=ppc&hsa_acc=6194767241&hsa_cam=20064194142&hsa_grp=162655560201&hsa_ad=691347093829&hsa_src=g&hsa_tgt=kwd-302815298328&hsa_kw=le%20wagon&hsa_mt=e&hsa_net=adwords&hsa_ver=3&utm_content=download_syllabus|contact_form_calendly|apply&gad_source=1&gclid=CjwKCAjwktO_BhBrEiwAV70jXidl4CXYMNd4DgIzgIjX1z_jydILghY9V4i8CHvaQQuuriv3JKvD1hoCwqcQAvD_BwE' },
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
