import React from 'react';
import Nav from '../nav';
import Footer from './footer/Footer';

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
        {children}
      </div>
      <Footer />
    </>
  );
}
