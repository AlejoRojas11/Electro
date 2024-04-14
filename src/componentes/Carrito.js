import React from 'react';

const Carrito = ({ carrito }) => {
    // Función para calcular el total de la compra
    const calcularTotal = () => {
        let total = 0;
        carrito.forEach((item) => {
            total += item.precio;
        });
        return total;
    };

    // Log para verificar si los datos están llegando al componente
    console.log("Datos en el componente cardlava:", carrito);

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Carrito de Compras</h2>
            <div className="row">
                {/* Lista de productos en el carrito */}
                <div className="col-md-8">
                    {carrito.length > 0 ? (
                        <ul className="list-group">
                            {carrito.map((item, index) => (
                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                    <div>
                                        <img src={item.image} alt={item.title} style={{ maxWidth: '100px' }} />
                                        <p className="mb-0 mt-2">{item.title}</p>
                                    </div>
                                    <span className="badge bg-primary rounded-pill">${item.precio}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>El carrito está vacío</p>
                    )}
                </div>
                {/* Sumatoria de los precios */}
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Total</h5>
                            <h6 className="card-subtitle mb-2 text-muted">${calcularTotal()}</h6>
                            <button className="btn btn-secondary mt-3" onClick={() => window.history.back()}>Volver</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carrito;
