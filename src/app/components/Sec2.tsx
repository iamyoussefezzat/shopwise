import React from 'react'

import ProductCard from './ProductCard';

const Products =[
  {
     
      img: "/furniture_img1.jpg",
      title: " Trendig Item",
      mainTilte: "MODERN Chair ",
      rating: 4,
      price: "30",
  },
  {
    
      img: "/furniture_img2.jpg",
      title: "Trendig Item",
      mainTilte: "MODERN Chair",
      price: "3320",
      rating: 4,

  },{
    
    img: "/furniture_img3 (1).jpg",
    title: "Trendig Item",
    mainTilte: "MODERN Chair",
    price: "420",
    rating: 4,

},
{
    
  img: "/furniture_img4.jpg",
  title: "Trendig Item",
  mainTilte: "MODERN Chair",
  price: "2220",
  rating: 4,

},
   {
     
      img: "/furniture_img5.jpg ",
      title: "Trendig Item",
      mainTilte: "MODERN Chair",
      price: "120",
      rating: 4,

  },
  {
     
    img: "/furniture_img6.jpg ",
    title: "Trendig Item",
    mainTilte: "MODERN Chair",
    price: "60",
    rating: 4,

},
{
     
  img: "/furniture_img7.jpg ",
  title: "Trendig Item",
  mainTilte: "MODERN Chair",
  price: "200",
  rating: 4,

},
{
     
  img: "/furniture_img2.jpg ",
  title: "Trendig Item",
  mainTilte: "MODERN Chair",
  price: "253",
  rating: 4,

},
];






const Sec2 = () => {
  return (
    <>
   
    <div className="container w-full  pt-16 pl-8">
      <h2 className="font-medium text-2xl pb-4"> New Products</h2>

        <div className="grid grid-cols-1 place-items-center sm:place-item-start sm:grid-cols-2 
         lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">

        { Products.map((item,index)=> (

       
        <ProductCard
         key={index}
          img={item.img}
          title={item.title}
          desc={item.mainTilte}
          price={item.price}
          rating={item.rating}
        />

      ))}

        </div>
    </div>
    </>
  )
}

export default Sec2