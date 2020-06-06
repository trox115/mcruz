import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import { SRLWrapper } from 'simple-react-lightbox';
import PortInicial from './PortInicial';

const Filtros = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  button {
    margin-top: 5px;
    margin-right: 10px;
  }
`;

function Galeria() {
  const [state, setState] = useState({
    filter: 'todos',
    imagens: {
      1: { id: 1, nome: '1', categoria: 'pintura' },
      2: { id: 2, nome: '2', categoria: 'aluguer' },
      4: { id: 3, nome: '4', categoria: 'aluguer' },
      5: { id: 4, nome: '5', categoria: 'aluguer' },
      6: { id: 5, nome: '6', categoria: 'aluguer' },
      7: { id: 6, nome: '7', categoria: 'aluguer' },
      8: { id: 7, nome: '8', categoria: 'aixam' },
      9: { id: 8, nome: '9', categoria: 'aixam' },
      10: { id: 9, nome: '10', categoria: 'aixam' },
      11: { id: 10, nome: '11', categoria: 'aluguer' },
      12: { id: 11, nome: '12', categoria: 'aluguer' },
      13: { id: 12, nome: '13', categoria: 'aixam' },
      14: { id: 13, nome: '14', categoria: 'aixam' },
      15: { id: 14, nome: '15', categoria: 'aixam' },
      16: { id: 15, nome: '16', categoria: 'aixam' },
      17: { id: 16, nome: '17', categoria: 'aixam' },
      18: { id: 17, nome: '18', categoria: 'aixam' },
      19: { id: 18, nome: '19', categoria: 'aixam' },
      20: { id: 19, nome: '20', categoria: 'aixam' },
      21: { id: 20, nome: '21', categoria: 'aixam' },
      22: { id: 21, nome: '22', categoria: 'aixam' },
      23: { id: 22, nome: '23', categoria: 'aixam' },
      24: { id: 23, nome: '24', categoria: '' },
      25: { id: 24, nome: '25', categoria: 'aixam' },
      26: { id: 25, nome: '26', categoria: 'aixam' },
      27: { id: 26, nome: '27', categoria: 'aixam' },
      28: { id: 27, nome: '28', categoria: 'aixam' },
      29: { id: 28, nome: '29', categoria: 'aixam' },
      30: { id: 29, nome: '30', categoria: 'powercell' },
      31: { id: 30, nome: '31', categoria: 'pintura' },
      32: { id: 31, nome: '32', categoria: 'mecanica' },
      33: { id: 32, nome: '33', categoria: 'reboques' },
      34: { id: 33, nome: '34', categoria: 'taxi' },
    },
  });

  function handleClick(event) {
    event.preventDefault();
    const filter = { filter: event.target.value };
    setState({
      ...state,
      filter,
    });

    const items = document.querySelectorAll('.gallery_product');
    const target = event.target.getAttribute('value');

    for (let i = 0; i < items.length; i += 1) {
      items[i].style.display = 'none';
      if (items[i].getAttribute('data-id') === target) {
        items[i].style.display = 'block';
      }
      if (target === 'todos') {
        items[i].style.display = 'block';
      }
    }
  }

  return (
    <Container>
      <Row>
        <Col md="12">
          <Filtros>
            <button
              type="button"
              className="btn btn-outline-dark"
              value="todos"
              onClick={handleClick}
            >
              Todos
            </button>
            <button
              type="button"
              className="btn btn-outline-dark"
              value="reboques"
              onClick={handleClick}
            >
              Reboques
            </button>
            <button
              type="button"
              className="btn btn-outline-dark"
              value="mecanica"
              onClick={handleClick}
            >
              Mecanica
            </button>
            <button
              type="button"
              className="btn btn-outline-dark"
              value="aixam"
              onClick={handleClick}
            >
              Aixam
            </button>
            <button
              type="button"
              className="btn btn-outline-dark"
              value="chaparia"
              onClick={handleClick}
            >
              Chaparia
            </button>
            <button
              type="button"
              className="btn btn-outline-dark"
              value="pintura"
              onClick={handleClick}
            >
              Pintura
            </button>
            <button
              type="button"
              className="btn btn-outline-dark"
              value="taxi"
              onClick={handleClick}
            >
              Taxi
            </button>
            <button
              type="button"
              className="btn btn-outline-dark"
              value="aluguer"
              onClick={handleClick}
            >
              Aluguer
            </button>
            <button
              type="button"
              className="btn btn-outline-dark"
              value="powercell"
              onClick={handleClick}
            >
              PowerCell
            </button>
          </Filtros>
          <SRLWrapper>
            {Object.values(state.imagens).map(value => (
              <PortInicial key={value.id} {...value} />
            ))}
          </SRLWrapper>
        </Col>
      </Row>
    </Container>
  );
}
export default Galeria;
