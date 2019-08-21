import React from 'react';
import PropTypes from 'prop-types';
import PageContent from '../../templates/pageContent';

const PagePreview = ({ entry }) => {
  return (
    <>
      <h1 className="cms-preview__title">Preview:</h1>
      <PageContent
        data={{
          title: entry.getIn(['data', 'title']),
          subtitle: entry.getIn(['data', 'subtitle']),
          img_path: entry.getIn(['data', 'img_path']),
          fullname: {
            firstname: entry.getIn(['data', 'fullname', 'firstname']),
            middlename: entry.getIn(['data', 'fullname', 'middlename']),
            lastname: entry.getIn(['data', 'fullname', 'lastname']),
          },
          html: entry.getIn(['data', 'body']),
        }}
      />
    </>
  );
};

PagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default PagePreview;
