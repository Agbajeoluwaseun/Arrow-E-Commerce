import React from 'react'
import Logo from "../images/R (1).png"
import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import Cart from './cart'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'



const Navbar1 = () =>{
  
   const totalAmount = useSelector((state) => state.cart.totalAmount);
   const [open, setOpen] = useState(false);
 
   const handleOpen = () => {
          setOpen(true);
         };

          const dispatch = useDispatch();

    return(

    <div className='hea' >

    <div className='flex justify-around items-center'>
    
    <div>
    <img className="logoimage"
     src={Logo} height="5"  alt="arrow"></img>
     <p>arrow</p>
    </div>

    <div className='flex flex-row items-center cursor-pointer' 
    onClick={handleOpen} > 

    {totalAmount > 0 ? (
      <p className="rounded-full bg-gray-300 px-2 font-inter text-sm mr-1">
        {totalAmount}
      </p>
    ) : (

   <svg fill="none" viewBox="0 0 30 30" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>

   
   ) }
    
   <p className='font-inter text-base font-medium tracking-normal leading-none text-center' > cart</p>
   <div>
     { open && <Cart openModal={open} setOpen={setOpen}></Cart>}
     </div>
    </div>
    
    </div>
      </div>
    

       );

      }

      export default Navbar1