import React from 'react';
import { PageProps } from 'gatsby';
import styled from 'styled-components';

import styles from '../styles';

import Copy from '../components/About/Copy/Copy';
import Partners from '../components/About/Partners/Partners';
import ContactUs from '../components/Contact/Contact';

const Title = styled.h1`
  font-size: ${styles.font[4]};
`;

const AboutUs: React.FC<PageProps> = () => {
  return (
    <main className="mt-5">
      <Title>About</Title>
      <Copy />
      <Partners />
      <ContactUs />
    </main>
  );
};

export default AboutUs;
