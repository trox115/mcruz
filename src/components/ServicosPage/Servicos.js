import React from 'react';
import PropTypes from 'prop-types';
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
    height: 100%;
    width: 100%;
  }
`;

function Servicos({ ...props }) {
  const { slug } = props.match.params;

  function search(nameKey, myArray) {
    for (let i = 0; i < myArray.length; i += 1) {
      if (myArray[i].name === nameKey) {
        return i;
      }
    }
    return 0;
  }

  const servicos = [
    {
      name: 'taxi',
      title: 'Serviço de taxi',
      description:
        'A Mcruz Fernandes, oferece também um serviço de taxi em Macedo de Cavaleiros e em todo o distrito de bragança. Temos também um taxi de 9 lugares que poderá alugar.',
      description2:
        'Se precisa de um serviço de táxis rápido, seguro e eficiente chegou ao lugar certo, contacte-nos e faremos deslocar um dos nossos táxis a qualquer local do distrito de Bragança.',
    },
    {
      name: 'reboque',
      title: 'Serviço de Reboque',
      description:
        'Em Macedo de Cavaleiros e no distrito de Bragança, o serviço de pronto-socorro de referência tem um nome: MCruz Fernandes.Prestamos serviços de reboque 24 horas, todos os dias, todo o ano. Se precisar de ajuda na estrada, não hesite em contactar-nos: decerto teremos um veículo na zona em que se encontra, que partirá imediatamente em seu auxílio.',
      description2:
        'Imprevistos acontecem, mas quando acontecerem saiba que fica em boas mãos. Contacte-nos',
    },
  ];

  const i = search(slug, servicos);
  return (
    <Container>
      <Row>
        <Col md="7">
          <h1>{servicos[i].title}</h1>
          <Text>
            <p>{servicos[i].description}</p>
            <p>{servicos[i].description2}</p>
          </Text>
        </Col>
        <Col md="5">
          <Image>
            <img
              src={`/${servicos[i].name}.jpg`}
              alt={`${servicos[i].title} em macedo de Cavaleiros`}
            />
          </Image>
        </Col>
      </Row>
    </Container>
  );
}

Servicos.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
  }),
};
export default Servicos;
