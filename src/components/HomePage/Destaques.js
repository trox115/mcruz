import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const Titulo = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Cartao = styled.div`
  margin-top: 30px;
  width: 100%;
  h5 {
    text-align: center;
  }
  p {
    text-align: justify;
  }

  .card img {
  }

  .card-footer {
    text-align: center;
  }
`;
function Destaques() {
  return (
    <>
      <Titulo>
        <h2 class="margin-100"> Áreas de Negócio</h2>
      </Titulo>
      <Container>
        <Row>
          <Col md="3">
            <Cartao>
              <div class="card">
                <img
                  src="/alinhamento.jpeg"
                  class="card-img-top"
                  alt="Reboque em Macedo de Cavaleiros"
                />
                <div class="card-body">
                  <h5 class="card-title">Alinhamento de Pneus</h5>
                  <p class="card-text">
                    Montagem, alinhamento e calibragem de pneus para todo o tipo
                    de veiculos, alinhe os seus pneus em macedo de cavaleiros.
                  </p>
                </div>
                <div class="card-footer">
                  <a href="#" class="align-self-center btn btn-primary">
                    Saber Mais
                  </a>
                </div>
              </div>
            </Cartao>
          </Col>
          <Col md="3">
            <Cartao>
              <div class="card">
                <img
                  src="/taxi.PNG"
                  class="card-img-top"
                  alt="Reboque em Macedo de Cavaleiros"
                />
                <div class="card-body">
                  <h5 class="card-title">Táxi 9 lugares</h5>
                  <p class="card-text">
                    Temos taxis de 9 lugares, para alugar. Dispomos também de
                    serviço de Táxi em Macedo de Cavaleiros. Saiba mais.
                  </p>
                </div>
                <div class="card-footer">
                  <a href="#" class="align-self-center btn btn-primary">
                    Saber Mais
                  </a>
                </div>
              </div>
            </Cartao>
          </Col>
          <Col md="3">
            <Cartao>
              <div class="card">
                <img
                  src="/reboque.jpg"
                  class="card-img-top"
                  alt="Reboque em Macedo de Cavaleiros"
                />
                <div class="card-body">
                  <h5 class="card-title">Reboque</h5>
                  <p class="card-text">
                    Serviços de Reboque e assistência em viagem no concelho de
                    Macedo de Cavaleiros e em todo o distrito de Bragança.
                  </p>
                </div>
                <div class="card-footer">
                  <a href="#" class="align-self-center btn btn-primary">
                    Saber Mais
                  </a>
                </div>
              </div>
            </Cartao>
          </Col>
          <Col md="3">
            <Cartao>
              <div class="card">
                <img
                  src="/pintura.jpg"
                  class="card-img-top"
                  alt="Reboque em Macedo de Cavaleiros"
                />
                <div class="card-body">
                  <h5 class="card-title">Pintura</h5>
                  <p class="card-text">
                    Serviços de Pintura/Estufa e chaparia mestra situado em
                    Macedo de Cavaleiros. Trabalhe com profissionais, trabalhe
                    connosco.
                  </p>
                </div>
                <div class="card-footer">
                  <a href="#" class="align-self-center btn btn-primary">
                    Saber Mais
                  </a>
                </div>
              </div>
            </Cartao>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Destaques;
