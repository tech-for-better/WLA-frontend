import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Search from './Search';

const Header = styled.header`
  background-image: ${(props) => {
    return `url(${props.bannerImage})`;
  }};
  background-size: 100%;
`;

interface SearchInterface {
  setSearch: string;
}

const SearchHeader: React.FC<SearchInterface> = ({ setSearch }) => {
  const metaData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          about {
            strapline
            bannerImage
          }
        }
      }
    }
  `);
  const { strapline, bannerImage } = metaData?.site?.siteMetadata?.about;
  return (
    <Header bannerImage={bannerImage}>
      <h1>{strapline}</h1>
      <Search setSearch={setSearch} />
    </Header>
  );
};

export default SearchHeader;
