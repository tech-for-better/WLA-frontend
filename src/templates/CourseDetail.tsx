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
    start_date: startDate,
    modules,
    career_paths,
    strapiId,
  } = data.course.edges[0].node;
  const otherCourses = data.similarCourses.edges;
  // 'internal' meaning the career paths of this course, not another course
  const internalCareerPaths = career_paths.map((path) => {
    return path.id;
  });

  let counter = 0;
  const similarCourses = otherCourses.filter((externalCourse) => {
    if (counter > 7 || strapiId === externalCourse?.node?.strapiId) {
      return false;
    }
    const externalCourseCareers = externalCourse.node.career_paths.map(
      (path: { id: string; color: string }) => {
        return path.id;
      },
    );

    // cries in time complexity
    const sisterCourse: boolean = internalCareerPaths.some((internalPath: string) => {
      return externalCourseCareers.includes(internalPath);
    });
    if (sisterCourse) {
      counter += 1;
    }
    return sisterCourse;
  });

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
              {modules
                .sort((moduleA, moduleB) => {
                  return moduleB - moduleA;
                })
                .map((module) => {
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
          strapiId
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
          career_paths {
            id
            color
          }
        }
      }
    }
    similarCourses: allStrapiCourse {
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
            id
            color
          }
        }
      }
    }
  }
`;
