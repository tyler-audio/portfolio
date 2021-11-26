import { useRouter } from 'next/router'

// import projectData from '/lib/projectData';

const project = () => {
  const router = useRouter();
  const title = router.query.title;
  // const project = projectData[title];

  return (
    <div>{title}</div>
  )
};

export default project;