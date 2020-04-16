import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Work.css";

const Work = () => {
  return (
    <div>
      <Container className="workbox">
        <Row>
          <Col sm className="workcard">
            loremx20
          </Col>
          <Col sm className="workcard">
            sm=4
          </Col>
          <Col sm className="workcard">
            sm=true
          </Col>
        </Row>
      </Container>

      <h1 className="wallword">EXPERIENCE</h1>
    </div>
  );
};

export default Work;
