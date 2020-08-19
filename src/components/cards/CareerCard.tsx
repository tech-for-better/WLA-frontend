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
`;

const CareerCard: React.FC<CareerProps> = ({ colour, name, link, image }) => {
  const StyledCard = styled(Card)`
    width: 15em;
    color: ${styles.white};
    background-color: ${colour};
    padding: 1em;
  `;

  return (
    <StyledCard>
      <Link to={link}>
        <Card.Subtitle>Career path</Card.Subtitle>
        <Card.Title>{name}</Card.Title>
        <Image src={image} />
      </Link>
    </StyledCard>
  );
};

export default CareerCard;
