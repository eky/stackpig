import React from 'react';

import {markdownify, safePrefix, htmlToReact} from '../utils';

const PageContent = ({
  data: {
    title,
    subtitle,
    img_path,
    html,
  }
}) => (
  <section id="main" className="wrapper style1">
    <div className="inner">
      <header className="major">
        <h1>{title}</h1>
        {markdownify(subtitle)}
      </header>
      {img_path &&
        <span className="image main"><img src={safePrefix(img_path)} alt="" /></span>
      }
      {htmlToReact(html)}
    </div>
  </section>
);

export default PageContent;
