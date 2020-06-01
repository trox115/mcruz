import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PortInicial from './PortInicial';
import styled from 'styled-components';

const Filtros = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;

  display: flex;
  justify-content: center;
  button {
    margin-right: 10px;
  }
`;

function Galeria() {
  const [state, setState] = useState({
    filter: 'todos',
    imagens: {
      1: { nome: '1', categoria: 'teste' },
      2: { nome: '2', categoria: 'teste2' },
    },
  });
  console.log(state);

  return (
    <Container>
      <Row>
        <Col md="12">
          <Filtros>
            <button type="button" class="btn btn-outline-dark">
              Reboques
            </button>
            <button type="button" class="btn btn-outline-dark">
              Mecanica
            </button>
            <button type="button" class="btn btn-outline-dark">
              Pneus
            </button>
            <button type="button" class="btn btn-outline-dark">
              Chaparia
            </button>
            <button type="button" class="btn btn-outline-dark">
              Pintura
            </button>
            <button type="button" class="btn btn-outline-dark">
              Taxi
            </button>
            <button type="button" class="btn btn-outline-dark">
              Automóveis
            </button>
          </Filtros>
          {Object.values(state.imagens).map(value => (
            <PortInicial {...value} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}
export default Galeria;
