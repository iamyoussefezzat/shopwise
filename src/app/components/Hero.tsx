"use client"

import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slide from './Slide';
import Image from 'next/image';


const Hero = () => {

    const settings = {

        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        pauseOnHover:false,
      };

     const slidedata =[
        {
            id:0,
            img: "/banner7.jpg",
            title: "Trendig Item",
            mainTilte: "MODERN Chair",
            price: "$20",
        },
        {
            id:1,
            img: "/banner8.jpg",
            title: "Trendig Item",
            mainTilte: "MODERN Chair",
            price: "$20",

        }, {
            id:2,
            img: "/banner9.jpg",
            title: "Trendig Item",
            mainTilte: "MODERN Chair",
            price: "$20",

        },
     ];

  return (
   <div>
    <div className="container pt-6 lg:pt-0 pl-8">
        <Slider {...settings}>
            {slidedata.map((item)=>(

                 <Slide

                 key={item.id}
                 img={item.img}
                 title={item.title}
                 mainTilte={item.mainTilte}
                 price={item.price}
 
             />
            ))}
           

        </Slider>
    </div>
   </div>

  )
}

export default Hero