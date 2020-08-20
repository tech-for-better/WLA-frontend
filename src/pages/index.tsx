import React, { useState, useEffect } from 'react';
import { PageProps, graphql } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Search from '../components/search';
import CareerCard from '../components/cards/CareerCard';
import CourseCard from '../components/cards/CourseCard';

const Home: React.FC<PageProps> = ({ data }) => {
  const [incomingData, setData] = useState(data.allStrapiCourse.edges);
  const [incomingCareerData, setCareerData] = useState(data.allStrapiCareerPath.edges);
  const [currentSearch, setSearch] = useState(``);
  useEffect(() => {
    const filterdCareerData = incomingCareerData.filter((a) => a.node.name.includes(currentSearch));
    const filterdData = incomingData.filter((a) => a.node.name.includes(currentSearch));
    setCareerData(filterdCareerData);
    setData(filterdData);
  }, [currentSearch]);
  return (
    <main>
      <Search setSearch={setSearch} />
      <h2>Career Path</h2>
      <Container fluid>
        <Row noGutters>
          {incomingCareerData.map((career) => (
            <Col key={career.node.strapiId}>
              <CareerCard
                colour={career.node.color}
                name={career.node.name}
                link={`/career/${career.node.name.replace(/ /g, `-`)}`}
                image={career.node.icon_url}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <h2>Courses</h2>
      <Container fluid>
        <Row noGutters>
          {incomingData.map((course) => (
            <Col key={course.node.strapiId}>
              <CourseCard
                colour="red"
                name={course.node.name}
                description={course.node.description}
                link={`/course/${course.node.name.replace(/ /g, `-`) + course.node.strapiId}`}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default Home;

export const query = graphql`
  query {
    allStrapiCareerPath {
      edges {
        node {
          color
          name
          strapiId
          icon_url
        }
      }
    }
    allStrapiCourse {
      edges {
        node {
          name
          link
          price
          start_date
          strapiId
          description
          career_paths {
            color
          }
        }
      }
    }
  }
`;
