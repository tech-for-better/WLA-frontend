import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import styles from '../../styles';
import Search from './Search';

const Header = styled.header`
  background: ${(props) => {
    return `url(${props.bannerImage})`;
  }};
  color: white;
  background-size: 100%;
  object-fit: cover;
  background-repeat: no-repeat;
`;

const MainLine = styled.div`
  width: 80%;
  height: 30vh;
  color: ${styles.white};
  // background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 10%;
  text-align: center;
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
      <MainLine>
        <h2>{strapline}</h2>
      </MainLine>
      <Search setSearch={setSearch} />
    </Header>
  );
};

export default SearchHeader;
