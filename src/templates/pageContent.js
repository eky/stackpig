import React from 'react';
import PropTypes from 'prop-types';

import {
  markdownify,
  safePrefix,
} from '../utils';

const PageContent = ({
  data: {
    title,
    subtitle,
    img_path,
    html,
    fullname: {
      firstname,
      middlename,
      lastname,
    },
  }
}) => (
  <section id="main" className="wrapper style1">
    <div className="inner">
      <header className="major">
        <h1>{title}</h1>
        {markdownify(subtitle)}
      </header>
      <p>{`First: ${firstname}, middle: ${middlename || '-'}, lastname: ${lastname}`}</p>
      {img_path &&
        <span className="image main"><img src={safePrefix(img_path)} alt="" /></span>
      }
      {markdownify(html)}
    </div>
  </section>
);

PageContent.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    img_path: PropTypes.string,
    html: PropTypes.string,
    fullname: PropTypes.shape({
      firstname: PropTypes.string,
      middlename: PropTypes.string,
      lastname: PropTypes.string,
    }),
  })
};

export default PageContent;
