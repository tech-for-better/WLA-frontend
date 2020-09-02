import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import * as SC from './styled-components';
import { mediaQuery } from '../../../styles';
import footerDecoration from '../../../assets/footerDecoration.png';

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
const FooterLinksDecor = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  ${mediaQuery(`{
    flex-direction: column;
    align-items: center;
  }`)}
`;

const Image = styled.img`
  height: 50%;
  width: auto;
  align-self: flex-end;
`;

const InternalLinks: React.FC<{}> = () => {
  const pages = useStaticQuery(graphql`
    query {
      allSitePage(
        sort: { fields: path, order: ASC }
        filter: { pluginCreator: { name: { eq: "gatsby-plugin-page-creator" } } }
      ) {
        edges {
          node {
            path
          }
        }
      }
    }
  `);

  const newPages = pages?.allSitePage?.edges?.reduce(reducer, []);
  return (
    <FooterLinksDecor>
      <SC.LinksList>{newPages}</SC.LinksList>
    </FooterLinksDecor>
  );
};

export default InternalLinks;
