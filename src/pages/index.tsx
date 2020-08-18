import React from 'react';
import { PageProps } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Search from '../components/search';

const Home: React.FC<PageProps> = () => (
  <main>
    <Search />
  </main>
);

export default Home;
