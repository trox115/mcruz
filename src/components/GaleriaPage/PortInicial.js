import React from 'react';

function PortInicial(props) {
  const { nome, categoria } = props;
  const final1 = `${nome}.jpg`;
  return (
    <>
      <p>Hello </p>
      <div
        className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter"
        data-id={categoria}
        a
        href="#"
        nome={nome}
      >
        <img src={final1} className="img-responsive" alt="Topoleo " />
      </div>
    </>
  );
}

export default PortInicial;
