import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from './nav/Nav';
import Footer from './footer/Footer';

export default function Layout({ children }) {
  return (
    <Container fluid="xl" className="mt-3">
      <Nav />
      <div>{children}</div>
      <Footer />
    </Container>
  );
}
