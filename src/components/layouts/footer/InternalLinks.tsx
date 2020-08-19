import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as SC from './styled-components';

type page = {
  node: {
    path: string;
  };
};

const getName = (path: string) => {
  if (path === `/`) {
    return `Home`;
  }
  return path.replace(/-/g, ` `).replace(/\//g, ``);
};

const reducer = (arr: Element[], page: page) => {
  const path = page?.node?.path;
  if (path.includes(`404`)) {
    return arr;
  }
  const name = getName(path);
  return [
    ...arr,
    <SC.InternalLink key={name} to={path}>
      {name}
    </SC.InternalLink>,
  ];
};

const InternalLinks: React.FC<{}> = () => {
  const pages = useStaticQuery(graphql`
    query {
      allSitePage {
        edges {
          node {
            path
          }
        }
      }
    }
  `);

  const newPages = pages?.allSitePage?.edges?.reduce(reducer, []);
  return <SC.LinksList>{newPages}</SC.LinksList>;
};

export default InternalLinks;
