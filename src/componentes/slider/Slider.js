import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import combo1 from './img/combo1.jpg';
import combo2 from './img/combo2.jpg';
import combo3 from './img/combo3.jpg';
import './slider.css';

const Slider = () => {
    const images = [
        {
            src: combo1, 
            alt: 'Combo 1',
            caption: 'Lleve esta increíble oferta solo por el mes de la mujer'
        },
        {
            src: combo2, 
            alt: 'Combo 2',
            caption: 'No deje pasar este regalo por la compra de dos electrodomésticos, lleve 3 gratis'
        },
        {
            src: combo3, 
            alt: 'Combo 3',
            caption: '¡Ya no sé qué poner!'
        }
    ];

    return (
        <Carousel interval={5000}> {/* Cambia el valor a la cantidad de milisegundos deseados */}
            {images.map((image, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        src={image.src}
                        alt={image.alt}
                    />
                    <Carousel.Caption>
                        <h3>{image.alt}</h3>
                        <p>{image.caption}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default Slider;
