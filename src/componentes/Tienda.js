import React, { useState } from 'react';

import CardsLava from '../componentes/body/Lavadoras/CardsLava';
import Carrito from '../componentes/Carrito';

function Tienda() {
    const [carrito, setCarrito] = useState([]); // Estado para almacenar los productos en el carrito

    // Función para agregar un producto al carrito
    const agregarProducto = (producto) => {
        setCarrito([...carrito, producto]);
    };

    // Función para vaciar el carrito
    const vaciarCarrito = () => {
        setCarrito([]);
    };

    return (
        <div>
           
            <div className="productos">
                
            
            </div>
            <div className="carrito">
                    <CardsLava agregarProducto={agregarProducto} />
                {/* Renderiza el carrito utilizando el componente Carrito y pasa el estado del carrito */}
                <Carrito carrito={carrito} />
            </div>
        </div>
    );
}

export default Tienda;
