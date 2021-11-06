import React from 'react';

const Links = () => {
  let social = ['contact me', 'github', 'linkedin', 'soundcloud?']

  return (
    <div>
      {social.map((link) => (
        <div>{link}</div>
      ))}
    </div>
  );
};

export default Links;