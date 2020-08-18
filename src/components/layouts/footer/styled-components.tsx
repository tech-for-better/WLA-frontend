import styled from 'styled-components';
import { Link } from 'gatsby';
import styles from '../../../styles';

export const StyledFooter = styled.footer`
  padding: 2em;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 1fr;
  background-color: ${styles.grey};
  color: #fff;

  @media only screen and (max-width: ${styles.breakpoint}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto 1fr;
  }
`;

export const FirstSection = styled.section``;

export const Logo = styled.img`
  width: 5em;
  max-width: 50%;
  height: auto;
`;

export const Separator = styled.div`
  width: 1px;
  // there is padding
  height: 100%;
  background-color: #fff;
  margin: 0 1em;

  @media only screen and (max-width: ${styles.breakpoint}) {
    width: 100%;
    height: 1px;
    margin: 1em 0;
  }
`;

export const SecondSection = styled.section`
  display: flex;
`;

const linkStyling = `
display: block;
color: #fff;
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
  /* display: flex;
flex-direction: column;
justify-content: space-around; */
`;
