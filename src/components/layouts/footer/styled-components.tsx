import styled from 'styled-components';
import { Link } from 'gatsby';
import styles, { mediaQuery } from '../../../styles';

export const StyledFooterBox = styled.div`
  padding: 2em;
  background-color: ${styles.darkGrey};
  background-image: url(https://res.cloudinary.com/dza4tzyey/image/upload/v1599041415/footerDecoration_nghnmz.png);
  background-repeat: no-repeat;
  background-position: 80% 70%;
  background-size: 7%;
  color: #fff;
`;

export const StyledFooterContent = styled.footer`
  max-width: ${styles.breakpoints.desktopMainWidth};
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 1fr;
  margin: 0 auto;
  ${mediaQuery(`{
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto 1fr;
  }`)}
`;

export const FirstSection = styled.section`
  display: flex;
  justify-content: flex-end;
`;

export const Logo = styled.img`
  width: auto;
  height: 1em;
  margin-right: 1em;
`;

export const Strapline = styled.h3`
  margin-top: 0;
  color: #fff;
  font-size: ${styles.font[1]};
`;

export const Details = styled.p`
  color: #fff;
  font-size: ${styles.font[0]};
`;

export const Separator = styled.div`
  width: 1px;
  // there is padding, so 100% is sufficiently small
  height: 100%;
  background-color: #fff;
  margin: 0 1em;

  ${mediaQuery(`
  {
    width: 100%;
    height: 1px;
    margin: 1em 0;
  }
  `)}
`;

export const SecondSection = styled.section`
  display: flex;

  ${mediaQuery(`
  justify-content: space-around;
  `)}
`;

const linkStyling = `
display: block;
color: #fff;
margin: 1em 0;
font-size: ${styles.font[0]};
:hover {
  color: #fff;
}
`;

export const InternalLink = styled(Link)`
  ${linkStyling}
`;

export const ExternalLink = styled.a`
  ${linkStyling}
`;

export const LinksList = styled.div`
  margin-left: 2em;
`;
