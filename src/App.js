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
          <Route exact path="/" component={Sobre} />
          <Route exact path="/sobre" component={Sobre} />
          <Route exact path="/servicos" component={Servicos} />
          <Route exact path="/galeria" component={Galeria} />
          <Route exact path="/contactos" component={Contacto} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
