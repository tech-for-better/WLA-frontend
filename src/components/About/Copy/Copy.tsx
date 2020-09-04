import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Article from './Article';
import LogoBanner from './LogoBanner';

type article = {
  text: string[];
  title: string;
  image: {
    link: string;
    description: string;
  };
};

const Copy: React.FC<{}> = () => {
  const copy = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          aboutPage {
            copy {
              image {
                description
                link
              }
              text
              title
              logo
            }
          }
          about {
            expandedDetails
          }
          title
        }
      }
    }
  `);
  const siteDescription = copy?.site?.siteMetadata?.about?.expandedDetails;
  const refinedCopy = copy?.site?.siteMetadata?.aboutPage?.copy;
  return (
    <section>
      <LogoBanner text={siteDescription} />
      {refinedCopy.map((article: article, index: number) => {
        const { image, text, title, logo } = article;
        return (
          <Article
            key={title}
            alignment={Boolean(index % 2)}
            title={title}
            logo={logo}
            image={image}
            text={text}
          />
        );
      })}
    </section>
  );
};

export default Copy;
