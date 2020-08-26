import React from 'react';
import styled from 'styled-components';

import { PageProps, graphql } from 'gatsby';

import Card from 'react-bootstrap/esm/Card';

import { CardGroupStyle, StyledCard } from './sharedStyles.styles';
import CoursesWrapper from '../components/cards/CoursesWrapper';
import CareerPathDetail from '../components/careerPath/CareerPathDetail';
import Graph1 from '../assets/temp/lc1.png';
import Graph2 from '../assets/temp/lc2.png';
import Graph3 from '../assets/temp/dc.png';

const ReverseCardGroupStyle = styled(CardGroupStyle)`
  grid-template-columns: 35% 60%;
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
      <CareerPathDetail path={{ name, videoUrl, lmiCode, description }} />
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
