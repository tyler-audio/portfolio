import React from 'react';

import AppsCard from './AppsCard';
import projectData from '../lib/projectData.js';

const AppsCardList = () => {
  const projects = Object.keys(projectData);

  return (
    <div className="apps_list" id="apps_list">
      {projects.map((p) => (
        <AppsCard project={p} key={p}/>
      ))}
    </div>
  );
};

export default AppsCardList;