import React from 'react';
import Form from './Form';
import * as SC from './styled-components';

const Contact: React.FC<{}> = () => {
  return (
    <SC.OverallBox className="mb-5">
      <SC.FirstBox>
        <SC.TextOne />
        <SC.TextTwo>
          Let us know if you also have courses to promote or would like to explore other partnership
          opportunities.
        </SC.TextTwo>
        <SC.TextThree />
      </SC.FirstBox>
      <SC.SecondBox>
        <Form />
      </SC.SecondBox>
    </SC.OverallBox>
  );
};

export default Contact;
