import React from 'react';
import CardsLava from './CardsLava.js';
import electroDataLavadoras from './electroDataLavadoras.js'; // Cambia el nombre del archivo de datos si es necesario
import './card.css';

function CardListLava() {
  const cards = electroDataLavadoras.map(item => {
    return (
      <CardsLava key={item.id} item={item} /> // Cambia 'items' a 'item' para mayor claridad
    );
  });

  return (
    <div>
      <div className='divCards'>
        {cards}
      </div>
    </div>
  );
}

export default CardListLava;
