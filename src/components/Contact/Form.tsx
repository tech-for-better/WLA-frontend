import React from 'react';
import styled from 'styled-components';

const Label = styled.label``;

const Input = styled.input``;

const Form: React.FC = () => {
  return (
    <form>
      <Label htmlFor="name">
        Name*
        <Input type="text" id="name" placeholder="enter your name" />
      </Label>
      <Label htmlFor="email">
        email*
        <Input type="text" id="email" placeholder="enter your email" />
      </Label>
      <Label htmlFor="number">
        Phone number*
        <Input type="text" id="number" placeholder="555 555 555" />
      </Label>
      <Label htmFor="organisation">
        Organisation*
        <Input type="text" id="organisation" placeholder="Company name" />
      </Label>
      <Label htmlFor="message">
        Message*
        <textarea id="message" placeholder="Leave your message here" />
      </Label>
    </form>
  );
};

export default Form;
