import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

export default function Signup() {
  return (
    <div className="d-flex">
      <Form className="signup-form">
        <Row>
          <Col>
            <Form.Group controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formGroupUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="username" placeholder="Enter username" className="input-field" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formGroupVerifyPassword">
              <Form.Label>Verify Password</Form.Label>
              <Form.Control type="password" placeholder="Verify Password" className="input-field" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Button className="submit-button" type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
