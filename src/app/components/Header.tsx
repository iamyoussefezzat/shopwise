import React from 'react'
import { FaFacebook , FaTwitter,FaInstagram,FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <div className="border-b border-gray-200 hidden shadow-xl sm:block">

    <div className="container py-4">
        <div className="flex justify-between items-center">

               <div className="hidden    lg:flex gap-1">
                <div className="NavBar__icon_wrapper">
                <FaFacebook />
                </div>
                <div className="NavBar__icon_wrapper">
                <FaTwitter />

                </div>
                <div className="NavBar__icon_wrapper1">
                <FaInstagram />
                </div>
                <div className="NavBar__icon_wrapper">
                <FaLinkedin />
                </div>
               </div>
            
                    <div className="text-gray-500 text-{12px}">
                        <b> Free SHIPPING   </b> THIS WEEK ORDER OVER- 50$
                    </div> 
                    <div className="flex gap-4">
                        <select className="text-gray-500 text-{12px} w-{70px} outline-none"
                        id='currency' 
                        name='currency'
                        >
                            <option value="USD$">USD$</option>
                            <option value="EUR">USD$</option>
                            </select> 

                        <select className="text-gray-500 text-{12px} w-{80px}"
                        id='lang' 
                        name='lang'
                        >
                            <option value="English">English</option>
                            <option value="Arabic">Arabic</option>
                        </select>                                 
                    </div>




</div>
</div>
</div>
  )
}

export default Header