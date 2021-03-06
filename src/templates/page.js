import React from 'react';
import _ from 'lodash';

import { Layout } from '../components/index';

import PageContent from './pageContent';

const Page = props => (
  <Layout {...props}>
    <PageContent
      data={{
        title: _.get(props, 'pageContext.frontmatter.title'),
        subtitle: _.get(props, 'pageContext.frontmatter.subtitle'),
        img_path: _.get(props, 'pageContext.frontmatter.img_path'),
        fullname: _.get(props, 'pageContext.frontmatter.fullname'),
        html: _.get(props, 'pageContext.html'),
      }}
    />
  </Layout>
);

export default Page;
