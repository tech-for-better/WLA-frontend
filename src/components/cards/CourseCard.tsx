import React from 'react';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import styles from '../../styles';
import * as SC from './shared-styles';

interface CourseProps {
  colour: string;
  name: string;
  description: string;
  link: string;
}

const Subtitle = styled(Card.Subtitle)`
  font-size: ${styles.font[0]};
  color: ${styles.grey};
`;

const Description = styled.p`
  font-size: ${styles.font[0]};
  color: ${styles.grey};
`;

const CourseCard: React.FC<CourseProps> = ({
  colour,
  name,
  description,
  link,
}) => {
  const StyledCard = styled(Card)`
    width: 15em;
    height: 11em;
    padding: 1em;
    overflow: hidden;
    position: relative;
    -webkit-box-shadow: 0px 0px 14px -3px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 14px -3px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 14px -3px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    border-left: 10px solid ${colour};

    :after {
      content: '';
      text-align: right;
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 3em;
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 1) 70%
      );
    }
  `;

  return (
    <SC.InvisibleLink to={link}>
      <StyledCard>
        <Subtitle>course</Subtitle>
        <Card.Title>{name}</Card.Title>
        <Description>{description}</Description>
      </StyledCard>
    </SC.InvisibleLink>
  );
};

export default CourseCard;
