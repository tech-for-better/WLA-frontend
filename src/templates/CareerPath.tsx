import React from 'react';

import { PageProps, graphql } from 'gatsby';

import CoursesWrapper from '../components/cards/CoursesWrapper';
import CareerPathDetail from '../components/careerPath/CareerPathDetail';
import Charts from '../components/careerPath/charts/Charts';

const CareerPath: React.FC<PageProps> = ({ data }) => {
  const {
    description,
    color,
    name,
    video_url: videoUrl,
    lmi_code: lmiCode,
  } = data?.careers?.edges[0]?.node;

  const courses = (data?.careers?.edges[0]?.node.courses).map((a) => {
    // eslint-disable-next-line @typescript-eslint/camelcase
    Object.assign(a, { career_paths: [{ color }] });
    return { node: a };
  });

  return (
    <main>
      <CareerPathDetail path={{ name, videoUrl, lmiCode, description }} />
      <div className="mb-5">
        <h2 className="mb-4">Career Path Courses:</h2>
        <CoursesWrapper courseData={courses} />
      </div>
      {lmiCode && <Charts soc={lmiCode} name={name} />}
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
          courses {
            name
            strapiId: id
            link
            description
          }
        }
      }
    }
  }
`;
