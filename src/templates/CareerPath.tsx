import React from 'react';
import styled from 'styled-components';

import { PageProps, graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import Card from 'react-bootstrap/esm/Card';
import { mediaQuery } from '../styles';
import { CardGroupStyle, StyledCard } from './sharedStyles.styles';
import CoursesWrapper from '../components/cards/CoursesWrapper';

import Graph1 from '../assets/temp/lc1.png';
import Graph2 from '../assets/temp/lc2.png';
import Graph3 from '../assets/temp/dc.png';

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

const GraphImg = styled.img`
  width: 100%;
`;

const CareerPath: React.FC<PageProps> = ({ data }) => {
  const {
    description,
    color,
    name,
    video_url: videoUrl,
    lmi_code: lmiCode,
  } = data?.careers?.edges[0]?.node;

  const courses = (data?.careers?.edges[0]?.node.courses).map((a) => {
    // eslint-disable-next-line @typescript-eslint/camelcase
    Object.assign(a, { career_paths: [{ color }] });
    return { node: a };
  });

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
      <div className="mb-5">
        <h2 className="mb-4">Career Path Courses:</h2>
        <CoursesWrapper courseData={courses} />
      </div>
      <div className="mb-5">
        <h2 className="mb-4">
          Statistical Data About <strong>{name}</strong>
        </h2>
        <ReverseCardGroupStyle className="mb-5 mt-5">
          <div style={{ width: `100%` }}>
            <StyledCard className="mb-3">
              <Card.Body>
                <Card.Title className="mb-4">
                  <strong>Average Salary</strong>
                </Card.Title>
                <GraphImg src={Graph1} />
              </Card.Body>
            </StyledCard>
            <StyledCard>
              <Card.Body>
                <Card.Title className="mb-4">
                  <strong>Employment ratio</strong>
                </Card.Title>
                <GraphImg src={Graph2} />
              </Card.Body>
            </StyledCard>
          </div>
          <StyledCard>
            <Card.Body>
              <Card.Title className="mb-4">
                <strong>Success Ratio</strong>
              </Card.Title>
              <GraphImg src={Graph3} />
            </Card.Body>
          </StyledCard>
        </ReverseCardGroupStyle>
      </div>
    </main>
  );
};

export default CareerPath;

export const query = graphql`
  query CareerPath($id: Int) {
    careers: allStrapiCareerPath(filter: { strapiId: { eq: $id } }) {
      edges {
        node {
          color
          description
          name
          video_url
          lmi_code
          courses {
            name
            strapiId: id
            link
            description
          }
        }
      }
    }
  }
`;
