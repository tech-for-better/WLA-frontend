const validEmail = (email: string) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validNumber = (number: string) => {
  // this very permissive regex allows diverse phone numbers.
  // We could do something like specify a minimum length.
  const re = /^[0-9 +]+$/;
  return re.test(String(number).toLowerCase());
};

interface FormSubmission {
  name: string;
  email: string;
  number: string;
  organisation: string;
  message: string;
  setNameError: Function;
  setEmailError: Function;
  setNumberError: Function;
  // setOrganisationError: Function;
  setMessageError: Function;
  setFormState: Function;
}

export default function useFormSubmission({
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
}: FormSubmission) {
  let exitCode = 0;

  // clear errors
  setNameError(``);
  setEmailError(``);
  setNumberError(``);
  // setOrganisationError(``);
  setMessageError(``);

  // check errors and set exitCode
  if (!name) {
    setNameError(`A name is required`);
    exitCode = 1;
  }
  if (!validEmail(email)) {
    setEmailError(`A valid email is required`);
    exitCode = 1;
  }
  if (!validNumber(number)) {
    setNumberError(`A valid phone number is required`);
    exitCode = 1;
  }
  // if (!organisation) {
  //   setOrganisationError(`Please specify your organisation`);
  //   exitCode = 1;
  // }
  if (!message) {
    setMessageError(`A message is required`);
    exitCode = 1;
  }

  if (!exitCode) {
    const payload = new FormData();
    payload.append(`name`, name);
    payload.append(`email`, email);
    payload.append(`number`, number);
    payload.append(`organisation`, organisation);
    payload.append(`message`, message);
    const options = {
      method: `POST`,
      body: payload,
    };
    // the FORM_URL is a getform form
    fetch(process.env.GATSBY_FORM_URL, options)
      .then(() => {
        setFormState({ error: false, message: `form submitted successfully` });
      })
      .catch(() => {
        setFormState({ error: true, message: `form could not be submitted` });
      });
  }
  // if !exitCode, send form
}
