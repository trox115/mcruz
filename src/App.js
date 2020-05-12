import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarCommon from './common/header';
import Footer from './common/Footer';
import HomePage from './components/HomePage/HomePage';
import Sobre from './components/SobrePage/Sobre';
import Servicos from './components/ServicosPage/Servicos';
import Galeria from './components/GaleriaPage/Galeria';
import Contacto from './components/ContactoPage/Contacto';

function App() {
  return (
    <>
      <Router>
        <NavbarCommon />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/sobre" component={Sobre} />
          <Route exact path="/servicos" component={Servicos} />
          <Route exact path="/galeria" component={Galeria} />
          <Route exact path="/contactos" component={Contacto} />
          <Route exact path="/servicos/reboques" component={Contacto} />
          <Route exact path="/servicos/mecanica" component={Contacto} />
          <Route exact path="/servicos/pneus" component={Contacto} />
          <Route exact path="/servicos/chaparia" component={Contacto} />
          <Route exact path="/servicos/pintura" component={Contacto} />
          <Route exact path="/servicos/venda" component={Contacto} />
          <Route exact path="/servicos/aluguer" component={Contacto} />
          <Route exact path="/servicos/taxi" component={Contacto} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
