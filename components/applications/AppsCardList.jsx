import React from 'react';

import AppsCard from './AppsCard';

const AppsCardList = () => {
  let test = ['Grimtomb', 'Fulcrum', 'Catwalk', 'Neighbr'];

  return (
    <div className="apps-list" id="apps-list">
      {test.map((project) => (
        <AppsCard project={project}/>
      ))}
    </div>
  );
};

export default AppsCardList;