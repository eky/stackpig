import React from 'react';
import PropTypes from 'prop-types';

import {
  markdownify,
  safePrefix,
} from '../utils';

const parseValue = (value) => {
  let parsedValue = {};
  try {
    parsedValue = JSON.parse(value);
  } catch (error) {
    console.warn(error);
  }

  return parsedValue;
};

const PageContent = ({
  data: {
    title,
    subtitle,
    img_path,
    html,
    fullname,
  }
}) => {
  const { firstname, middlename, lastname } = parseValue(fullname);
  return (
    <section id="main" className="wrapper style1">
      <div className="inner">
        <header className="major">
          <h1>{title}</h1>
          {markdownify(subtitle)}
        </header>
        { firstname && lastname &&
          <p>{`First: ${firstname}, middle: ${middlename || '-'}, lastname: ${lastname}`}</p>
        }
        {img_path &&
          <span className="image main"><img src={safePrefix(img_path)} alt="" /></span>
        }
        {markdownify(html)}
      </div>
    </section>
  );
};

PageContent.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    img_path: PropTypes.string,
    html: PropTypes.string,
    fullname: PropTypes.string,
  })
};

export default PageContent;
