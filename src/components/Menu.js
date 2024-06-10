import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import bannerMenu from './icons_assets/banner.webp';

export default function ErrorPage() {
  return (
    <Container className="menu-container align-items-center">
      <Row className=" justify-content-center ">
        <Col md={6} className="text-center pt-5">
          <img
            className="d-block rounded-4"
            src={bannerMenu}
            alt="Delicious Dish in Little Lemon Restaurant"
            width={650}
          />
        </Col>
      </Row>
    </Container>
  );
}
