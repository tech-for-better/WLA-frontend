import React from 'react';
import styled from 'styled-components';
import styles, { mediaQuery } from '../../styles';

const PicBackground = styled.div`
  background-image: url(${(props) => {
    return props.imgsrc;
  }});
  background-repeat: no-repeat;
  height: 40vh;
  ${mediaQuery(`{
      height: 20vh;
  }`)}
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2em;
`;

const LandingText = styled.h1`
  color: #2d2d2d;
  font-weight: bold;
  font-size: ${styles.font[4]};
  width: 60%;
  align-self: flex-end;
  margin-top: 10%;
  margin: 0;
  text-align: right;
  ${mediaQuery(`{
    font-size: ${styles.font[2]};
    margin-right: 10%

  }`)}
`;

function PageBackground({ imgsrc, text }) {
  return (
    <PicBackground imgsrc={imgsrc}>
      <LandingText>{text}</LandingText>
    </PicBackground>
  );
}

export default PageBackground;
