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

const Article: React.FC<ArticleProps> = ({ alignment, title, text, image }) => {
  const { link, description } = image;
  return (
    <StyledArticle alignment={alignment}>
      <Image src={link} alt={description} width={300} height={300} alignment={alignment} />
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
