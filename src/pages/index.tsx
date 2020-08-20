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
  const [incomingData, updateData] = useState(data.allStrapiCourse.edges);
  const [currentSearch, updateSearch] = useState(``);
  useEffect(() => {
    const filterdData = incomingData.filter((a) =>
      a.node.name.includes(currentSearch),
    );
    updateData(filterdData);
  }, [currentSearch]);
  return (
    <main>
      <Search updateSearch={updateSearch} />
      <h2>Career Path</h2>
      <Container>
        <Row>
          {incomingData.map((course) => (
            <Col>
              <CareerCard
                key={course.node.strapiId}
                colour="blue"
                name={course.node.name}
                link="random"
                image="linkstopic"
              />
            </Col>
          ))}
        </Row>
      </Container>
      <h2>Courses</h2>
      <Container fluid>
        <Row noGutters={true}>
          {incomingData.map((course, index) => (
            <Col>
              <CourseCard
                key={course.node.strapiId}
                colour="red"
                name={course.node.name}
                description={course.node.description}
                link=""
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
    allStrapiCourse {
      edges {
        node {
          strapiId
          name
          description
          price
        }
      }
    }
  }
`;
