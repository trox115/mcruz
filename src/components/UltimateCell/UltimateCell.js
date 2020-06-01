import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const Margin = styled.div`
  margin: 30px 0 30px 0;
`;

function ultimateCell({ ...props }) {
  return (
    <Margin>
      <Container>
        <Row>
          <Col md="6">
            <h2> Instale a ultimateCell no seu veículo</h2>
            <p>
              A Ultimate Cell aplica-se em carros antigos e modernos, de todas
              as marcas e modelos, garantindo poupanças de combustíveis
              consideráveis com uma autonomia estimada do dispositivo que
              permite percorrer até 50.000 km
            </p>
            <p>
              O Ultimate Cell Car Engine (UCCE) é um inovador dispositivo que se
              aplica em carros no sentido de reduzir o consumo de combustível em
              mais de 10% e emissão de gases poluentes até cerca de 80%.
            </p>
            <p>
              Com este smart system, o motor torna-se mais silencioso e suave e,
              como há um aumento do binário, proporciona uma condução mais
              confortável e com menos recurso à caixa de velocidades.
            </p>
          </Col>
          <Col md="6">
            <img src="ucce.jpg" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Margin>
  );
}

export default ultimateCell;
