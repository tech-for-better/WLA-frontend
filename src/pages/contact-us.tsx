import React from 'react';
import { PageProps } from 'gatsby';
import Contact from '../components/Contact/Contact';
import PageBackground from '../components/layouts/PageBackground';
import contactusbg from '../assets/pagebackgrounds/contactusbg.svg';

const ContactUs: React.FC<PageProps> = () => {
  return (
    <main className="mt-5">
      <PageBackground
        imgsrc={contactusbg}
        text="If You Have Questions or Just want to talk with us please Get in Touch "
      />
      <Contact />
    </main>
  );
};

export default ContactUs;
