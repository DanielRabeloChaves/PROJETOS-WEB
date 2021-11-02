import React from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import './Banner.css'
import CapaBanner from './imagensInicio/Banner.jpg'
import CapaBanner2 from './imagensInicio/Banner2.jpg'
import CapaBanner3 from './imagensInicio/Banner3.jpg'
import Barra from './Barra'
 
export default class extends React.Component {
  render() {
    return (
        <div>
             <CarouselProvider
                naturalSlideWidth={10}
                naturalSlideHeight={5.6}
                totalSlides={3}
                interval={5000}
                isPlaying={true}
                >
                <Slider >
                    <Slide index={0}><img className="banners" src={CapaBanner} /></Slide>
                    <Slide index={1}><img className="banners" src={CapaBanner2} /></Slide>
                    <Slide index={2}><img className="banners" src={CapaBanner3} /></Slide>
                </Slider> 
            </CarouselProvider>
            <Barra />
            <div className="faixa">
                <h1>É INICIANTE NO MORTAL KOMBAT ?</h1>
            </div>
            
        </div>

     
    );
  }
}



/*<div className="Artigo">

import './Banner.css'
import CapaBanner from './imagensInicio/Banner.jpg'
import CapaBanner2 from './imagensInicio/Banner2.jpg'
        <div>
            <img className="banners" src={CapaBanner} />
            <img className="banners" src={CapaBanner2} />
</div></div>*/   






