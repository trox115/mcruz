import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const Margin = styled.div`
  margin: 30px 0 30px 0;
`;

function ServIndex() {
  return (
    <Margin>
      <Container>
        <Row>
          <Col md="12" />
        </Row>
      </Container>
    </Margin>
  );
}

export default ServIndex;
