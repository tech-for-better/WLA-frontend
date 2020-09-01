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
const Navitem = styled(Nav)`
  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 100%;
    height: 3px;
    content: '';
    color: transparent;
  }
`;
const LinkItem = styled(Link)`
  font-weight: bold;

  :hover {
    border-bottom: 3px solid #006574;
    color: #006574;
  }
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
          <LinkItem to="/course-search/" className="nav-link">
            SEARCH COURSES
          </LinkItem>

          <LinkItem to="/career-paths/" className="nav-link">
            CAREER PATHS
          </LinkItem>

          <LinkItem to="/about-us/" className="nav-link">
            ABOUT US
          </LinkItem>

          <LinkItem to="/contact-us/" className="nav-link">
            CONTACT US
          </LinkItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNav;
