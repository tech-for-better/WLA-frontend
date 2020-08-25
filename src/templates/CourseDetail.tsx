import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

import styles, { mediaQuery } from '../styles';

import CoursesWrapper from '../components/cards/CoursesWrapper';

interface CourseDetails {
  data: {
    course: {
      edges: [{}];
    };
    similarCourse: {
      edges: [{}];
    };
  };
}

const CardGroupStyle = styled.div`
  display: grid;
  grid-template-columns: 60% 35%;
  column-gap: 10%;
  justify-items: start;
  justify-content: space-between;

  ${mediaQuery(`{
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    row-gap: 5vh;
  }`)}
`;

const StyledCard = styled(Card)`
  padding: 1em;
  box-shadow: ${styles.cardShadow};
`;
const BigStyledText = styled(Card.Text)`
  margin-bottom: 0;
  font-size: ${styles.font[2]};
  font-weight: 800;
`;
const SubStyledText = styled(Card.Text)`
  font-size: ${styles.font[1]};
`;

const CardBodyStyle = styled(Card.Body)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10%;
  row-gap: 10%;
  justify-items: start;
  align-content: space-between;
`;
const ListGroupWrapper = styled(ListGroup)`
  width: 100%;
  border-left: 6px solid ${styles.lightBlue};
`;
const ModuleListItem = styled(ListGroupWrapper.Item)`
  width: 80%;
  display: flex;
  ${mediaQuery(`{
    width: 100%
  }`)}
`;

const ModuleOrder = styled.h3`
  font-family: Regular Bold;
  font-size: 3rem;
  letter-spacing: 0.15rem;
  color: ${styles.grey};
  width: 8rem;
  padding: 1rem 0.5rem;
  text-align: center;
  flex-shrink: 0;
  flex-grow: 0;
  ${mediaQuery(`{
    padding: 0.4rem 0.4rem;
    font-size: 3rem;
    width: 3rem;
  }`)}
`;

const CourseDetail: React.FC<CourseDetails> = ({ data }) => {
  const {
    name,
    price,
    link,
    description,
    postcode,
    online_only: onlineOnly,
    start_date: startDate,
    modules,
  } = data.course.edges[0].node;

  const similarCourses = data.similarCourses.edges;

  return (
    <section>
      <h1 className="mt-5 mb-3">{name.toUpperCase()}</h1>
      <CardGroupStyle>
        <StyledCard>
          <Card.Body>
            <Card.Title className="mb-4">
              <strong>Description</strong>
            </Card.Title>
            <Card.Text>
              <ReactMarkdown source={description} />
            </Card.Text>
          </Card.Body>
        </StyledCard>
        <div style={{ width: `100%` }}>
          <StyledCard>
            <CardBodyStyle>
              <div className="mb-4">
                <BigStyledText>{price.toUpperCase()}</BigStyledText>
                <SubStyledText>{onlineOnly ? `Online` : `On Campus`}</SubStyledText>
              </div>
              <div>
                <BigStyledText>{startDate ? startDate.toUpperCase() : `Unknown`}</BigStyledText>
                <SubStyledText>Start Date</SubStyledText>
              </div>
              <div>
                <BigStyledText>{postcode ? postcode.toUpperCase() : `Unknown`}</BigStyledText>
                <SubStyledText>The Postcode</SubStyledText>
              </div>
              {modules.length > 0 ? (
                <div>
                  <BigStyledText>{modules.length}</BigStyledText>
                  <SubStyledText>Modules to Cover</SubStyledText>
                </div>
              ) : (
                ``
              )}
            </CardBodyStyle>
          </StyledCard>
          <Button block variant="primary" className="mt-5" href={link} target="blank">
            Get The course
          </Button>
        </div>
      </CardGroupStyle>
      {modules.length > 0 ? (
        <div>
          <h2 className="mt-5 mb-3">Modules To Cover</h2>
          <Card style={{ width: `80%`, margin: `0 auto` }}>
            <ListGroupWrapper variant="flush">
              {modules.map((module) => {
                return (
                  <ModuleListItem key={`module${module.order}`}>
                    <ModuleOrder>{module.order}</ModuleOrder>
                    <div>
                      <BigStyledText style={{ color: `${styles.lightBlue}` }} className="mb-2">
                        {module.name}
                      </BigStyledText>
                      <SubStyledText>{module.description}</SubStyledText>
                    </div>
                  </ModuleListItem>
                );
              })}
            </ListGroupWrapper>
          </Card>
        </div>
      ) : (
        ``
      )}
      <div>
        <h2 className="mt-5 mb-3">
          Similar Courses To <strong>{name}</strong>
        </h2>
      </div>
      <CoursesWrapper courseData={similarCourses} />
    </section>
  );
};
export default CourseDetail;

export const query = graphql`
  query CourseDetail($id: Int) {
    course: allStrapiCourse(filter: { strapiId: { eq: $id } }) {
      edges {
        node {
          name
          price
          link
          description
          id
          postcode
          online_only
          start_date
          modules {
            description
            link
            name
            order
          }
        }
      }
    }
    similarCourses: allStrapiCourse(filter: { name: { regex: "design/gi" } }) {
      edges {
        node {
          career_paths {
            color
          }
          name
          online_only
          postcode
          price
          start_date(locale: "gb")
          strapiId
          link
          description
          id
        }
      }
    }
  }
`;
