import React from 'react';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import CardListAs from './CardListAs';
import './card.css';

function Aspiradora() { 
    return (
        <div>
            <Header />
            <div className="container"> 
               
                        <CardListAs />
              
                
            </div>
            <Footer />
        </div>
    );
}

export default Aspiradora;
