import React from 'react';

const Links = () => {
  let social = ['github', 'linkedin', 'soundcloud'];

  return (
    <div id="links">
      <a href="" className="social_link" id="contact_btn">
        Contact Me
      </a>

      <a
        href="https://www.linkedin.com/in/tyler-jones-audio/"
        target="_blank"
        rel="noopener noreferrer"
        className="social_link"
        id="linkedin_btn"
      >
        LinkedIn
      </a>

      <a
        href="https://github.com/tyler-audio"
        target="_blank"
        rel="noopener noreferrer"
        className="social_link"
        id="github_btn"
      >
        Github
      </a>
    </div>
  );
};

export default Links;