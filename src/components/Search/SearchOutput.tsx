import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CoursesWrapper from '../cards/CoursesWrapper';
import CareerCard from '../cards/CareerCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchOutput: React.FC<SearchResults> = ({ courseResults, careerResults }) => {
  return (
    <main className="mt-5">
      <h2 className="mt-5">Career Path</h2>
      <Container fluid className="mb-5">
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
      <CoursesWrapper courseData={courseResults} />
    </main>
  );
};

export default SearchOutput;
