import styled from 'styled-components';
import styles, { mediaQuery } from '../../styles';

export const OverallBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  ${mediaQuery(`{
grid-template-columns: 1fr;
}`)}
`;

export const FirstBox = styled.div`
  background-color: ${styles.lightBlue};
  color: ${styles.white};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1em 25%;
`;

export const TextOne = styled.p`
  font-size: ${styles.font[2]};
  font-weight: 900;
`;

export const TextTwo = styled.h2`
  font-size: ${styles.font[3]};
  font-weight: 900;
`;

export const TextThree = styled.p`
  font-size: ${styles.font[1]};
  font-weight: 900;
`;

export const SecondBox = styled.form`
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 1em;
`;

export const Label = styled.label``;

export const SmallInputs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 2px solid ${styles.grey};
`;

export const Subtitle = styled.p`
  font-size: ${styles.font[2]};
  color: ${styles.lightBlue};
  font-weight: 900;
`;

export const MessageBox = styled.textarea`
  min-width: 100%;
  border: none;
  border-bottom: 2px solid ${styles.grey};
`;

export const Submit = styled.button`
  border: 2px solid ${styles.lightBlue};
  border-radius: 5px;
  box-shadow: 0;
  background-color: rgba(0, 0, 0, 0);
  align-self: center;
  padding: 0.5em 1.5em;
`;

export const FormError = styled.p`
  color: ${styles.errorRed};
`;
