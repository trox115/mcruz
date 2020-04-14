import React from 'react';
import Iframe from 'react-iframe';
import styled from 'styled-components';
import facebook from './facebook.png';
import instagram from './instagram.png';

const Redes = styled.div`
  display: flex;
  text-align: center;
  align-content: center;
  justify-content: center; /* align horizontal */

  align-items: center;
  a {
    text-align: center;
  }
  img {
    width: 54px;
    margin-left: 10px;
  }
`;

function FooterComp() {
  return (
    <footer class="page-footer font-small stylish-color-dark pt-4">
      <div class="container text-center text-md-left">
        <div class="row">
          <div class="col-md-4 mx-auto">
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">
              Mcruz Fernandes
            </h5>
            <p>
              Empresa de Macedo de Cavaleiros, especializada em vários trabalhos
              automóveis. Desde Mecânica Geral a alinhamento de pneus,
              chaparia,pintura. Temos também um serviço de reboques e aluguer de
              táxis.
            </p>
          </div>

          <hr class="clearfix w-100 d-md-none" />

          <div class="col-md-2 mx-auto">
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

            <ul class="list-unstyled">
              <li>
                <a href="#!">Sobre Nós</a>
              </li>
              <li>
                <a href="#!">Politica de Privacidade</a>
              </li>
              <li>
                <a href="#!">Termos e Condiçes</a>
              </li>
            </ul>
          </div>

          <hr class="clearfix w-100 d-md-none" />

          <div class="col-md-3 mx-auto">
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">
              Redes Socias
            </h5>
            <Redes>
              <a href="https://www.facebook.com/mcruz.fernandes">
                <img src={facebook} alt="facebook mcruz fernandes" />
              </a>
              <a href="https://www.facebook.com/mcruz.fernandes">
                <img src={instagram} alt="facebook mcruz fernandes" />
              </a>
            </Redes>
          </div>
          <div class="col-md-3 mx-auto">
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">
              Onde estamos
            </h5>

            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11939.5912633356!2d-6.9857509!3d41.5714561!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8474ff1ebed0c543!2sMcruzfernandes!5e0!3m2!1spt-PT!2spt!4v1586893573729!5m2!1spt-PT!2spt"
              width="100%"
              height="150"
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            />
          </div>

          <hr class="clearfix w-100 d-md-none" />
        </div>
      </div>

      <hr />

      <hr />

      <div class="footer-copyright text-center py-3">
        © 2020 Copyright:
        <a href="#"> CodeSpider</a>
      </div>
    </footer>
  );
}

export default FooterComp;
