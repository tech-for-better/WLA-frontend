import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as SC from './styled-components';

const getName = (path) => {
  if (path === `/`) {
    return `Home`;
  }
  return path.replace(/-/g, ` `).replace(/\//g, ``);
};

const reducer = (arr, page) => {
  const path = page?.node?.path;
  if (path.includes(`404`)) {
    return arr;
  }

  return [...arr, <SC.InternalLink to={path}>{getName(path)}</SC.InternalLink>];
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
