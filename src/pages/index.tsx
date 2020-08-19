import React from 'react';
import { PageProps, StaticQuery, graphql } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from '../components/search';

const Home: React.FC<PageProps> = ({ data }) => {
  // const incomingData = inData
  console.log(data);
  return (
    <main>
      <Search />

      <ul>
        {data.allStrapiCourse.edges.map((course) => (
          <div key={course.node.strapiId}>
            <li>{course.node.name}</li>
            <p>{course.node.price}</p>
          </div>
        ))}
      </ul>
    </main>
  );
};

export default Home;

export const query = graphql`
  query {
    allStrapiCourse {
      edges {
        node {
          strapiId
          name
          description
          price
        }
      }
    }
  }
`;
