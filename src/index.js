import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react'; // Importa Auth0Provider
import Router from './Router';

const root = createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="devrojas2433.us.auth0.com"
    clientId="fw3L2V7dVbwfSTokleR079Go3fxYOSzS"
    redirectUri={window.location.origin} // Corrige el nombre de la propiedad a redirectUri
  >
    <Router />
  </Auth0Provider>
);
