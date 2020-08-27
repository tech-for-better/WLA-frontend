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
  border-radius: 5px;
  overflow: hidden;
`;

const Filter = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-content: space-between;
  > * {
    margin: 1em auto;
  }
`;

const Strapline = styled.h2`
  color: ${styles.white};
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  width: 100%;
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
      <Filter>
        <Strapline>{strapline}</Strapline>
        <Search setSearch={setSearch} />
      </Filter>
    </Header>
  );
};

export default SearchHeader;
