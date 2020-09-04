import React from 'react';
import styled from 'styled-components';
import { mediaQuery } from '../../../styles';

interface ArticleProps {
  alignment: boolean;
  title: string;
  logo: string;
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

  `)}
`;

// const Title = styled.h1`
//   text-align: center;
//   font-size: ${styles.font[3]};
//   padding-bottom: 0.5em;
// `;

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

const LogoStrip = styled.div`
  display: flex;
  justify-content: center;
`;

const Logo = styled.img`
  height: 10em;
  margin: 1em 0;
  flex-shrink: 1;
  width: auto;
`;

const Article: React.FC<ArticleProps> = ({
  title,
  logo,
  text,
  image = null,
  alignment = false,
}) => {
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
        <LogoStrip>
          <Logo src={logo} alt={title} />
        </LogoStrip>
        {text.map((p) => {
          return <p key={Math.random()}>{p}</p>;
        })}
      </div>
    </StyledArticle>
  );
};

export default Article;
