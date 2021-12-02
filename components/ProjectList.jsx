import React from 'react';
import ProjectCard from './ProjectCard';
import projectData from '../lib/projectData.js';

const ProjectList = () => {
  const projects = Object.keys(projectData);

  return (
    <div className="project_list">
      {projects.map((p) => (
        <ProjectCard
          project={p}
          key={p}
          info={projectData[p]}
        />
      ))}
    </div>
  );
};

export default ProjectList;