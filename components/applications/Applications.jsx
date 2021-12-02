import React from 'react';

import AppsCardList from './AppsCardList';
import ScrollBtn from './ScrollBtn';

const Applications = () => {
  return (
    <section className="apps_wrapper" id="apps">
      <div id="apps_items">
        <h1 id="apps_title">
          Projects
        </h1>
        <AppsCardList />
      </div>
      <ScrollBtn />
    </section>
  );
};

export default Applications;