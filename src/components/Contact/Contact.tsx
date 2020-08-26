import React from 'react';
import Form from './Form';
import * as SC from './styled-components';

const Contact: React.FC<{}> = () => {
  return (
    <SC.OverallBox>
      <SC.FirstBox>
        <SC.TextOne>Talk to us.</SC.TextOne>
        <SC.TextTwo>Let us know if you also have courses to offer.</SC.TextTwo>
        <SC.TextThree>Looking to partner up?</SC.TextThree>
      </SC.FirstBox>
      <SC.SecondBox>
        <Form />
      </SC.SecondBox>
    </SC.OverallBox>
  );
};

export default Contact;
