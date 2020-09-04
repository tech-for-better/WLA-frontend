import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import * as SC from './styled-components';
import styles, { mediaQuery } from '../../../styles';

const FooterLinksDecor = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  ${mediaQuery(`{
    flex-direction: column;
    align-items: center;
  }`)}
`;

const InternalLink = styled(Link)`
  display: block;
  color: #fff;
  margin: 1em 0;
  font-size: ${styles.font[0]};
  :hover {
    color: #fff;
  }
`;

const InternalLinks: React.FC<{}> = () => {
  return (
    <FooterLinksDecor>
      <SC.LinksList>
        <InternalLink to="/" className="nav-link">
          Home
        </InternalLink>
        <InternalLink to="/course-search/" className="nav-link">
          Search courses
        </InternalLink>

        <InternalLink to="/career-paths/" className="nav-link">
          Career paths
        </InternalLink>

        <InternalLink to="/about-us/" className="nav-link">
          About us
        </InternalLink>

        <InternalLink to="/contact-us/" className="nav-link">
          Contact us
        </InternalLink>
      </SC.LinksList>
    </FooterLinksDecor>
  );
};

export default InternalLinks;
