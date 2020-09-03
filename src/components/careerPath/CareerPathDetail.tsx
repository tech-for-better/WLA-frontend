import React from 'react';
import ReactMarkdown from 'react-markdown';

import Card from 'react-bootstrap/esm/Card';
import styled from 'styled-components';
import { mediaQuery } from '../../styles';
import { StyledCard, CardGroupStyle } from '../../templates/sharedStyles.styles';

interface CareerPath {
  path: {
    color: string;
    description: string;
    icon_url: string;
    SOC_code: string;
    name: string;
    strapiId: number;
    videoUrl: string;
    career_progression: string;
  };
}

const ReverseCardGroupStyle = styled(CardGroupStyle)`
  grid-template-columns: 35% 60%;
`;

const Video = styled.iframe`
  display: block;
  margin: 0 auto;
  width: 60%;
  height: 40vh;
  ${mediaQuery(`{
    width: 100%;
  }`)}
`;

const CareerPathDetail: React.FC<CareerPath> = ({
  path: { description, name, videoUrl, career_progression },
}) => {
  return (
    <main>
      <ReverseCardGroupStyle className="mb-5 mt-5">
        <div style={{ width: `100%` }}>
          <h1 className="mb-3">{name.toUpperCase()}</h1>
          <StyledCard>
            <Card.Body>
              <Card.Title className="mb-4">
                <strong>Career progression</strong>
              </Card.Title>
              <Card.Text>
                <ReactMarkdown source={career_progression} />
              </Card.Text>
            </Card.Body>
          </StyledCard>
        </div>
        <StyledCard>
          <Card.Body>
            <Card.Title className="mb-4">
              <strong>Description</strong>
            </Card.Title>
            <Card.Text>
              <ReactMarkdown source={description} />
            </Card.Text>
          </Card.Body>
        </StyledCard>
      </ReverseCardGroupStyle>
      {videoUrl ? (
        <div className="mb-5">
          <h2 className="mb-4">What is like being a {name}</h2>
          <div>
            <Video
              src={videoUrl.replace(`watch?v=`, `embed/`)}
              title="no title"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
            />
          </div>
        </div>
      ) : (
        ``
      )}
    </main>
  );
};

export default CareerPathDetail;
