import styled from 'styled-components';
import { Link } from 'gatsby';

export const InvisibleLink = styled(Link)`
  color: inherit;
  :hover,
  :focus {
    color: inherit;
    text-decoration: none;
  }
`;

export const cardShadow = `0px 0px 14px -3px rgba(0, 0, 0, 0.5)`;
