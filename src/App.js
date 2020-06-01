import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SimpleReactLightbox from 'simple-react-lightbox';
import NavbarCommon from './common/header';
import Footer from './common/Footer';
import HomePage from './components/HomePage/HomePage';
import Sobre from './components/SobrePage/Sobre';
import Servicos from './components/ServicosPage/Servicos';
import Galeria from './components/GaleriaPage/Galeria';
import Contacto from './components/ContactoPage/Contacto';
import ultimateCell from './components/UltimateCell/UltimateCell';

function App() {
  return (
    <>
      <Router>
        <NavbarCommon />
        <Switch>
          <SimpleReactLightbox>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/sobre" component={Sobre} />
            <Route exact path="/servicos/:slug" component={Servicos} />
            <Route exact path="/galeria" component={Galeria} />
            <Route exact path="/contacto" component={Contacto} />
            <Route exact path="/servicos/reboques" component={Contacto} />
            <Route exact path="/servicos/mecanica" component={Contacto} />
            <Route exact path="/servicos/pneus" component={Contacto} />
            <Route exact path="/servicos/chaparia" component={Contacto} />
            <Route exact path="/servicos/pintura" component={Contacto} />
            <Route exact path="/servicos/venda" component={Contacto} />
            <Route exact path="/servicos/aluguer" component={Contacto} />
            <Route exact path="/servicos/taxi" component={Contacto} />
            <Route exact path="/ultimate" component={ultimateCell} />
          </SimpleReactLightbox>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
