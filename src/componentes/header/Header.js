import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'; // Importamos el archivo de estilos CSS
import { useAuth0 } from "@auth0/auth0-react";
import SearchBar from './SearchBar'; // Importa el componente SearchBar

function Header() {
    const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src="logo.svg" alt="Logo" style={{ maxWidth: '120px', maxHeight: '40px', marginRight: '10px' }} />
                        ElectroMundo
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <Link to="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Productos
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link to="/tele" className="dropdown-item">Televisores</Link></li>
                                    <li><Link to="/Aspiradoras" className="dropdown-item">Aspiradoras</Link></li>
                                    <li><Link to="/lavadoras" className="dropdown-item">Lavadoras</Link></li>
                                    <li><Link to="/CocinaElectro" className="dropdown-item">Electrodomésticos de Cocina</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/Contacto" className="nav-link">
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                        <div className='justify-content-center'>
                        <SearchBar /> {/* Aquí incluimos el componente SearchBar */}
                        </div>
                        <div>
                        <ul className="navbar-nav">
                            {isAuthenticated ? (
                                <li className="nav-item">
                                    <button className="btn btn-outline-danger" onClick={logout}>Cerrar Sesión</button>
                                </li>
                            ) : (
                                <li className="nav-item">
                                    <button className="btn btn-outline-primary" onClick={loginWithRedirect}>Iniciar Sesión</button>
                                </li>
                            )}
                            {/* Mostrar el nombre del usuario autenticado en el navbar */}
                            {isAuthenticated && (
                                <li className="nav-item">
                                    <Link to="/perfil" className="nav-link">{user.name}</Link>
                                </li>
                            )}
                        </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
