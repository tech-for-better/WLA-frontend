import React, { useState, useEffect } from 'react';
import { PageProps, graphql } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Search from '../components/search';
import CareerCard from '../components/cards/CareerCard';
import CourseCard from '../components/cards/CourseCard';

type career = {
  color: string;
  icon_url: string;
  name: string;
  strapiId: number;
};

type course = {
  link: string;
  name: string;
  postCode: string;
  price: string;
  start_date: string;
  onlineOnly: boolean;
  strapiId: number;
};

const Home: React.FC<PageProps> = ({ data }) => {
  const [courseDataBank] = useState(data.allStrapiCourse.edges);
  const [careerDataBank] = useState(data.allStrapiCareerPath.edges);
  const [courseResults, setCourseResults] = useState(courseDataBank);
  const [careerResults, setCareerResults] = useState(careerDataBank);
  const [searchTerm, setSearchTerm] = useState(``);
  useEffect(() => {
    const filterdCareerData = careerDataBank.filter((a: career) => {
      return a.node.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    const filterdData = courseDataBank.filter((a: course) => {
      return a.node.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setCareerResults(filterdCareerData);
    setCourseResults(filterdData);
  }, [searchTerm]);

  return (
    <main>
      <Search setSearch={setSearchTerm} />
      <h2>Career Path</h2>
      <Container fluid>
        <Row noGutters>
          {careerResults.map((career) => {
            return (
              <Col key={career.node.strapiId}>
                <CareerCard
                  colour={career.node.color}
                  name={career.node.name}
                  link={`/career/${career.node.name.replace(/ /g, `-`)}`}
                  image={career.node.icon_url}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
      <h2>Courses</h2>
      <Container fluid>
        <Row noGutters>
          {courseResults.map((course) => {
            return (
              <Col key={course.node.strapiId}>
                <CourseCard
                  colours={course.node.career_paths?.map((path: { color: string }) => {
                    return path.color;
                  })}
                  postcode={course.node.postcode}
                  onlineOnly={course.node.online_only}
                  name={course.node.name}
                  description={course.node.description}
                  link={`/course/${course.node.name.replace(/ /g, `-`) + course.node.strapiId}`}
                />
              </Col>
            );
          })}
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
          description
          link
          name
          career_paths {
            color
          }
          postcode
          price
          start_date(locale: "gb")
          strapiId
          online_only
        }
      }
    }
  }
`;
