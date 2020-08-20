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

const CareerCard: React.FC<CareerProps> = ({ colour, name, link, image }) => {
  const StyledCard = styled(Card)`
    width: 15em;
    height: 7em;
    color: ${styles.white};
    background-color: ${colour};
    padding: 1em;
    -webkit-box-shadow: ${SC.cardShadow};
    -moz-box-shadow: ${SC.cardShadow};
    box-shadow: ${SC.cardShadow};
  `;
  console.log(colour, name, link, image)
  
  return (
    <SC.InvisibleLink to={link}>
      <StyledCard>
        <Subtitle>Career path</Subtitle>
        <Body>
          <Title>{name}</Title>
          <Image src={image} />
        </Body>
      </StyledCard>
    </SC.InvisibleLink>
  );
};

export default CareerCard;
