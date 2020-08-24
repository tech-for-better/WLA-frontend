import React from 'react';
import { PageProps, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles, { mediaQuery } from '../styles';

const CardGroupStyle = styled.div`
  display: grid;
  grid-template-columns: 50% 30%;
  column-gap: 10vw;
  justify-items: start;
  justify-content: space-between;

  ${mediaQuery(`{
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto 1fr;
    row-gap: 10vh;
  }`)}
`;

const StyledCard = styled(Card)`
  padding: 1em;
  box-shadow: ${styles.cardShadow};
`;

const CourseDetail: React.FC<PageProps> = ({ data }) => {
  const {
    name,
    price,
    link,
    description,
    id,
    postcode,
    online_only: onlineOnly,
  } = data.course.edges[0].node;
  return (
    <section>
      <h1 className="mt-3 mb-2">{name}</h1>
      <CardGroupStyle>
        <StyledCard>
          <Card.Body>
            <Card.Title>Description</Card.Title>
            <Card.Text>
              <ReactMarkdown source={description} />
            </Card.Text>
          </Card.Body>
        </StyledCard>
        <div>
          <StyledCard>
            <Card.Body>
              <Card.Title>Description</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the
                content.
              </Card.Text>
            </Card.Body>
          </StyledCard>
          <Button variant="primary" className="mt-5">
            Go to The course
          </Button>
        </div>
      </CardGroupStyle>
      <ul>
        <li>{price}</li>
        <li>{link}</li>
        <li>{id}</li>
        <li>{postcode}</li>
        <li>Online: {onlineOnly ? `yes` : `no`}</li>
      </ul>
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
        }
      }
    }
  }
`;
