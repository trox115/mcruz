import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const Text = styled.div`
  text-align: justify;
  p {
    margin-top: 30px;
  }
`;

const Image = styled.div`
  text-align: center;
  img {
    height: 50%;
    width: 50%;
  }
`;

const Title = styled.div`
   {
    text-align: center;
  }
`;

function Sobre() {
  return (
    <Container>
      <Row>
        <Col md="12">
          <Title>
            <h1>Sobre a Mcruz Fernandes</h1>
          </Title>
        </Col>
        <Col md="6">
          <Text>
            <p>
              Fundada por Manuel Cruz Fernandes no ano de 2000, a Mcruz
              Fernandes, rapidamente se tornou uma empresa de referência
              automóvel em Macedo de Cavaleiros - Bragança.
            </p>
            <p>
              Sastifazer as necessidades dos nossos clientes, competência e
              trabalho árduo são os valores pelos quais nos regemos e é também
              por isso que os nossos clientes nos procuram. Não só em Macedo de
              Cavaleiros como também em todo o distrito de Bragança.
            </p>
            <p>
              Para conseguir satisfazer as necessidades de quem nos procura, a
              MCruz Fernandes, procurou também abranger diversos serviços.
            </p>
          </Text>
        </Col>
        <Col md="5">
          <Image>
            <img src="/Manuel Fernandes.jpg" alt="Manuel da Cruz Fernandes" />
          </Image>
        </Col>
        <Col md="12">
          <h2>Serviços Mcruz Fernandes </h2>
          <ul>
            <a href="/servicos/reboque">
              <li> Reboques</li>
            </a>
            <a href="/servicos/mecanica">
              <li>Mecânica Geral</li>
            </a>
            <a href="/servicos/pneus">
              <li>Pneus</li>
            </a>
            <a href="/servicos/chaparia">
              <li>Chaparia Mestra</li>
            </a>
            <a href="/servicos/pintura">
              <li>Pintura</li>
            </a>
            <a href="/servicos/venda">
              <li>Venda de Automóveis</li>
            </a>
            <a href="/servicos/aluguer">
              <li>Aluguer de Automóveis</li>
            </a>
            <a href="/servicos/taxi">
              <li>Serviço de Taxi normal e 9 lugares</li>
            </a>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Sobre;
