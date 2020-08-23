import React from 'react';
import { Link } from 'gatsby';

// botstrap imports
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const CustomNav: React.FC<{}> = () => {
  return (
    <Navbar expand="lg">
      <Link className="nav-link navbar-brand" to="/">
        WLA
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Link to="/course-search/" className="nav-link">
            SEARCH COURSES
          </Link>

          <Link to="/career-paths/" className="nav-link">
            CAREER PATHS
          </Link>

          <Link to="/about-us/" className="nav-link">
            ABOUT US
          </Link>

          <Link to="/contact-us/" className="nav-link">
            CONTACT US
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNav;
