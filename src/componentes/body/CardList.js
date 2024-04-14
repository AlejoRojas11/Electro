import React from 'react';
import Cards from './Cards';
import electroData from './electroData.js'; // Cambia el nombre del archivo de datos si es necesario
import './card.css';

function CardList() {
  const cards = electroData.map(item => {
    return (
      <Cards key={item.id} item={item} /> // Cambia 'items' a 'item' para mayor claridad
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

export default CardList;


