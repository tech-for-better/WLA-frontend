import React from 'react';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import { Link } from 'gatsby';
import styles from '../../styles';

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

const InvisibleLink = styled(Link)`
  color: ${styles.white};
  :hover {
    color: ${styles.white};
  }
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
    -webkit-box-shadow: 0px 0px 14px -3px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 14px -3px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 14px -3px rgba(0, 0, 0, 0.5);
  `;

  return (
    <InvisibleLink to={link}>
      <StyledCard>
        <Subtitle>Career path</Subtitle>
        <Body>
          <Title>{name}</Title>
          <Image src={image} />
        </Body>
      </StyledCard>
    </InvisibleLink>
  );
};

export default CareerCard;
