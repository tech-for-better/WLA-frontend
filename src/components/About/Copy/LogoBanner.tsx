import React from 'react';
import styled from 'styled-components';
// import logo from '../../../assets/SkillsWest.London_large.png';
// import styles from '../../../styles';

// const ImageBox = styled.div`
//   display: flex;
//   justify-content: center;
//   margin: 3em;
// `;

// const Logo = styled.img`
//   flex-shrink: 1;
// `;

const AboutTextBox = styled.div`
  margin-top: 3em;
  padding: 0 1em;
`;

const AboutText = styled.p`
  font-weight: bold;
`;

const LogoBanner: React.FC<{ text: string[] }> = ({ text }) => {
  return (
    <article>
      <AboutTextBox>
        {text.map((paragraph) => {
          return <AboutText>{paragraph}</AboutText>;
        })}
      </AboutTextBox>
    </article>
  );
};

export default LogoBanner;
