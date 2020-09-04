import React from 'react';
import styled from 'styled-components';
import logo from '../../../assets/SkillsWest.London_large.png';

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 3em;
`;

const Logo = styled.img`
  flex-shrink: 1;
`;

const AboutText = styled.div`
  margin-top: 3em;
  padding: 0 1em;
`;

const LogoBanner: React.FC<{ text: string[] }> = ({ text }) => {
  return (
    <article>
      <ImageBox>
        <Logo src={logo} alt="SkillsWest.London logo" />
      </ImageBox>
      <AboutText>
        {text.map((paragraph) => {
          return <p>{paragraph}</p>;
        })}
      </AboutText>
    </article>
  );
};

export default LogoBanner;
