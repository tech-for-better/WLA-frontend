import React from 'react';
import { PageProps, graphql, useStaticQuery } from 'gatsby';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import CareerPathDetail from '../components/careerPath/CareerPathDetail';
import PageBackground from '../components/layouts/PageBackground';
import Careersbg from '../assets/pagebackgrounds/careersbg.svg';

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
            name
            strapiId
            videoUrl: video_url
            lmiCode: lmi_code
          }
        }
      }
    }
  `);
  return (
    <main>
      <PageBackground text="Explore Our Career options for you" imgsrc={Careersbg} />
      <Tabs defaultActiveKey={careerPaths[0].node.name}>
        {careerPaths.map((careerPath) => {
          const { name } = careerPath.node;
          return (
            <Tab key={name} eventKey={name} title={name}>
              <CareerPathDetail path={careerPath.node} />
              <Button
                variant="primary"
                className="mt-5 mb-5"
                href={`/career/${careerPath.node.name.replace(/ /g, `-`)}`}
                style={{ marginLeft: `50%`, transform: `translateX(-50%)` }}
              >
                Find Out More
              </Button>
            </Tab>
          );
        })}
      </Tabs>
    </main>
  );
};

export default CareerPaths;
