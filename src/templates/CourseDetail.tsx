import React from 'react';
import { PageProps, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import styles, { mediaQuery } from '../styles';

const CardGroupStyle = styled.div`
  display: grid;
  grid-template-columns: 50% 35%;
  column-gap: 10%;
  justify-items: start;
  justify-content: space-between;

  ${mediaQuery(`{
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    row-gap: 10vh;
  }`)}
`;

const StyledCard = styled(Card)`
  padding: 1em;
  box-shadow: ${styles.cardShadow};
`;
const BigStyledText = styled(Card.Text)`
  margin-bottom: 0;
  font-size: 1.2rem;
  font-weight: 800;
`;
const SubStyledText = styled(Card.Text)`
  font-size: ${styles.font[0]};
`;

const CardBodyStyle = styled(Card.Body)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 30%;
  justify-items: start;
  align-content: space-between;
`;

const ModuleListItem = styled(ListGroup.Item)`
  width: 80%;
`;

const CourseDetail: React.FC<PageProps> = ({ data }) => {
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
                <SubStyledText>Online: {onlineOnly ? `yes` : `no`}</SubStyledText>
              </div>
              <div>
                <BigStyledText>{startDate}</BigStyledText>
                <SubStyledText>Start Date</SubStyledText>
              </div>
              <div>
                <BigStyledText>{postcode}</BigStyledText>
                <SubStyledText>The Postcode</SubStyledText>
              </div>
              <div>
                <BigStyledText>6</BigStyledText>
                <SubStyledText>Modules to Cover</SubStyledText>
              </div>
            </CardBodyStyle>
          </StyledCard>
          <Button block variant="primary" className="mt-5" href={link} target="blank">
            Get The course
          </Button>
        </div>
      </CardGroupStyle>
      <h2 className="mt-5 mb-3">Modules To Cover</h2>
      <Card style={{ width: `80%`, margin: `0 auto` }}>
        <ListGroup variant="flush">
          {modules.map((module) => {
            return <ModuleListItem>{module.name}</ModuleListItem>;
          })}
        </ListGroup>
      </Card>
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
  }
`;
