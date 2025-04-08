import './Contact.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';

const ContactMe = () => {

  return (
    <div className="contact-wrapper">
      <span className="chat-button">
        Let's chat!
      </span>
      <div className={`contact-info ${open ? 'open' : ''}`}>
        <div className="contact-icons">
          <a
            href="https://github.com/danamar2000"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FaGithub className="contact-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/dan-amar-8b0806234"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin className="contact-icon" />
          </a>
          <a href="mailto:danamar2001@gmail.com" title="Email">
            <FiMail className="contact-icon" />
          </a>
          <a href="tel:+14385023094" title="Phone">
            <FiPhone className="contact-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
