import React from 'react';
import { PageProps, graphql } from 'gatsby';
import Search from '../components/Search/Search';
import 'bootstrap/dist/css/bootstrap.min.css';

import PageBackground from '../components/layouts/PageBackground';
import LandingPageBg from '../assets/pagebackgrounds/landingpagebg.svg';

const Home: React.FC<PageProps> = ({ data }) => {
  return (
    <main className="mt-5">
      <PageBackground
        imgsrc={LandingPageBg}
        text="Find local training that will help you develop a career in construction"
      />
      <Search
        courseCatalogue={data.allStrapiCourse.edges}
        careerCatalogue={data.allStrapiCareerPath.edges}
      />
    </main>
  );
};

export default Home;

export const query = graphql`
  query {
    allStrapiCareerPath {
      edges {
        node {
          color
          name
          strapiId
          icon_url
        }
      }
    }
    allStrapiCourse {
      edges {
        node {
          description
          link
          name
          career_paths {
            color
            id
          }
          provider {
            postcode
            name
          }
          total_price
          start_date(locale: "gb")
          strapiId
          online_only
        }
      }
    }
  }
`;
