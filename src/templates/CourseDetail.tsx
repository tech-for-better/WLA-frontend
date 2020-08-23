import React from 'react';
import { PageProps, graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';

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
      {name}
      <h2>info:</h2>
      <ul>
        <li>{price}</li>
        <li>{link}</li>
        <li>{id}</li>
        <li>{postcode}</li>
        <li>Online: {onlineOnly ? `yes` : `no`}</li>
      </ul>
      <ReactMarkdown source={description} />
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
