import React from 'react';
import { PageProps, graphql, useStaticQuery } from 'gatsby';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import CareerPathDetail from '../components/careerPath/CareerPathDetail';

const CareerPaths: React.FC<PageProps> = () => {
  const {
    allStrapiCareerPath: { edges: careerPaths },
  } = useStaticQuery(graphql`
    {
      allStrapiCareerPath {
        edges {
          node {
            color
            description
            icon_url
            lmi_code
            name
            strapiId
            video_url
          }
        }
      }
    }
  `);

  return (
    <main>
      <h1 className="mt-5">Career Paths</h1>
      <Tabs defaultActiveKey={careerPaths[0].node.name}>
        {careerPaths.map((careerPath) => {
          const { name } = careerPath.node;
          return (
            <Tab key={name} eventKey={name} title={name}>
              <CareerPathDetail path={careerPath.node} />
              <p>{name}</p>
            </Tab>
          );
        })}
      </Tabs>
    </main>
  );
};

export default CareerPaths;
