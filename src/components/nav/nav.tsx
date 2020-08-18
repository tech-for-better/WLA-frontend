import React from 'react';
import { PageProps, Link } from 'gatsby';

// botstrap imports
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const CustomNav: React.FC<PageProps> = () => (
  <Navbar bg="light" expand="lg">
    <Link className="nav-link navbar-brand" to="/">
      WLA
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav>
        <Link to="/courseSearch/" className="nav-link">
          SEARCH COURSES
        </Link>

        <Link to="/careerPaths/" className="nav-link">
          CAREER PATHS
        </Link>

        <Link to="/aboutus/" className="nav-link">
          ABOUT US
        </Link>

        <Link to="/contactus/" className="nav-link">
          CONTACT US
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default CustomNav;
