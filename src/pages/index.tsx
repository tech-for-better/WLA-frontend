import React from 'react';
import { PageProps } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Title from '~/src/components/Title';

const Home: React.FC<PageProps> = () => (
  <main>
    <Title />
    <Button variant="dark">Primary</Button>
    <p>A TypeScript starter for Gatsby. Great for advanced users.</p>
    <p>
      Follow me on Twitter (
      <a href="https://twitter.com/jpedroschmitz">@jpedroschmitz</a>)
    </p>
  </main>
);

export default Home;
