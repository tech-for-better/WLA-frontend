import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

import CourseCard from './CourseCard';

interface CourseWrapperProps {
  courseData: [
    {
      node: {};
    },
  ];
}

const CoursesWrapper: React.FC<CourseWrapperProps> = ({ courseData }) => {
  return (
    <Container fluid className="mb-5">
      <Row noGutters>
        {courseData.map((course) => {
          const { strapiId, career_paths, online_only, name, description, provider } = course.node;
          return (
            <Col key={strapiId}>
              <CourseCard
                colours={career_paths?.map((path: { color: string }) => {
                  return path.color;
                })}
                postcode={provider?.postcode}
                onlineOnly={online_only}
                name={name}
                description={description}
                link={`/course/${name.replace(/ /g, `-`) + strapiId}`}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CoursesWrapper;
