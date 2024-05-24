import React from 'react'
import Link from 'next/link'


const NavBar = () => {
  return (
    <div className="hidden lg:block">
        <div className='container'>

            <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-black uppercase">
           <Link className="nav relative"  href='#'>
          HOME
            </Link>
            <Link className="nav relative"  href='#'>
          CATEGORY
            </Link>
            <Link className="nav relative"  href='#'>
         About
            </Link>
            <Link className="nav relative"  href='#'>
          Products
            </Link>
            <Link className="nav relative"  href='#'>
          
          Chairs
            </Link>
            <Link className="nav relative"  href='#'>
            Collection
            </Link>
            <Link className="nav relative"  href='#'>
          BLOG 
            </Link>
            <Link className="nav relative"  href='#'>
          HOT OFFERS 
            </Link>
            </div>

        </div>

    </div>
  )
}

export default NavBar