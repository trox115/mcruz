import React from 'react';
import PropTypes from 'prop-types';

function PortInicial(props) {
  const { nome, categoria } = props;
  const final1 = `/galeria/${nome}.jpg`;
  const alt = `${nome} ${categoria} em Macedo de Cavaleiros`;
  return (
    <>
      <div
        className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter"
        data-id={categoria}
        a
        href="#"
        nome={nome}
      >
        <img src={final1} className="img-responsive" alt={alt} />
      </div>
    </>
  );
}
PortInicial.propTypes = {
  nome: PropTypes.string.isRequired,
  categoria: PropTypes.string.isRequired,
};
export default PortInicial;
