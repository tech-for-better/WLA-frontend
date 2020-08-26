import React from 'react';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import styles from '../../styles';
import * as SC from './shared-styles';

interface CareerProps {
  colour: string;
  name: string;
  link: string;
  image: string;
}

const Image = styled.img`
  width: 3em;
  height: auto;
  float: right;
`;

const Subtitle = styled(Card.Subtitle)`
  font-size: ${styles.font[0]};
`;

const Title = styled(Card.Title)`
  display: inline;
`;

const Body = styled(Card.Body)`
  padding: 0;
`;

const StyledCard = styled(Card)`
  width: 15em;
  height: 7em;
  margin: 0 auto;
  color: ${styles.white};
  background-color: ${(props) => {
    return props.colour;
  }};
  padding: 1em;
  box-shadow: ${SC.cardShadow};
`;

const CareerCard: React.FC<CareerProps> = ({ colour, name, link, image }) => {
  return (
    <SC.InvisibleLink to={link}>
      <StyledCard colour={colour} className="mb-3">
        <Subtitle className="mb-1">Career path</Subtitle>
        <Body>
          <Title>{name}</Title>
          <Image src={image} />
        </Body>
      </StyledCard>
    </SC.InvisibleLink>
  );
};

export default CareerCard;
