import React from 'react';
import CardsLava from './CardsCocina.js';
import electroDataCocina from './electroDataCocina.js'; // Cambia el nombre del archivo de datos si es necesario
import './card.css';

function CardListCocina() {
  const cards = electroDataCocina.map(item => {
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

export default CardListCocina;
