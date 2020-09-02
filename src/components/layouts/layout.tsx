import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Nav from './nav/Nav';
import Footer from './footer/Footer';
import styles from '../../styles';

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled(Container)`
  flex-grow: 1;
  max-width: ${styles.breakpoints.desktopMainWidth};
  margin: 0 auto;
  padding: 0;
`;

export default function Layout({ children }) {
  return (
    <Page>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Skills West London</title>
      </Helmet>
      <Main fluid="xl" className="mt-3">
        <Nav />
        <div>{children}</div>
      </Main>
      <Footer />
    </Page>
  );
}
