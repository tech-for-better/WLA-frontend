import React from 'react';
import { PageProps } from 'gatsby';
import PageBackground from '../components/layouts/PageBackground';
import contactusbg from '../assets/pagebackgrounds/contactusbg.svg';

import Copy from '../components/About/Copy/Copy';
import Partners from '../components/About/Partners/Partners';
import ContactUs from '../components/Contact/Contact';

const AboutUs: React.FC<PageProps> = () => {
  return (
    <main className="mt-5">
      <PageBackground text="Who are we?" imgsrc={contactusbg} />
      <Copy />
      <Partners />
      <ContactUs />
    </main>
  );
};

export default AboutUs;
