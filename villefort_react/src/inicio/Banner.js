import React from 'react';
import Carousel from 'nuka-carousel';

import './Banner.css'

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

export default class extends React.Component {
  render() {
    return (
        <>
            <div className="linhaHorizontal"></div>
            <div className="Banner">
                <Carousel
                   defaultControlsConfig={{
                    nextButtonText: <MdKeyboardArrowRight size={30} color='black'/>,
                    prevButtonText: <MdKeyboardArrowLeft size={30} color='black'/>,
                    pagingDotsStyle: {
                      fill: 'blue',  
                      cursor: 'arrow',
                    },
                    nextButtonStyle: {
                        background: 'rgba(255, 255, 255, 0.603)',
                        borderRadius: '100%',
                    },
                    prevButtonStyle: {
                        background: 'rgba(255, 255, 255, 0.603)',
                        borderRadius: '100%',
                    },
                  }}
                    autoplay={true}
                    autoplayInterval={4000}
                    wrapAround={true}
                >  
                    <img src="https://s3.amazonaws.com/villefortentrega.com.br/files/banner_imagens/FRETE-GRATIS-600-1200X400.jpg" />
                    <img src="https://s3.amazonaws.com/villefortentrega.com.br/files/banner_imagens/69933556d9166ef007604bdf74554916.png" />
                    <img src="https://s3.amazonaws.com/villefortentrega.com.br/files/banner_imagens/BANNER-OFERTAS-SITE-1200X400.PNG" />
                    <img src="https://s3.amazonaws.com/villefortentrega.com.br/files/banner_imagens/Banner-desktop.png" />
                </Carousel>
            </div> 
        </>
    );
  }
}
