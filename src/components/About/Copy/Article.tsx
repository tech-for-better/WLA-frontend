import React from 'react';
import styled from 'styled-components';
import styles from '../../../styles';

interface ArticleProps {
  alignment: boolean;
  title: string;
  text: string[];
  image: {
    link: string;
    description: string;
  };
}

const StyledArticle = styled.article`
  margin-top: 5em;
  display: flex;
  flex-direction: ${(props) => {
    return props.alignment ? `row-reverse` : `row`;
  }};
`;

const Title = styled.h1`
  text-align: center;
  font-size: ${styles.font[3]};
`;

const Image = styled.img`
  object-fit: cover;
  ${(props) => {
    return props.alignment || `margin-right: 1em;`;
  }}
`;

const Article: React.FC<ArticleProps> = ({ title, text, image = null, alignment = null }) => {
  // const { link, description } = image;
  return (
    <StyledArticle alignment={alignment}>
      {image && (
        <Image
          src={image.link}
          alt={image.description}
          width={300}
          height={300}
          alignment={alignment}
        />
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
