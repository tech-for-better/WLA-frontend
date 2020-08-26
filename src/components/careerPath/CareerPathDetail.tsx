import React from 'react';
import ReactMarkdown from 'react-markdown';

import Card from 'react-bootstrap/esm/Card';
import styled from 'styled-components';
import { mediaQuery } from '../../styles';
import { StyledCard, CardGroupStyle } from '../../templates/sharedStyles.styles';

interface CareerPath {
  color: string;
  description: string;
  icon_url: string;
  lmi_code: string;
  name: string;
  strapiId: number;
  video_url: string;
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
  path: { description, lmiCode, name, videoUrl },
}) => {
  return (
    <main>
      <ReverseCardGroupStyle className="mb-5 mt-5">
        <div style={{ width: `100%` }}>
          <h1 className="mb-3">{name.toUpperCase()}</h1>
          <StyledCard>
            <Card.Body>
              <Card.Title className="mb-4">
                <strong>Skills You will acquire:</strong>
              </Card.Title>
              <Card.Text>
                <li>User research</li>
                <li>Finding the Colors in Nature</li>
                <li>Time Managment</li>
                <li>{lmiCode}</li>
                <li>This section is hardcoded we need to update schema on the backend</li>
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
