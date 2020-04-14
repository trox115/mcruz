import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import fotoantiga from './fotoantiga.jpg';

const Ban = styled.div`
  background-image: url(${fotoantiga});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 100px;
  padding-bottom: 100px;
  text-align: center;
  width: 100%;
  margin-top: 30px;
`;

function Banner() {
  return (
    <Container fluid className="p-0">
      <Ban>
        <h2> Compra e aluguer de viaturas clássicas</h2>
        <Button className="btn btn-primary">Saber mais</Button>
      </Ban>
    </Container>
  );
}

export default Banner;
