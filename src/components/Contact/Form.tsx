import React from 'react';
import * as SC from './styled-components';

const Form: React.FC = () => {
  return (
    <>
      <SC.SmallInputs>
        <SC.Label htmlFor="name">
          <SC.Subtitle>Name*</SC.Subtitle>
          <SC.Input type="text" id="name" placeholder="enter your name" />
        </SC.Label>
        <SC.Label htmlFor="email">
          <SC.Subtitle>email*</SC.Subtitle>
          <SC.Input type="text" id="email" placeholder="enter your email" />
        </SC.Label>
      </SC.SmallInputs>
      <SC.SmallInputs>
        <SC.Label htmlFor="number">
          <SC.Subtitle>Phone number*</SC.Subtitle>
          <SC.Input type="text" id="number" placeholder="555 555 555" />
        </SC.Label>
        <SC.Label htmFor="organisation">
          <SC.Subtitle>Organisation*</SC.Subtitle>
          <SC.Input type="text" id="organisation" placeholder="Company name" />
        </SC.Label>
      </SC.SmallInputs>
      <SC.Label htmlFor="message">
        <SC.Subtitle>Message*</SC.Subtitle>
        <SC.MessageBox id="message" placeholder="Leave your message here" />
      </SC.Label>
      <SC.Submit>submit</SC.Submit>
    </>
  );
};

export default Form;
