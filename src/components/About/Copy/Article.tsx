import React from 'react';
import styled from 'styled-components';
import styles, { mediaQuery } from '../../../styles';

interface ArticleProps {
  alignment: boolean;
  title: string;
  text: string[];
  image: {
    link: string;
    description: string;
  } | null;
}

const StyledArticle = styled.article`
  margin-top: 5em;
  padding: 0 1em;
  display: flex;
  flex-direction: ${(props) => {
    return props.alignment ? `row-reverse` : `row`;
  }};
  ${mediaQuery(`
  flex-direction: column;

  `)}/* flex-wrap: wrap; */
`;

const Title = styled.h1`
  text-align: center;
  font-size: ${styles.font[3]};
  padding-bottom: 0.5em;
`;

const ImageBox = styled.div`
  width: 100%;
  height: auto;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  ${(props) => {
    return props.alignment || `margin-right: 1em;`;
  }}
`;

const Article: React.FC<ArticleProps> = ({ title, text, image = null, alignment = false }) => {
  // const { link, description } = image;
  return (
    <StyledArticle alignment={alignment}>
      {image && (
        <ImageBox>
          <Image
            src={image.link}
            alt={image.description}
            width={300}
            height={300}
            alignment={alignment}
          />
        </ImageBox>
      )}
      <div>
        <Title>{title}</Title>
        {text.map((p) => {
          return <p>{p}</p>;
        })}
      </div>
    </StyledArticle>
  );
};

export default Article;
