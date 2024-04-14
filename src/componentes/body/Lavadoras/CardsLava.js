import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Importa el icono de react-icons
import './card.css';
import React, { useState, useEffect } from 'react';

function CardsLava(props) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [carrito, setCarrito] = useState([]); // Estado del carrito

    const handleComprar = () => {
        // Agregar el producto al carrito
        const newItem = props.item;
        setCarrito([...carrito, newItem]);
        console.log('Producto agregado al carrito:', newItem);
    };
    

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.pageYOffset);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const botonFlotante = {
        position: 'fixed',
        bottom: scrollPosition > 100 ? '10px' : '-50px',
        right: '30px',
        padding: '30px',
        backgroundColor: '#F0E02E', // Amarillo claro
        color: '#000', // Color del texto
        borderRadius: '50%', // Para hacerlo redondo
        textDecoration: 'none',
        transition: 'bottom 0.3s ease-in-out',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <div className='card2'>
            <img src={props.item.image} alt='logo' />
            <div>
                <p>{props.item.title}</p>
                <p>{props.item.description}</p>
                <p>{props.item.precio}</p>
                <div className='btn'>
                    {/* Aquí pasamos la función handleComprar como prop */}
                    <button type='button' className='btn btn-outline-success' onClick={handleComprar}>Comprar</button>
                </div>
                <div className='carrito'>
                    <Link to="/" style={botonFlotante}>
                        <FaShoppingCart />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CardsLava;
