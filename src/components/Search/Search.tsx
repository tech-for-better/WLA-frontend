import React from 'react';

// react-booststrap imoports
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

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
  flex-start: start;
`;

const Search: React.FC<SearchInterface> = ({ setSearch }) => {
  return (
    <>
      <FormWrapper>
        <Form.Control
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          onChange={(e) => {
            return setSearch(e.target.value);
          }}
        />

        <Button variant="outline-primary">Search</Button>
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
            <Form.Label>Type:</Form.Label>
            <Form.Control as="select" className="mr-sm-2" custom>
              <option value="0">Full-Time Campus</option>
              <option value="1">Part-Time Campus</option>
              <option value="2">Online - Full-Time</option>
              <option value="3">Online - Part-Time</option>
            </Form.Control>
          </Form.Group>
        </DropDowns>
        <Form.Check type="switch" id="custom-switch" label="Remote" />
      </FormWrapper>
      {/* <Form>
        <Form.Row>
          <Col> */}
      {/* search button needs to go next to the bar and maybe make it bigger */}
      {/* <Form.Control
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              onChange={(e) => {
                return setSearch(e.target.value);
              }}
            />
          </Col>
          <Col>
            <Button variant="outline-primary">Search</Button>
          </Col>
        </Form.Row>
        <Form.Row>
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
            <Form.Label>Type:</Form.Label>
            <Form.Control as="select" className="mr-sm-2" custom>
              <option value="0">Full-Time Campus</option>
              <option value="1">Part-Time Campus</option>
              <option value="2">Online - Full-Time</option>
              <option value="3">Online - Part-Time</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col}> */}
      {/* needs vertical positioning */}
      {/* <Form.Check type="switch" id="custom-switch" label="Remote" />
          </Form.Group>
        </Form.Row> */}

      {/* <Form.Group as={Col} controlId="formBasicRange">
          <Form.Label>Dificulty Range</Form.Label>
          <Form.Control type="range" />
        </Form.Group> */}
      {/* </Form> */}
    </>
  );
};

export default Search;
