import React from 'react';

const Links = () => {
  let social = ['github', 'linkedin', 'soundcloud'];

  return (
    <div>
      <a href="">
        <button className="social-link" id="contact-btn">Contact Me</button>
      </a>

      <a
        href="https://www.linkedin.com/in/tyler-jones-audio/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="social-link">LinkedIn</button>
      </a>

      <a
        href="https://github.com/tyler-audio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="social-link">Github</button>
      </a>
    </div>
  );
};

export default Links;