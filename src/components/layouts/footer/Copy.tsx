import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as SC from './styled-components';

const Copy: React.FC<{}> = () => {
  const copy = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          about {
            details
            strapline
          }
        }
      }
    }
  `);
  const { strapline, details } = copy?.site?.siteMetadata?.about;

  return (
    <article>
      <SC.Strapline>{strapline}</SC.Strapline>
      <SC.Details>{details}</SC.Details>
    </article>
  );
};

export default Copy;
