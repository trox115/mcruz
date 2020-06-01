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
  const { match } = props;
  const { params } = match;
  const { slug } = params;

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
    {
      name: 'mecanica',
      title: 'Serviço de Mecânica geral',
      description:
        'A solução eficaz e segura para que o seu automóvel esteja sempre em perfeito estado de funcionamento.Revisão e Mecânica Geral em Macedo de Cavaleiros',
      description2:
        'Revisão automóvel em Macedo de Cavaleiros desde o filtro de ar, suspensões, mudança de escovas do limpa-para-brisas, ar condicionado, líquido de travões ou pastilhas de travão, até uma mudança de óleo do motor, mudança de filtros ou mudança de travões.Contacte-nos',
    },

    {
      name: 'pneus',
      title: 'Serviço de Troca de Pneus',
      description:
        'Porque a segurança é o mais importante e na MCruz Fernandes sabemos disso, Temos um serviço de troca de pneus com rapidez e fiabilidade.',
      description2:
        'Embora, em certos casos, o pneu possa ser reparável, antes de qualquer reparação, um profissional deve realizar um exame minucioso. Só um profissional poderá confirmar que o pneu não apresenta danos internos. É necessário desmontar o pneu para conseguir avaliar em que condições se encontra.Contacte-nos',
    },
    {
      name: 'chaparia',
      title: 'Serviço de Chaparia Mestra',
      description:
        'A carroçaria do seu carro, clássico ou não será montada numa mestra com ferramentas específicas para o respectivo modelo, respeitando todas as medidas originais de fábrica.',
      description2:
        'No serviço de chaparia da Mcruz Fernandes, será sempre feita uma avaliação criteriosa das reparações de carroçaria requeridas.Contacte-nos em Macedo de Cavaleiros',
    },
    {
      name: 'pintura',
      title: 'Serviço de Pintura',
      description:
        'O serviço de Pintura da MCruz Fernandes, tem ao seu dispor Profissionais Qualificados e equipamentos de modernos. Possuímos nas nossas instalações zonas de preparação e estufa de pintura. ',
      description2:
        'Somos especialistas na reparação de chapa, pintura, pintura em estufa, polimentos, reparação de mossas sem pintura e recuperação de faróis. Em macedo de Cavaleiros e toda a zona de Bragança. Contacte-nos',
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
    }).isRequired,
  }).isRequired,
};
export default Servicos;
