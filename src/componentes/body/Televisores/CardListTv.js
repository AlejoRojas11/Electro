import React from 'react';
import CardsTv from './CardsTv.js';
import TvData from './TvData.js'; // Cambia el nombre del archivo de datos si es necesario
import './card.css';

function CardListTv() {
  const cards = TvData.map(item => {
    return (
      <CardsTv key={item.id} item={item} /> // Cambia 'items' a 'item' para mayor claridad
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

export default CardListTv;
