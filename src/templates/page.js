import React from 'react';
import _ from 'lodash';

import { Layout } from '../components/index';

import PageContent from './pageContent';

export default class Page extends React.Component {
  render() {
    return (
      <Layout {...this.props}>
        <PageContent
          data={{
            title: _.get(this.props, 'pageContext.frontmatter.title'),
            subtitle: _.get(this.props, 'pageContext.frontmatter.subtitle'),
            img_path: _.get(this.props, 'pageContext.frontmatter.img_path'),
            html: _.get(this.props, 'pageContext.html'),
          }}
        />
      </Layout>
    );
  }
}
