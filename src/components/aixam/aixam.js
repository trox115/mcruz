import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const Margin = styled.div`
  margin: 30px 0 30px 0;
`;

function Aixam() {
  return (
    <Margin>
      <Container>
        <Row>
          <Col md="6">
            <h2>Agora podes conduzir com 16 anos</h2>
            <p>
              A Mcruz Fernandes, tem carros da marca Aixam para que possaas
              conduzir com 16 anos. Aqui tens 4 motivos para conduzir um
              quadriciclo:
            </p>
            <h3>Opção mais segura.</h3>
            <p>
              Os quadriciclos representam uma opção mais segura relativamente à
              alternativa das 2 rodas, quer seja nas tuas deslocações para a
              escola ou nos encontros com os teus amigos.
            </p>
            <h3>Opção mais Confortável</h3>
            <p>
              Com os dias de chuva já aí, é sempre uma melhor opção ter um
              tejadilho por cima da tua cabeça, ainda para mais quando até tens
              a opção que ele seja de abrir para os dias de verão.
            </p>
            <h3>OOpção mais Versátil</h3>
            <p>
              Com a possibilidade de transportares confortavelmente um amigo e
              com espaço na bagageira, é a opção ideal para levares contigo quer
              aquele saco de roupa para os treinos, ou aquele instrumento
              musical, para as tuas atividades extracurriculares depois da
              escola.
            </p>
            <h3>Opção mais Cool</h3>
            <p>
              Podes personalizar o teu veículo para condizer com a tua
              personalidade e com o teu estilo, optando por diferentes cores e
              extras.
            </p>
            <p>Estás indeciso? Podemos ajudar-te</p>
            <a href="/contacto" className="btn btn-primary">
              Contacta-nos
            </a>
          </Col>
          <Col md="6">
            <img
              src="aixam.jpg"
              className="img-fluid"
              alt="Carros aixam em macedo de Cavaleiros e bragança"
            />
          </Col>
        </Row>
      </Container>
    </Margin>
  );
}

export default Aixam;
