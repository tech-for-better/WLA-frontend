import React, { useState, useEffect } from 'react';
import { PageProps, graphql } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from '../components/search';

const Home: React.FC<PageProps> = ({ data }) => {
  const [incomingData, updateData] = useState(data.allStrapiCourse.edges);
  const [currentSearch, updateSearch] = useState(``);
  useEffect(() => {
    const filterdData = incomingData.filter((a) =>
      a.node.name.includes(currentSearch),
    );
    updateData(filterdData);
  }, [currentSearch]);
  return (
    <main>
      <Search updateSearch={updateSearch} />

      <ul>
        {incomingData.map((course) => (
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
