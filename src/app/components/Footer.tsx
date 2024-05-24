import React from 'react'
import { FaLocationDot, } from 'react-icons/fa6'
import { MdEmail } from "react-icons/md";
import {FaPhoneAlt} from "react-icons/fa"
const Footer = () => {
  return (
    <div className="grid grid-cols-2 place-items-center sm:place-item-start sm:grid-cols-2
         lg:grid-cols-3 xl:grid-cols-3 gap-10 xl:gap-x-20 xl:gap-y-10  bg-slate-900  h-full  h-[60vh] mt-14 pl-8">


          <div>
          <h1 className="text-white  font-bold text-[20px] pb-8">Contact Info</h1>

        <div className="flex pb-4 "> <FaLocationDot className="text-white text-[20px] mr-3 " />
         <p className=" font-medium text-[17px] text-white">123 Street, Old Trafford, NewYork, USA</p> 
          </div>  
             
               <div className="flex"><MdEmail className="text-white  text-[20px] mr-3 " /> <p className=" font-medium text-[17px] text-white"> info@sitename.com</p> </div>
            <div className="flex pt-4">  
            <FaPhoneAlt className="text-white text-[20px] mr-3" />
            <p className=" font-medium text-[17px] text-white "> + 457 789 789 65</p>
</div>   
          </div>
         

          <div>
          <h1 className="text-white  font-bold text-[20px] pb-5">Useful Links</h1>

        
           <div className="text-white text-[15px] pb-3"> <a href="#" className="footer ">location</a> </div> 
           <div className="text-white text-[15px] pb-3"> <a href="#" className="footer ">About Us</a> </div> 
           <div className="text-white text-[15px] pb-3"> <a href="#" className="footer ">FAQ</a> </div> 
           <div className="text-white text-[15px] pb-3"> <a href="#" className="footer ">Contact</a> </div> 
          
          </div>
         

          <div className="email">
          <h1 className="text-white  font-bold text-[20px] pb-8">Subscribe Our Newsletter</h1>

              <div  className="text-white text-[15px] pb-3">
                <p>

              If you want to get an email from us every time we have a new special offer, then sign up here!


                </p></div>
          

                <div className="flex mt-7 ">
                  <input type="email"
                   className="rounded-2xl p-3 outline-none  " 
                   placeholder='Enter Email'
                   />

                   <button className="btn bg-accent p-4 rounded-3xl text-white">Send</button>
                </div>
          </div>
         

         


    </div>
  )
}

export default Footer