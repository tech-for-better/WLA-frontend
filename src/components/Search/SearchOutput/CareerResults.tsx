import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import CareerCard from '../../cards/CareerCard';

const CareerResults: React.FC<{ careerResults: CareerPathCatalogue }> = ({ careerResults }) => {
  return (
    <>
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
    </>
  );
};

export default CareerResults;
