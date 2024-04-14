import React from 'react';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import CardListTv from './CardListTv';
import './card.css';

function Televisores() { 
    return (
        <div>
            <Header />
            <div className="container"> 
               
                        <CardListTv />
              
                
            </div>
            <Footer />
        </div>
    );
}

export default Televisores;
