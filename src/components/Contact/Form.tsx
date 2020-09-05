import React, { useState } from 'react';
import * as SC from './styled-components';
import useFormSubmission from './useFormSubmission';

const Form: React.FC = () => {
  const [name, setName] = useState(``);
  const [nameError, setNameError] = useState(``);
  const [email, setEmail] = useState(``);
  const [emailError, setEmailError] = useState(``);
  const [number, setNumber] = useState(``);
  const [numberError, setNumberError] = useState(``);
  const [organisation, setOrganisation] = useState(``);
  // const [organisationError, setOrganisationError] = useState(``);
  const [message, setMessage] = useState(``);
  const [messageError, setMessageError] = useState(``);
  const [formState, setFormState] = useState({ message: ``, error: true });

  return (
    <>
      <SC.SmallInputs>
        <SC.Label htmlFor="name">
          <SC.Subtitle>Name*</SC.Subtitle>
          <SC.Input
            type="text"
            id="name"
            placeholder="enter your name"
            value={name}
            onChange={(e) => {
              setName(e.currentTarget.value);
            }}
          />
          <SC.FormError>{nameError}</SC.FormError>
        </SC.Label>
        <SC.Label htmlFor="email">
          <SC.Subtitle>E-mail*</SC.Subtitle>
          <SC.Input
            type="text"
            id="email"
            placeholder="enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
          />
          <SC.FormError>{emailError}</SC.FormError>
        </SC.Label>
      </SC.SmallInputs>
      <SC.SmallInputs>
        <SC.Label htmlFor="number">
          <SC.Subtitle>Phone number*</SC.Subtitle>
          <SC.Input
            type="text"
            id="number"
            placeholder="555 555 555"
            value={number}
            onChange={(e) => {
              setNumber(e.currentTarget.value);
            }}
          />
          <SC.FormError>{numberError}</SC.FormError>
        </SC.Label>
        <SC.Label htmFor="organisation">
          <SC.Subtitle>Organisation</SC.Subtitle>
          <SC.Input
            type="text"
            id="organisation"
            placeholder="Company name"
            value={organisation}
            onChange={(e) => {
              setOrganisation(e.currentTarget.value);
            }}
          />
          {/* <SC.FormError>{organisationError}</SC.FormError> */}
        </SC.Label>
      </SC.SmallInputs>
      <SC.Label htmlFor="message">
        <SC.Subtitle>Message*</SC.Subtitle>
        <SC.MessageBox
          id="message"
          placeholder="Leave your message here"
          value={message}
          onChange={(e) => {
            setMessage(e.currentTarget.value);
          }}
        />
        <SC.FormError>{messageError}</SC.FormError>
      </SC.Label>
      <SC.Submit
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          useFormSubmission({
            name,
            setNameError,
            email,
            setEmailError,
            number,
            setNumberError,
            organisation,
            // setOrganisationError,
            message,
            setMessageError,
            setFormState,
          });
        }}
      >
        submit
      </SC.Submit>
      <SC.FormState error={formState.error}>{formState.message}</SC.FormState>
    </>
  );
};

export default Form;
