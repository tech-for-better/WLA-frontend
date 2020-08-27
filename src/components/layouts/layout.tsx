import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import Nav from './nav/Nav';
import Footer from './footer/Footer';

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled(Container)`
  flex-grow: 1;
`;

export default function Layout({ children }) {
  return (
    <Page>
      <Main fluid="xl" className="mt-3">
        <Nav />
        <div>{children}</div>
      </Main>
      <Footer />
    </Page>
  );
}
