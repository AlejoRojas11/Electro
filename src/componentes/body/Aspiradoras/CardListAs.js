import React from 'react';
import AsData from './AsData.js'; // Cambia el nombre del archivo de datos si es necesario
import CardsAs from './CardsAspi.js';
import './card.css';

function CardListAs() {
  const cards = AsData.map(item => {
    return (
      <CardsAs key={item.id} item={item} /> // Cambia 'items' a 'item' para mayor claridad
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

export default CardListAs;
