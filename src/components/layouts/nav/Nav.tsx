import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// botstrap imports
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../../../assets/SkillsWest.London.png';

// it didn't look to bad big either... but I anticipate a busy UI
const Logo = styled.img`
  width: auto;
  max-height: 1.5em;
`;

const CustomNav: React.FC<{}> = () => {
  return (
    <Navbar expand="lg">
      <Link className="nav-link navbar-brand" to="/">
        <Logo src={logo} alt="SkillsWest.London logo, and link to homepage" />
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
