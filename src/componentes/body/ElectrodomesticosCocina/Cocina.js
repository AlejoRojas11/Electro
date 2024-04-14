import React from 'react';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import './card.css';
import CardListCocina from './CardListCocina';

function Cocina() { 
    return (
        <div>
            <Header />
            <div className="container"> 
               
                        <CardListCocina />
              
                
            </div>
            <Footer />
        </div>
    );
}

export default Cocina;
