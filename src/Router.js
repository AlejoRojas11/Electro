import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Inicio from './componentes/Inicio';
import NotFound from './componentes/NotFound';
import Contacto from './componentes/Contacto';
import Televisores from './componentes/body/Televisores/Televisores';
import Aspiradora from './componentes/body/Aspiradoras/Aspiradoras';
import Lavadoras from './componentes/body/Lavadoras/Lavadoras';
import Cocina from './componentes/body/ElectrodomesticosCocina/Cocina';
import Tienda from './componentes/Tienda';
import PerfilUsuario from './componentes/Session/PerfilUsuario';

function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/tele" element={<Televisores />} />
        <Route path="/aspiradoras" element={<Aspiradora />} />
        <Route path="/lavadoras" element={<Lavadoras />} />
        <Route path="/cocinaElectro" element={<Cocina />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/perfil" element={<PerfilUsuario />} />
       
      </Routes>
    </HashRouter>
  );
}

export default Router;
