import React from 'react';

// react-booststrap imoports
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import styled from 'styled-components';
import styles, { mediaQuery } from '../../styles';
import LandingPageBg from '../../assets/lpbg.svg';

const LandingWrapper = styled.div`
  background-image: url(${LandingPageBg});
  background-repeat: no-repeat;
  height: 50vh;
`;

const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 0.2fr;
  width: 50%;
  height: 100%;
  margin: 0 auto;
  gap: 5%;
  justify-content: center;
  align-items: start;
  ${mediaQuery(`{
    width: 90%
  }`)}
`;

const SearchBar = styled(InputGroup)`
  grid-area: 1 / 1 / 2 / 4;
  align-self: end;
`;

const SearchBarIcon = styled(InputGroup.Text)`
  background-color: transparent;
`;

const SearchInput: React.FC<SearchInputProps> = ({
  setSearchTerm,
  setOnlineOnly,
  careers,
  setSelectedCareer,
  setSortParam,
}) => {
  return (
    <LandingWrapper>
      <FormWrapper>
        <SearchBar className="mb-3">
          <Form.Control
            type="text"
            placeholder="Search"
            onChange={(e) => {
              return setSearchTerm(e.target.value);
            }}
            aria-describedby="basic-addon2"
            aria-label="Search the course"
            style={{ borderRight: `none` }}
          />
          <InputGroup.Append>
            <SearchBarIcon id="basic-addon2">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-search"
                fill={styles.aqua}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                />
                <path
                  fillRule="evenodd"
                  d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                />
              </svg>
            </SearchBarIcon>
          </InputGroup.Append>
        </SearchBar>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Sort By:</Form.Label>
          <Form.Control
            as="select"
            onChange={(e) => {
              setSortParam(e.currentTarget.value);
            }}
          >
            <option> </option>
            <option>Start Date</option>
            <option>Price</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Career path:</Form.Label>
          <Form.Control
            as="select"
            className="mr-sm-2"
            custom
            onChange={(e) => {
              setSelectedCareer(e.currentTarget.value);
            }}
          >
            {[{ node: { id: ``, name: `` } }, ...careers].map((career) => {
              return (
                <option key={career.node.id} value={career.node.id}>
                  {career.node.name}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Remote</Form.Label>
          <Form.Check
            type="switch"
            id="custom-switch"
            label=""
            aria-label="remote"
            onChange={(e) => {
              setOnlineOnly(e.currentTarget.checked);
            }}
          />
        </Form.Group>
      </FormWrapper>
    </LandingWrapper>
  );
};

export default SearchInput;
