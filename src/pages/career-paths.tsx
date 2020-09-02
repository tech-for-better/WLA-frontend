import React from 'react';
import { PageProps, graphql, useStaticQuery } from 'gatsby';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import CareerPathDetail from '../components/careerPath/CareerPathDetail';
import PageBackground from '../components/layouts/PageBackground';
import Careersbg from '../assets/pagebackgrounds/careersbg.svg';
import CareerCard from '../components/cards/CareerCard';

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
            career_progression
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
  const fieldRef = React.useRef<HTMLElement>(null);
  return (
    <main>
      <PageBackground text="Explore our career options for you" imgsrc={Careersbg} />
      <Tab.Container defaultActiveKey={careerPaths[0]?.node?.strapiId}>
        <Nav>
          {careerPaths.map((edge) => {
            const { strapiId, name, icon_url, color } = edge?.node;
            return (
              <Nav.Item
                key={strapiId}
                onClick={() => {
                  fieldRef.current.scrollIntoView({ behavior: `smooth` });
                }}
              >
                <Nav.Link eventKey={strapiId}>
                  <CareerCard colour={color} name={name} link="" image={icon_url} />
                </Nav.Link>
              </Nav.Item>
            );
          })}
        </Nav>
        <Tab.Content ref={fieldRef}>
          {careerPaths.map((careerPath) => {
            return (
              <Tab.Pane key={careerPath.node.strapiId} eventKey={careerPath.node.strapiId}>
                <CareerPathDetail path={careerPath.node} />
                <Button
                  className="mt-5 mb-5"
                  href={`/career/${careerPath.node.name.replace(/ /g, `-`)}`}
                  style={{
                    marginLeft: `50%`,
                    transform: `translateX(-50%)`,
                    backgroundColor: `#006574`,
                    borderColor: `#006574`,
                  }}
                >
                  Find Out More
                </Button>
              </Tab.Pane>
            );
          })}
        </Tab.Content>
      </Tab.Container>
    </main>
  );
};

export default CareerPaths;
