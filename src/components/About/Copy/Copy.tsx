import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Article from './Article';

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
            }
          }
        }
      }
    }
  `);
  const refinedCopy = copy?.site?.siteMetadata?.aboutPage?.copy;
  return (
    <section>
      {refinedCopy.map((article: article, index: number) => {
        const { image, text, title } = article;
        return (
          <Article
            alignment={Boolean(index % 2)}
            title={title}
            image={image}
            text={text}
          />
        );
      })}
    </section>
  );
};

export default Copy;
