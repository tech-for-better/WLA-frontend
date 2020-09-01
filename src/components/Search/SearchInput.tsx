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

const LandingText = styled.h1`
  color: #2d2d2d;
  font-weight: bold;
  font-size: ${styles.font[4]};
  width: 60%;
  float: right;
  margin-top: 10%;
  align-items: center;
  text-align: right;
  ${mediaQuery(`{
  font-size: ${styles.font[2]};
  margin-right: 10%;
  // width: %;
  }`)}
`;

const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 0.2fr;
  width: 50%;
  margin: 0 auto;
  gap: 5%;
  justify-content: center;
  align-items: start;
  border: none;
  ${mediaQuery(`{
    width: 90%;
    height: 40%
  }`)}
`;

const SearchBar = styled(InputGroup)`
  grid-area: 1 / 1 / 2 / 4;
  align-self: end;
  border: none;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
`;

const SearchBarIcon = styled(InputGroup.Text)`
  background-color: transparent;
  border: none;
`;

const FormLabels = styled(Form.Label)`
  color: #666666;
`;
const FormControls = styled(Form.Control)`
  // border-color: red;
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
      <LandingText>
        Find local training that will help you develop a career in construction
      </LandingText>
      <FormWrapper>
        <SearchBar className="mb-3">
          <Form.Control
            type="text"
            placeholder="Search for the course"
            onChange={(e) => {
              return setSearchTerm(e.target.value);
            }}
            aria-describedby="basic-addon2"
            aria-label="Search the course"
            style={{ border: `none` }}
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
          <FormLabels>Sort By:</FormLabels>
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

        <Form.Group as={Col} controlId="formGridState">
          <FormLabels>Career path:</FormLabels>
          <Form.Control
            as="select"
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
          <FormLabels>Remote</FormLabels>
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
