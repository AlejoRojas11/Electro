import React from 'react';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import './card.css';
import CardListLava from './CardListLava';

function Lavadoras() { 
    return (
        <div>
            <Header />
            <div className="container"> 
               
                        <CardListLava />
              
                
            </div>
            <Footer />
        </div>
    );
}

export default Lavadoras;
