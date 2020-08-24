import React from 'react';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import styles from '../../styles';
import * as SC from './shared-styles';

interface CourseProps {
  colours: string[];
  name: string;
  description: string;
  link: string;
  postcode: string;
  onlineOnly: boolean;
}

const Subtitle = styled(Card.Subtitle)`
  font-size: ${styles.font[0]};
  color: ${styles.grey};
`;

const Description = styled.p`
  font-size: ${styles.font[0]};
  color: ${styles.grey};
`;

const StyledCard = styled(Card)`
  width: 15em;
  height: 11em;
  display: flex;
  flex-direction: row;

  overflow: hidden;
  position: relative;
  box-shadow: 0px 0px 14px -3px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

const StyledBody = styled.div`
  padding: 1em;
  width: 100%;
  overflow: hidden;
  /* this psuedo element is a fade for overflowing text */
  :after {
    content: '';
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 3em;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 70%);
  }
`;

const ColourBandContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 10px;
  min-height: 100%;
  z-index: 2;
`;

const ColourBandItem = styled.div`
  background-color: ${(props) => {
    return props.colour;
  }};
  flex-grow: 1;
`;

const CourseCard: React.FC<CourseProps> = ({
  colours,
  name,
  description,
  link,
  onlineOnly,
  postcode,
}) => {
  return (
    <SC.InvisibleLink to={link}>
      <StyledCard colour={colours}>
        <ColourBandContainer>
          {colours.map((colour) => {
            return <ColourBandItem key={colour} colour={colour} />;
          })}
        </ColourBandContainer>

        <StyledBody>
          <Subtitle className="mb-1">course</Subtitle>
          <Card.Title>{name}</Card.Title>
          <Subtitle className="mb-1">{onlineOnly ? `Online` : postcode}</Subtitle>
          <Description>{description}</Description>
        </StyledBody>
      </StyledCard>
    </SC.InvisibleLink>
  );
};

export default CourseCard;
