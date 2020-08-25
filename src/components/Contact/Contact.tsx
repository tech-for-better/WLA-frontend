import React from 'react';
import styled from 'styled-components';
import styles, { mediaQuery } from '../../styles';
import Form from './Form';

const OverallBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  ${mediaQuery(`{
grid-template-columns: 1fr;
}`)}
`;

const FirstBox = styled.div`
  background-color: ${styles.lightBlue};
  color: ${styles.white};
`;

const SecondBox = styled.div``;

const Contact: React.FC<{}> = () => {
  return (
    <OverallBox>
      <FirstBox>
        <p>Talk to us.</p>
        <h2>Let us know if you also have courses to offer.</h2>
      </FirstBox>
      <SecondBox>
        <Form />
      </SecondBox>
    </OverallBox>
  );
};

export default Contact;
