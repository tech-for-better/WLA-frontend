import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import styles, { mediaQuery } from '../styles';

export const CardGroupStyle = styled.div`
  display: grid;
  grid-template-columns: 60% 35%;
  column-gap: 10%;
  justify-items: start;
  justify-content: space-between;
  ${mediaQuery(`{
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    row-gap: 5vh;
  }`)}
`;

export const StyledCard = styled(Card)`
  padding: 1em;
  box-shadow: ${styles.cardShadow};
`;

export const BigStyledText = styled(Card.Text)`
  margin-bottom: 0;
  font-size: ${styles.font[2]};
  font-weight: 800;
`;
export const SubStyledText = styled(Card.Text)`
  font-size: ${styles.font[1]};
`;

export const CardBodyStyle = styled(Card.Body)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10%;
  row-gap: 10%;
  justify-items: start;
  align-content: space-between;
`;
export const ListGroupWrapper = styled(ListGroup)`
  width: 100%;
  border-left: 6px solid ${styles.lightBlue};
`;
export const ModuleListItem = styled(ListGroupWrapper.Item)`
  width: 80%;
  display: flex;
  ${mediaQuery(`{
    width: 100%
  }`)}
`;

export const ModuleOrder = styled.h3`
  font-family: Regular Bold;
  font-size: 3rem;
  letter-spacing: 0.15rem;
  color: ${styles.grey};
  width: 8rem;
  padding: 1rem 0.5rem;
  text-align: center;
  flex-shrink: 0;
  flex-grow: 0;
  ${mediaQuery(`{
    padding: 0.4rem 0.4rem;
    font-size: 3rem;
    width: 3rem;
  }`)}
`;
