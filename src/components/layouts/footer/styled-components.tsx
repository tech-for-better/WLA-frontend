import styled from 'styled-components';
import { Link } from 'gatsby';
import styles from '../../../styles';

export const StyledFooter = styled.footer`
  padding: 2em;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  background-color: ${styles.grey};
  color: #fff;

  @media only screen and (max-width: ${styles.breakpoint}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const FirstSection = styled.section``;

export const Logo = styled.img`
  width: 5em;
  max-width: 50%;
  height: auto;
`;

export const SecondSection = styled.section`
  display: flex;
`;

export const BlockLink = styled(Link)`
  display: block;
  color: #fff;
  font-size: ${styles.font[0]};
`;

export const LinksList = styled.div`
  margin-left: 2em;
  /* display: flex;
flex-direction: column;
justify-content: space-around; */
`;
