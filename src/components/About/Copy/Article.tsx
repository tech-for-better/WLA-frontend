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

const Title = styled.h1`
  text-align: center;
  font-size: ${styles.font[3]};
`;

const Image = styled.img`
  object-fit: cover;
  float: ${(props) => (props.alignment ? `right` : `left`)};
  ${(props) => props.alignment || `margin-right: 1em;`}
`;

const Article: React.FC<ArticleProps> = ({ alignment, title, text, image }) => {
  const { link, description } = image;
  return (
    <article>
      <Image src={link} alt={description} width={200} height={200} alignment={alignment} />
      <Title>{title}</Title>
      {text.map((p) => (
        <p>{p}</p>
      ))}
    </article>
  );
};

export default Article;
