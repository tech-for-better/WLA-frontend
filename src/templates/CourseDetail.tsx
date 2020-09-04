import React from 'react';
import { graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import styles from '../styles';

import CoursesWrapper from '../components/cards/CoursesWrapper';
import {
  CardGroupStyle,
  StyledCard,
  BigStyledText,
  SubStyledText,
  CardBodyStyle,
  ListGroupWrapper,
  ModuleListItem,
  ModuleOrder,
} from './sharedStyles.styles';

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

const CourseDetail: React.FC<CourseDetails> = ({ data }) => {
  const {
    name,
    total_price,
    link,
    description,
    provider,
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
                <BigStyledText>{total_price ? `£${total_price}` : `Free`}</BigStyledText>
                <SubStyledText>Cost</SubStyledText>
              </div>
              <div>
                <BigStyledText>{startDate || `Unknown`}</BigStyledText>
                <SubStyledText>Start Date</SubStyledText>
              </div>
              <div>
                <BigStyledText>
                  {provider?.postcode ? provider.postcode.toUpperCase() : `Online`}
                </BigStyledText>
                <SubStyledText>Location</SubStyledText>
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
            Find out more
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
          total_price
          link
          description
          id
          online_only
          start_date(formatString: "D MMM YYYY")
          modules {
            description
            link
            name
            order
          }
          provider {
            postcode
            name
          }
        }
      }
    }
    similarCourses: allStrapiCourse(
      filter: { career_paths: { elemMatch: { color: { nin: "" } } } }
      limit: 8
    ) {
      edges {
        node {
          name
          total_price
          link
          description
          id
          strapiId
          provider {
            postcode
            name
          }
          online_only
          start_date(formatString: "D MMM YYYY")
          modules {
            description
            link
            name
            order
          }
          career_paths {
            color
          }
        }
      }
    }
  }
`;
