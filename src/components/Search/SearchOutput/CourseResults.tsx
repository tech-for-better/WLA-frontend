import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

import CourseCard from '../../cards/CourseCard';

const CourseResults: React.FC<{ courseResults: CourseCatalogue }> = ({ courseResults }) => {
  return (
    <Container fluid className="mb-5">
      <h2>Course results</h2>
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
  );
};

export default CourseResults;
