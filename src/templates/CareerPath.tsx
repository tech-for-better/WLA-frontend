import React from 'react';
import { PageProps, graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';

const CareerPath: React.FC<PageProps> = ({ data }) => {
  const { description, name } = data?.careers?.edges[0]?.node;
  return (
    <main>
      <h1>{name}</h1>
      <ReactMarkdown source={description} />
    </main>
  );
};

export default CareerPath;

export const query = graphql`
  query CareerPath($id: Int) {
    careers: allStrapiCareerPath(filter: { strapiId: { eq: $id } }) {
      edges {
        node {
          color
          description
          name
          video_url
          lmi_code
        }
      }
    }
  }
`;
