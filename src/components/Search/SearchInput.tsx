import React from 'react';

// react-booststrap imoports
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import styled from 'styled-components';
import { mediaQuery } from '../../styles';

const FormWrapper = styled.div`
  display: grid;
  width: 70%;
  margin: 0 auto;
  grid-template-columns: 70% 30%;
  gap: 5%;
  justify-content: center;
  align-items: center;

  ${mediaQuery(`{
    width: 90%
  }`)}
`;

const DropDowns = styled.div`
  display: flex;
`;

const SearchInput: React.FC<SearchInputProps> = ({
  setSearchTerm,
  setOnlineOnly,
  careers,
  setSelectedCareer,
}) => {
  return (
    <>
      <FormWrapper>
        <Form.Control
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          onChange={(e) => {
            return setSearchTerm(e.target.value);
          }}
        />

        <Button variant="primary">Search</Button>
        <DropDowns>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Sort By:</Form.Label>
            <Form.Control as="select" defaultValue="Relevance">
              <option value="0">Start Date</option>
              <option value="1">Price: Low to High</option>
              <option value="2">Price: High to Low</option>
              <option value="3">Relevance</option>
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
        </DropDowns>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Remote"
          onChange={(e) => {
            setOnlineOnly(e.currentTarget.checked);
          }}
        />
      </FormWrapper>
    </>
  );
};

export default SearchInput;
