import React, { Fragment } from 'react';

const About = () => {
  return (
    <Fragment>
      <h2>אודות</h2>
      <p>אפליקציה לחיפוש משתמשים בגיטהאב.</p>
      <p>
        נבנתה באמצעות React על ידי{' '}
        <a href="https://github.com/obrm" target="_blank">
          אורי ברעם
        </a>
        .{' '}
      </p>
      <p>גרסה: 1.0.0</p>
    </Fragment>
  );
};

export default About;
