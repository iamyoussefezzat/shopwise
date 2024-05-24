import Image from 'next/image';
import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface propsType{

    img:string;
    title: string;
    desc: string;
    price: string;
    rating : number;
}

const ProductCard: React.FC<propsType> = ({img, title, desc , price , rating}) => {

    const generateRating = (rating:number) => {
        switch (rating){
            case 1:
            return(
                <div className="flex gap-1 text-[20px] text-[#FF9529]">
                    <AiFillStar/> 
                    <AiFillStar/> 
                    <AiFillStar/> 
                    <AiFillStar/> 
                    <AiOutlineStar/>
                </div>
            );
            case 2:
            return(
                <div className="flex gap-1 text-[20px] text-[#FF9529]">
                <AiFillStar/> 
                <AiFillStar/> 
                <AiFillStar/> 
                <AiFillStar/> 
                <AiOutlineStar/>
            </div>
            );
            case 3:
            return(
                <div className="flex gap-1 text-[20px] text-[#FF9529]">
                <AiFillStar/> 
                <AiFillStar/> 
                <AiFillStar/> 
                <AiFillStar/> 
                <AiOutlineStar/>
            </div>
            );
            case 4:
            return(
                <div className="flex gap-1 text-[20px] text-[#FF9529]">
                <AiFillStar/> 
                <AiFillStar/> 
                <AiFillStar/> 
                <AiFillStar/> 
                <AiOutlineStar/>
            </div>
            );
            case 5:
            return(
                <div className="flex gap-1 text-[20px] text-[#FF9529]">
                    <AiFillStar/> 
                    <AiFillStar/> 
                    <AiFillStar/>  
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                </div>
            );
            case 6:
                return(
                    <div className="flex gap-1 text-[20px] text-[#FF9529]">
                        <AiFillStar/> 
                        <AiFillStar/> 
                        <AiFillStar/>  
                        <AiOutlineStar/>
                        <AiOutlineStar/>
                    </div>
                );
    
                 case 7:
            return(
                <div className="flex gap-1 text-[20px] text-[#FF9529]">
                    <AiFillStar/> 
                    <AiFillStar/> 
                    <AiFillStar/>  
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                </div>
            );
             
            case 8:
                return(
                    <div className="flex gap-1 text-[20px] text-[#FF9529]">
                        <AiFillStar/> 
                        <AiFillStar/> 
                        <AiFillStar/>  
                        <AiOutlineStar/>
                        <AiOutlineStar/>
                    </div>
                );
            default:
                return null;
        }
    };


  return (
    <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
        <div >
            <Image 
                className="card w-full h-auto rounded-2xl"
                src={img}
                width={200}
                height={300}
                alt={title}

            />
        </div>

        <div className="space-y-2 py-2">
            <h2 className="text-accent font-medium uppercase">
                {title}

            </h2>

            <p className="text-gray-500 max-w-[150px] uppercase">
                {desc}
            </p>


            <div>
                {generateRating(rating)}
            </div>

            <div className="font flex gap-4">
              {price}
              <del className="text-neutral-300 font-normal"> ${parseInt(price)+100}.00
              </del>
            </div>
        </div>

    </div>
  )
}

export default ProductCard;