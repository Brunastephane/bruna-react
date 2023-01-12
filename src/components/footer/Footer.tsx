import React from 'react';
import Container from 'react-bootstrap/Container';
import './Footer.scss';
import { Row } from 'react-bootstrap';

export default function Footer() {
  return (
    <Container className="footer" fluid>
      <Row className="text-center">
        <p>© 2022 Copyright One the Same Page</p>
      </Row>
    </Container>
  )
}
