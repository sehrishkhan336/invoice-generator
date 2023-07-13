import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

export default function Login() {
    return (
        <Form className = "d-flex justify-content-center">
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group className="mb-3" as={Col} controlId="formGroupCheckbox">
                    <Form.Check>
                        <Form.Check.Input type="checkbox" id="autoSizingCheck2" />
                        <Form.Check.Label>Remember me</Form.Check.Label>
                    </Form.Check>
                </Form.Group>


                <Form.Group className="mb-3" as={Col} controlId="formGroupLogin">
                    <Button className="submit-button" type="submit">Login</Button>
                </Form.Group>
            </Row>


        </Form>

    );
}