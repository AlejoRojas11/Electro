import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Profile from '../Session/Profile'; // Asegúrate de importar el componente Profile o adaptarlo según tu estructura de archivos
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function PerfilUsuario() {
    const { isAuthenticated } = useAuth0();

    if (!isAuthenticated) {
        // Manejar el caso en que el usuario no esté autenticado
        return (
            <>
                {/* Header */}
                <header>
                    {/* Aquí va tu contenido del encabezado */}
                </header>
                <Container>
                    <Row className="justify-content-center mt-5">
                        <Col md={8}>
                            <h1>Debes iniciar sesión para ver tu perfil</h1>
                            {/* Agrega un botón o enlace para redirigir al usuario a la página de inicio de sesión */}
                        </Col>
                    </Row>
                </Container>
                {/* Footer */}
                <footer>
                   <Footer/>
                </footer>
            </>
        );
    }

    return (
        <>
            {/* Header */}
            <header>
              <Header/>
            </header>
            <Container>
                <Row className="justify-content-center mt-5">
                    <Col md={8}>
                        <Profile /> {/* Renderizar el componente Profile para mostrar los datos del perfil */}
                    </Col>
                </Row>
            </Container>
            {/* Footer */}
            <footer>
            <Footer/>
            </footer>
        </>
    );
}

export default PerfilUsuario;
