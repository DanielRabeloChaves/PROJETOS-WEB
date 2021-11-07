import React, { Component } from 'react';

import '@brainhubeu/react-carousel/lib/style.css';
import Carousel, { arrowsPlugin, slidesToShowPlugin } from '@brainhubeu/react-carousel';

import { GiCakeSlice } from "react-icons/gi";
import { MdFastfood } from "react-icons/md";
import { BiCookie } from "react-icons/bi";
import { FaShoppingBasket } from "react-icons/fa";
import { GiHamburger } from "react-icons/gi";
import { GiFrenchFries } from "react-icons/gi";
import { GiHamShank } from "react-icons/gi";
import { GiSlicedBread } from "react-icons/gi";
import { GiHoneyJar } from "react-icons/gi";

import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";

import './Categorias.css'

export default class MyCarousel extends Component {
  render() {
    return (
      <Carousel className="carousell"
		plugins={[
            'infinite',
            {
                resolve: slidesToShowPlugin,
                    options: {
                        numberOfSlides: 11,
                }
            },
			{
                resolve: arrowsPlugin, 
                    options: {
                    arrowLeft: <FcPrevious size={50} name="angle-double-left" />,
                    arrowLeftDisabled: <FcPrevious size={50} name="angle-left" />,
                    arrowRight: <FcNext size={50} name="angle-double-right" />,
                    arrowRightDisabled: <FcNext size={50} name="angle-right" />,
                    addArrowClickHandler: true,  
                    numberOfSlides: 2,
			    }
			},
		]}
        breakpoints={{
            900: {
              plugins: [
                'infinite',
               {
                    resolve: slidesToShowPlugin,
                    options: {
                    numberOfSlides: 6
                }
               },
               {
                resolve: arrowsPlugin, 
                    options: {
                    arrowLeft: <FcPrevious size={50} name="angle-double-left" />,
                    arrowLeftDisabled: <FcPrevious size={50} name="angle-left" />,
                    arrowRight: <FcNext size={50} name="angle-double-right" />,
                    arrowRightDisabled: <FcNext size={50} name="angle-right" />,
                    addArrowClickHandler: true,  
                    numberOfSlides: 2,
			        }
			    },
               
             ]
            },
            1254: {
              plugins: [
                'infinite',
               {
                    resolve: slidesToShowPlugin,
                    options: {
                    numberOfSlides: 8
                 }
               },
               {
                resolve: arrowsPlugin, 
                    options: {
                    arrowLeft: <FcPrevious size={50} name="angle-double-left" />,
                    arrowLeftDisabled: <FcPrevious size={50} name="angle-left" />,
                    arrowRight: <FcNext size={50} name="angle-double-right" />,
                    arrowRightDisabled: <FcNext size={50} name="angle-right" />,
                    addArrowClickHandler: true,  
                    numberOfSlides: 2,
			        }
			    },
             ]
            }
          }}
	  >
			<div className="InconsStore">
				<GiCakeSlice id='inconsFood' size={30} color="mediumseagreen "/> 
				<p>Cake</p> 
			</div>

            <div className="InconsStore">
                <MdFastfood id='inconsFood' size={30} color="mediumseagreen "/> 
                <p>Lunch</p> 
            </div>

            <div className="InconsStore">
                <BiCookie id='inconsFood' size={30} color="mediumseagreen "/> 
                <p>Cookies</p> 
            </div>

            <div className="InconsStore">
                <FaShoppingBasket id='inconsFood' size={30} color="mediumseagreen "/> 
                <p>Grocery Store</p> 
            </div>

            <div className="InconsStore">
                <GiHamburger id='inconsFood' size={30} color="mediumseagreen "/> 
                <p>Hamburger</p> 
            </div>

            <div className="InconsStore">
                <GiFrenchFries id='inconsFood' size={30} color="mediumseagreen "/> 
                <p>FrenchFries</p> 
            </div>

            <div className="InconsStore">
                <GiHamShank id='inconsFood' size={30} color="mediumseagreen "/> 
                <p>Beef</p> 
            </div>

            <div className="InconsStore">
                <GiSlicedBread id='inconsFood' size={30} color="mediumseagreen "/> 
                <p>Breakfast</p> 
            </div>
             
            <div className="InconsStore">
                <GiHoneyJar id='inconsFood' size={30} color="mediumseagreen "/> 
                <p>Jam</p> 
            </div>  
      </Carousel>
    );
  }
}