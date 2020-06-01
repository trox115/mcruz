import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const Formulario = styled.div`
  input {
    margin-top: 15px;
    width: 100%;
  }
  textarea {
    margin-top: 15px;
    width: 100%;
    height: 200px;
  }
  button {
    margin: 15px 0 15px 0;
  }
`;

function Contacto() {
  return (
    <Container>
      <Row>
        <Col md="12">
          <h1>Contatos</h1>
        </Col>
        <Col md="6">
          <p>Deixe-nos uma mensagem</p>
          <Formulario>
            <form action="submit">
              <input type="text" placeholder="nome" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Assunto" />
              <textarea type="text" placeholder="Mensagem" />
              <button type="submit" className="btn btn-primary">
                Enviar Mensagem
              </button>
            </form>
          </Formulario>
        </Col>
        <Col md="6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11939.5912633356!2d-6.9857509!3d41.5714561!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8474ff1ebed0c543!2sMcruzfernandes!5e0!3m2!1spt-PT!2spt!4v1591008343600!5m2!1spt-PT!2spt"
            width="600"
            height="450"
            frameborder="0"
            style="border:0;"
            allowfullscreen="true"
            aria-hidden="false"
            tabindex="0"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Contacto;
