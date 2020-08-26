import React from 'react';
import { PageProps } from 'gatsby';
import Contact from '../components/Contact/Contact';

const ContactUs: React.FC<PageProps> = () => {
  return (
    <main className="mt-5">
      <h1>Contact Us</h1>
      <Contact />
    </main>
  );
};

export default ContactUs;
