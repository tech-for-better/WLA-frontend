import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as SC from './styled-components';

type page = {
  link: string;
  name: string;
};

const InternalLinks: React.FC<{}> = () => {
  const pages = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          footerLinks {
            link
            name
          }
        }
      }
    }
  `);

  const pagesData = pages?.site?.siteMetadata?.footerLinks;
  const newPages = pagesData.map((page: page) => (
    <SC.ExternalLink key={page.name} href={page.link}>
      {page.name}
    </SC.ExternalLink>
  ));
  return <SC.LinksList>{newPages}</SC.LinksList>;
};

export default InternalLinks;
