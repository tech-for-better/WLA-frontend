import React from 'react';

// react-booststrap imoports
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const Search: React.FC<{}> = () => (
  <>
    <Form>
      <Form.Row>
        <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Sort By:</Form.Label>
          <Form.Control as="select" defaultValue="Choose...">
            <option value="0">Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Type:</Form.Label>
          <Form.Control
            as="select"
            className="mr-sm-2"
            id="inlineFormCustomSelect"
            custom
          >
            <option value="0">Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Check this switch"
          />
        </Form.Group>
      </Form.Row>

      <Form.Group as={Col} controlId="formBasicRange">
        <Form.Label>Range</Form.Label>
        <Form.Control type="range" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  </>
);

export default Search;
