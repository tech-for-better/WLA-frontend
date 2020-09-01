import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { PageProps, graphql } from 'gatsby';

import Card from 'react-bootstrap/esm/Card';

import lmi4AllData from '../utils/lmi4all';

import { CardGroupStyle, StyledCard } from './sharedStyles.styles';
import CoursesWrapper from '../components/cards/CoursesWrapper';
import CareerPathDetail from '../components/careerPath/CareerPathDetail';

import Graph1 from '../assets/temp/lc1.png';
import Graph2 from '../assets/temp/lc2.png';
import Graph3 from '../assets/temp/dc.png';
import DonutChart from '../components/d3charts/d3donutChart';
import SparklineChart from '../components/d3charts/d3areaChart';

const ReverseCardGroupStyle = styled(CardGroupStyle)`
  grid-template-columns: 35% 60%;
`;

const GraphImg = styled.img`
  width: 100%;
`;

const CareerPath: React.FC<PageProps> = ({ data }) => {
  const [lmiData, setLmiData] = useState({ loading: true, lmiData: {} });
  const {
    description,
    color,
    name,
    video_url: videoUrl,
    lmi_code: lmiCode,
    career_progression,
  } = data?.careers?.edges[0]?.node;

  const courses = (data?.careers?.edges[0]?.node.courses).map((a) => {
    // eslint-disable-next-line @typescript-eslint/camelcase
    Object.assign(a, { career_paths: [{ color }] });
    return { node: a };
  });

  useEffect(() => {
    // return setLmiData({ loading: false, lmiData: lmi4AllData(lmiCode, name) });
  }, []);

  return (
    <main>
      <CareerPathDetail path={{ name, videoUrl, lmiCode, description, career_progression }} />
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
                {lmiData.loading ? (
                  `loading`
                ) : (
                  <SparklineChart estimatePay={lmiData.lmiData.estimatePay} />
                )}
              </Card.Body>
            </StyledCard>
            <StyledCard>
              <Card.Body>
                <Card.Title className="mb-4">
                  <strong>Employment Rate</strong>
                </Card.Title>
                <GraphImg src={Graph2} />
              </Card.Body>
            </StyledCard>
          </div>
          <StyledCard>
            <Card.Body>
              <Card.Title className="mb-4">
                <strong>Courses taken to become {name}</strong>
              </Card.Title>
              <GraphImg src={Graph3} />
            </Card.Body>
          </StyledCard>
        </ReverseCardGroupStyle>
        <p>
          <StyledCard>
            <Card.Body>
              <Card.Title className="mb-4">
                <strong>
                  Another card that has infomration about current number of vacancies, replacemenet
                  demand with a number over ceratin time of years. top skills in demand to become
                  {` `}
                  {name}.
                </strong>
              </Card.Title>
            </Card.Body>
          </StyledCard>
        </p>
        <p>
          <StyledCard>
            <Card.Body>
              <Card.Title className="mb-4">
                <strong>predicted Employment</strong>
                <DonutChart />
              </Card.Title>
            </Card.Body>
          </StyledCard>
        </p>
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
          career_progression
        }
      }
    }
  }
`;
