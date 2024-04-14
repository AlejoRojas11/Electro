import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer className="text-center text-md-start bg-light text-muted py-4">
            <div className="container">
                <section className="mb-4">
                    <div className="social-media">
                        <tr>
                        <a href="#" className="social-icon">
                            <i className="bi bi-facebook"></i>
                        </a>
                        </tr>
                        <tr>
                        <a href="#" className="social-icon">
                            <i className="bi bi-instagram"></i>
                        </a>
                        </tr>
                    </div>
                </section>

                <section className="mb-4">
                    <h5 className="text-uppercase fw-bold mb-4">ElectroMundo</h5>
                    <p>
                        ElectroMundo es tu tienda de confianza para encontrar los mejores electrodomésticos para tu hogar. Ofrecemos una amplia gama de productos de alta calidad para cubrir todas tus necesidades, desde lavadoras y refrigeradores hasta aspiradoras y televisores.
                    </p>
                </section>

                <section className="mb-4">
                    <h5 className="text-uppercase fw-bold mb-4">Productos</h5>
                    <ul className="list-unstyled">
                        <li><a href="#" className="text-reset">Lavadoras</a></li>
                        <li><a href="#" className="text-reset">Refrigeradores</a></li>
                        <li><a href="#" className="text-reset">Aspiradoras</a></li>
                        <li><a href="#" className="text-reset">Televisores</a></li>
                    </ul>
                </section>

                <section className="mb-4">
                    <h5 className="text-uppercase fw-bold mb-4">Contacto</h5>
                    <p><i className="fas fa-home me-3"></i>Pereira</p>
                    <p><i className="fas fa-envelope me-3"></i>info@electromundo.com</p>
                    <p><i className="fas fa-phone me-3"></i>+57 123 456 789</p>
                </section>
            </div>

            <div className="text-center p-4" >
                © 2021 ElectroMundo. Todos los derechos reservados.
            </div>
        </footer>
    );
}

export default Footer;
